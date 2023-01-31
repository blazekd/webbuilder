<?php
    // name of file input in form, actual name used in form must have [] appended - for example <input type="file" multiple name="images[]" />
    $formFilesInput = "images";



    // name of folder where files should be saved
    $filesFolder = "files";

    // image relative URL
    $imageUrl = "$filesFolder/image";

    // thumbnail relative URL
    $thumbnailUrl = "$filesFolder/thumbnail";



    // path to folder where files should be saved
    $filesPath = "../$filesFolder";

    // path to full size images
    $imageFilePath = "$filesPath/image";

    // path to thumbnails
    $thumbnailFilePath = "$filesPath/thumbnail";


    // turn off caching
    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
?>