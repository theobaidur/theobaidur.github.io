<?php
$question_added = FALSE;
if (isset($_POST['submit'])) {
    array_pop($_POST);
    $cat = $_POST['category'];
    unset($_POST['category']);
    if (file_exists($file = "trivia/" . $cat . ".json")) {
        $array = json_decode(file_get_contents($file), true);
        $array[] = $_POST;
        $question_added = (file_put_contents($file, json_encode($array)))?TRUE:FALSE;
    } else {
        $question_added = FALSE;
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
                        echo "<h3>".($question_added?"Question added successfully":"Question not added")."</h3>";
                    ?>
                    <a href="form.html">Add question</a> <a href="play.html">Play</a> 
                </div>
            </div>
        </div>
    </body>
</html>