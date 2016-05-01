<?php 
    $done = FALSE;
    if(isset($_POST['submit'])){
        $array = json_decode(file_get_contents($_POST['file']), true);
        $index = $_POST['index'];
        $array_2 = array();
        for($i=0;$i<count($array);$i++){
            if($i==$index){
                continue;
            }
            $array_2[]=$array[$i];
        }
        unset($array[$index]);
      
        if(file_put_contents($_POST['file'], json_encode($array_2))){
            $done=true;
        }
        
    }
?>

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Trivia Game</title>
        <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:700,300' rel='stylesheet' type='text/css'>
        <link href="trivia/trivia.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="trivia/jquery.js"></script>
    </head>
    <body>
        <div id="wrapper" class="">
            <div class="center">
                <div id="confirm_page">
                    <?php 
                        echo "<h3>".($done?"Question deleted successfully":"Question not deleted")."</h3>";
                    ?>
                    <a href="form.html">Add question</a> 
                    <a href="question_list.php">Question list</a> 
                    <a href="play.html">Play</a> 
                </div>
            </div>
        </div>
    </body>
</html>