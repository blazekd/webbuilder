<?php 
    include 'vars.php';

    $result = [];

    if (is_dir($imageFilePath)) {
        $arr = scandir($imageFilePath);
        foreach ($arr as $item) {
            if (is_file("$imageFilePath/$item")) {
                $data = [ 
                    'image' => "https://$_SERVER[HTTP_HOST]/$imageUrl/$item", 
                    'thumbnail' => "https://$_SERVER[HTTP_HOST]/$thumbnailUrl/$item" ];
                array_push($result, $data);
            }
        }
    }

    // set headers and return result
    // todo
    header("Access-Control-Allow-Origin: *");
	header('Content-Type: application/json; charset=utf-8');
	exit(json_encode($result, JSON_UNESCAPED_SLASHES));	
?>
