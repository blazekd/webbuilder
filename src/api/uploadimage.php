<?php

include 'vars.php';
include 'cors.php';

// if files were send
if(isset($_FILES[$formFilesInput])) {
	$images = $_FILES[$formFilesInput];
	
	//make directiories if they do not exist
	if (!is_dir("$filesPath")) {
		mkdir("$filesPath");
	}
	if (!is_dir("$thumbnailFilePath")) {
		mkdir("$thumbnailFilePath");
	}
	if (!is_dir("$imageFilePath")) {
		mkdir("$imageFilePath");
	}
	
	$result = [];
	
	//for every file sent
	foreach ($images["error"] as $key => $error) {
		$imageMime = mime_content_type($images['tmp_name'][$key]);
		
		//check if ok and correct type
		if (($error == UPLOAD_ERR_OK) && ($imageMime == "image/jpeg" || $imageMime == "image/png")) {
			
			//hash file
			$fileHash = hash_file('crc32',$images["tmp_name"][$key]);
			
			//get extension
			switch ($imageMime) {
				case "image/jpeg":
					$fileExt = "jpg";
				break;
				case "image/png":
					$fileExt = "png";
				break;
			}
			
			$fileName = "$fileHash.$fileExt";
			$fileLocation = "$imageFilePath/$fileName";

			// move file from tmp location to final location
			move_uploaded_file($images["tmp_name"][$key], "$fileLocation");
			
			// remove unnecessary image information
			$theImage = new Imagick("$fileLocation");
			$theImage->stripImage();
			$theImage->writeImage("$fileLocation");
			
			// create thumbnail for image
			$theImage->thumbnailImage(240,0,FALSE);
			$theImage->writeImage("$thumbnailFilePath/$fileName");
			$theImage->destroy();
			
			// save 
			$data = [ 
				'image' => "https://$_SERVER[HTTP_HOST]/$imageUrl/$fileName", 
				'thumbnail' => "https://$_SERVER[HTTP_HOST]/$thumbnailUrl/$fileName" ];
			array_push($result, $data);
		}
	}
	// set headers and return result
	header('Content-Type: application/json; charset=utf-8');
	exit(json_encode($result, JSON_UNESCAPED_SLASHES));	
}
?>
