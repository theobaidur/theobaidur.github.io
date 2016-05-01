<?php 
    // integer starts at 0 before counting
    $i = 0; 
    $dir = getcwd();
    if ($handle = opendir($dir)) {
        while (($file = readdir($handle)) !== false){
            if (!in_array($file, array('.', '..')) && !is_dir($dir.$file)) 
                $i++;
							echo $file."<br/>";

        }
    }
    // prints out how many were in the directory
    echo "There were $i files";
?>