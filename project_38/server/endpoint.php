<?php

/**
 * PHP Server-Side Example for Fine Uploader (traditional endpoint handler).
 * Maintained by Widen Enterprises.
 *
 * This example:
 *  - handles chunked and non-chunked requests
 *  - assumes all upload requests are multipart encoded
 */

// Include the upload handler class
require_once "handler.php";

$uploader = new UploadHandler();

// Specify the list of valid extensions, ex. array("jpeg", "xml", "bmp")
$uploader->allowedExtensions = array("jpeg", "jpg"); // all files types allowed by default

// Specify max file size in bytes.
$uploader->sizeLimit = 20 * 1024 * 1024; // default is 20 MiB

// Specify the input name set in the javascript.
$uploader->inputName = "qqfile"; // matches Fine Uploader's default inputName value by default

// If you want to use the chunking/resume feature, specify the folder to temporarily save parts.
$uploader->chunksFolder = "chunks";

$method = $_SERVER["REQUEST_METHOD"];
if ($method == "POST") {
    header("Content-Type: text/plain");

    //If the request isn't a multipart request, it is probably sending the "done" message for the chunked uploads
    if (strpos(strtolower($_SERVER['CONTENT_TYPE']), 'multipart/') !== 0 && isset($_REQUEST['qquuid']) && $_REQUEST['qquuid'] != '')
    {
        //Put all of the files back together
         $result = $uploader->processChunkedUpload("files");

        $result["template"]=$_POST['template']; //getting template
        $result["category"]=$_POST['category'];  //getting category id

         echo json_encode($result); 
    }
    else
    {
        // Call handleUpload() with the name of the folder, relative to PHP's getcwd()
        $result = $uploader->handleUpload("files");

        // To return a name used for uploaded file you can use the following line.
        $result["uploadName"] = $uploader->getUploadName();
    	
        //Non-chunked files should get this information in the handler.php file
    	$result["template"]=$_POST['template']; //getting template
    	$result["category"]=$_POST['category'];  //getting category id
        echo json_encode($result); 
    }
}
else {
    header("HTTP/1.0 405 Method Not Allowed");
}

?>
