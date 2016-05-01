<?php
$files = array();
foreach (glob("trivia/*.json") as $file) {
  $files[] = $file;
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
                <div id="question_list">
                   
                    <table border="1" cellpadding="5px" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Category</th>
                                <th>Question</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                $i = 0;
                                foreach($files as $index=>$value){
                                    $j = 0;
                                    $array = json_decode(file_get_contents($value), true);
                                    foreach($array as $key=>$data){
                                        
                                    ?>
                                    
                                <form action="delete_question.php" method="post">
                                    
                            <tr>
                                    <td><?php echo ++$i ?><input type="hidden" name="index" value="<?php echo $j++; ?>" /></td>
                                    <td><input type="hidden" name="file" value="<?php echo $value; ?>" /><?php echo get_category($value); ?></td>
                                    <td><?php echo $data["que"] ?></td>
                                    <td><button type="submit" name="submit">Delete</button></td>
                                
                            </tr>
                                </form>
                            <?php
                            
                                    }
                                }
                            function get_category($file){
                                $filename = array_pop(explode("/", $file));
                                $filename = explode(".",$filename);
                                return ucfirst($filename[0]);
                                
                            } 
                            ?>
                        </tbody>
                    </table>
                      <a href="form.html">Add question</a> <a href="play.html">Play</a> 
                </div>
            </div>
        </div>
    </body>
</html>