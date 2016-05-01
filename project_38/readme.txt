css/
	custom.fineuploader-5.0.2.css -- default styles
	custom.fineuploader-5.0.2.min.css -- default styles
	fineuploader.css  -- custom styles (will need to be edited)

images/
	edit.gif
	loading.gif
	OK.png
	processing.gif
	success1.jpg
	tick.png
	trash.png
	vertical.png

js/
	custom.fineuploader-5.0.2.js -- core js (do not edit)
	custom.fineuploader-5.0.2.min.js -- core js (do not edit)
	fineuploader.js - custom js (will probably need to be edited)

server/
	chunks/  -- files are placed here while they are uploading, must have write permissions
	files/  -- files are placed here when they are finished uploading, must have write permissions
	endpoint.php -- this handles all POST requests from FineUploader (you shouldn't need to edit this)
	handler.php -- this does all the processing and combinging of the images (you shouldn't need to edit this)

index.php  -- this is the main page, and it should be modified to look/function as our example video shows
index_sample.php -- basic upload page