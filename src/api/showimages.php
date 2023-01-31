<!DOCTYPE html>
<html>
<head>
<title>Images</title>
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
    }

    .image {
        display: flex;
        align-items: center;
    }

    .image img {
        margin: 10px;
    }
</style>
</head>
<body>
<div class="wrapper">
    <?php 
        include 'vars.php';

        if (is_dir($imageFilePath)) {
            $arr = scandir($imageFilePath);
            foreach ($arr as $item) {
                if (is_file("$imageFilePath/$item")) {
                    echo '<div class="image">';
                    echo "<img src='$thumbnailFilePath/$item' alt='$item'>";
                    echo "<div><p>Full size: <a href='$imageFilePath/$item'>https://$_SERVER[HTTP_HOST]/$imageUrl/$item</a></p>";
                    echo "<p>Thumbnail: <a href='$thumbnailFilePath/$item'>https://$_SERVER[HTTP_HOST]/$thumbnailUrl/$item</a></p></div>";
                    echo '</div>';
                }
            }
        }
    ?>
</div>

</body>
</html>