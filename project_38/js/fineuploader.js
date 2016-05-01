// common variables
var selectedFiles = [];
var fileCount = 0;
var aftercount = 0;

var totalsize = 0;
var uploadedsize = 0;
var scroll_data = 0;

var iBytesUploaded = 0;
var iBytesTotal = 0;
var iPreviousBytesLoaded = 0;

var newuploadedBytes = 0;
var newtotalBytes = 0;

var duplicate = 0;

var average = 0;
var speed = 0;
var startTime = 0;
var iSpeed = 0;
var out = '';
var progresscount = 0;
var totbytes = [];
var timeest = 0;

var testtime = 0;
var tottest = 0;

/* fine uploader initialization script start**/
$(document).ready(function() {
	var uploadHandler = $('#manual-fine-uploader').fineUploader({
		debug : false,
		maxConnections : 4,
		request : {
			endpoint : 'server/endpoint.php',
			forceMultipart : true,
			params : // send the values to backend file (endpoint.php)
			{
				template : function() {
					return $("#price_template_id").val();
				},
				category : function() {
					return $("#category_id").val();
				}
			}
		},
		validation : {// validation for the images uploaded
			allowedExtensions : ['jpeg', 'jpg'],
			sizeLimit : 20971520, // 20 MB = 20 * 1024 * 1024 bytes 20971520,
			stopOnFirstInvalidFile:false
		}, 
		editFilename : {
			enabled : true
		},
		display : {//display image on upload
			fileSizeOnSubmit : true
		},
		/*
		 dragAndDrop:{
		 reportDirectoryPaths: true //Include the path of dropped files (starting with the top-level dropped directory). This value will be sent along with the request as a qqpath parameter.
		 },*/
		resume : {//enable resume on upload
			enabled : true
		},
		retry : {//enable retry on upload
			enableAuto : true
		},
		forceMultipart : {
			enabled : true
		},
		chunking : {//enable chunking on upload
			concurrent : {
				enabled : true
			},
			enabled : true,
			partSize : 300000, //200KB per chunk
			success : {
				endpoint : 'server/endpoint.php'
			}
		},
		/*deleteFile: {
		 enabled: true,
		 method: "POST",
		 endpoint: 'server/endpoint.php'
		 }, */
		template : "qq-template-manual-noedit",
		autoUpload : false,
		showMessage : function(message) {//show message if any error occur during uplaod process
			var con = $("<div>").addClass("popup_msg").text(message);
			$("#upload_form").append(con);
			con.fadeIn();
			setTimeout(function(){
				con.fadeOut(function(){
					con.remove();
				});
				
			},2000);
		}
	}).on('submitted', function(event, id, filename) {//on submit loading the files.
		
		
		iBytesTotal += $(this).fineUploader("getSize", id);
		//console.log(sizzz);
		var objDiv = document.getElementById("scrollUploadedImages");
		objDiv.scrollTop = objDiv.scrollHeight;
		scrollHeight = 0;
		$(".dropdown_menus").show();

		classid = '.tr_classstyle qq-file-id-' + id;
		var filesize = $("li.qq-file-id-" + id).find(".file_size").find(".qq-upload-size-selector").html();

		var type = filesize.slice(-2);

		aftercount++;

		/** calculating the total size of files uploaded start **/
		var itemsize = filesize.slice(0, -2);
		if (type == 'MB') {
			itemsize = parseFloat(itemsize) * 1024;
		}

		totalsize += parseFloat(itemsize);
		//alert(totalsize);
		var mbsize = 0;
		if (totalsize > parseFloat(1024)) {

			mbsize = parseFloat(totalsize / 1024).toFixed(2) + 'MB';

		} else {
			mbsize = parseFloat(totalsize).toFixed(2) + 'kB';

		}
		//alert(mbsize);
		if (mbsize == 'NaNkB') {
			$("#totalsize").html('0');
		} else {
			$("#totalsize").html(mbsize);
		}
		/** calculating the total size of files uploaded end  **/

		/** hiding drag drop option after 10 files being uploaded **/
		if (parseInt(aftercount) >= 10) {
			$("#draguploading_file").hide();
		}

		/** hiding thumbnails displaying after 50 files being uploaded **/
		if (parseInt(aftercount) > 50) {
			$(".th_preview").remove();
			$(".image_preview").remove();

		}

		$(".success_message").hide();
		/*
		if (qq.indexOf(selectedFiles, filename) === -1) {
			selectedFiles.push(filename);

			$("#filecount").text(parseInt(aftercount) + ' file(s)');
			return true;
		} else {
			//displaying the message if any dupliacte files are uploaded
			if (duplicate == 0) {
				alert("One or more images with the same name have been selected.  Duplicate filenames will be skipped.");
			}

			duplicate++;
			aftercount--;
			$("li.qq-file-id-" + id).remove();

			//displaying the the total file count that are being uplaoded 
			$("#filecount").text(parseInt(aftercount) + ' file(s)');
			return false;
		}*/
		
		selectedFiles.push(filename);

		$("#filecount").text(parseInt(aftercount) + ' file(s)');
		
		if(selectedFiles.length){
			$("#draguploading_file").removeClass('no_image');
		}
		
	}).on('progress', function(event, id, name, uploadedBytes, totalBytes) {//on upload progress getting the number of bytes uploaded and total number of bytes
		progresscount++;

		var $fileEl = $(this).fineUploader("getItemByFileId", id), $pause_btn = $fileEl.find(".fa-pause"), $play_btn = $fileEl.find(".fa-play"), $refresh_btn = $fileEl.find(".fa-refresh"), $dlt_btn = $fileEl.find(".fa-times"), $ok_btn = $fileEl.find(".fa-play"), $btns = $fileEl.find(".fa"), $progress_bar = $fileEl.find(".upload_progress_indicator");
		
		$fileEl.addClass('upload_in_progress');
		
		$btns.removeAttr('style');

		$('#scrollUploadedImages').stop().animate({
			scrollTop : parseInt(scroll_data)
		});

		var wid = parseInt((uploadedBytes / totalBytes) * 100);
		$progress_bar.css("width", wid + "%");
		if ( id in totbytes) {
			var testbytes = totbytes[id];
			newuploadedBytes -= parseInt(testbytes);
			newuploadedBytes += parseInt(uploadedBytes);
			totbytes[id] = uploadedBytes;
		} else {
			totbytes[id] = uploadedBytes;
			newuploadedBytes += parseInt(uploadedBytes);
		}
		doInnerUpdates();
		

	}).on('cancel', function(event, id, fileName) {
		aftercount--;
		$("#filecount").text(aftercount + " file(s)");
		if(aftercount==0){
			$("#draguploading_file").addClass('no_image');
		}
	
		var a = $(".qq-file-id-" + id).find('.qq-upload-size-selector').text();
		var type = a.slice(-2);
		/** calculating the total size of files uploaded start **/
		var itemsize = a.slice(0, -2);

		if (type == 'MB') {
			itemsize = parseFloat(itemsize) * 1024;
		}

		totalsize -= parseFloat(itemsize);
		//alert(totalsize);
		var mbsize = 0;
		if (totalsize > parseFloat(1024)) {

			mbsize = parseFloat(totalsize / 1024).toFixed(2) + 'MB';

		} else {
			mbsize = parseFloat(totalsize).toFixed(2) + 'kB';

		}
		//alert(mbsize);
		if (mbsize == 'NaNkB') {
			$("#totalsize").html('0');
		} else {
			$("#totalsize").html(mbsize);
		}
		
		
		
	}).on('error', function(event, id, name, errorReason, xhrOrXdr) {
		var $fileEl = $(this).fineUploader("getItemByFileId", id), $pause_btn = $fileEl.find(".fa-pause"), $play_btn = $fileEl.find(".fa-play"), $refresh_btn = $fileEl.find(".fa-refresh"), $dlt_btn = $fileEl.find(".fa-times"), $ok_btn = $fileEl.find(".fa-play"), $btns = $fileEl.find(".fa"), $progress_bar = $fileEl.find(".upload_progress_indicator");
		$fileEl.removeClass('upload_in_progress');
		$btns.removeAttr('style');
		$btns.hide();

		$refresh_btn.show();
		$dlt_btn.show();

	}).on('autoRetry', function(event, id, name, attemptNumber) {
		var $fileEl = $(this).fineUploader("getItemByFileId", id), $pause_btn = $fileEl.find(".fa-pause"), $play_btn = $fileEl.find(".fa-play"), $refresh_btn = $fileEl.find(".fa-refresh"), $dlt_btn = $fileEl.find(".fa-times"), $ok_btn = $fileEl.find(".fa-play"), $btns = $fileEl.find(".fa"), $progress_bar = $fileEl.find(".upload_progress_indicator");

		$btns.removeAttr('style');
		$btns.hide();
		$dlt_btn.show();

	}).on('complete', function(event, id, name, response) {//on completion of upload
		//scrollHeight
		var $fileEl = $(this).fineUploader("getItemByFileId", id), $pause_btn = $fileEl.find(".fa-pause"), $play_btn = $fileEl.find(".fa-play"), $refresh_btn = $fileEl.find(".fa-refresh"), $dlt_btn = $fileEl.find(".fa-times"), $ok_btn = $fileEl.find(".fa-check-square-o"), $btns = $fileEl.find(".fa"), $progress_bar = $fileEl.find(".upload_progress_indicator");
			$fileEl.removeClass('upload_in_progress');
		var objDiv = document.getElementById("scrollUploadedImages");
		


		if (response.success) {
			$btns.removeAttr('style');
			$btns.hide();
			//script to scroll down the scroll bar based on upload success
			$(".dropdown_menus").hide();

			$ok_btn.show();
			//hiding the thumbnails if more than 50 images uploaded.
			var li_count = $("ul li:last").attr("qq-file-id");
			if (parseInt(li_count) > 49) {
				$(".th_preview").remove();
				$(".image_preview").remove();
			}

			fileCount++;
			$("#slash").css("display", "block");
			$("#afterfilecount").css("display", "block");
			var imagecount = parseInt(id) + 1;
			$("#slash").html("&frasl;");
			$("#afterfilecount").text(fileCount);

			/** calculating the total size of files uploaded completely **/
			classid = '.tr_classstyle qq-file-id-' + id;
			var filesize = $("li.qq-file-id-" + id).find(".file_size").find(".qq-upload-size-selector").html();

			var type = filesize.slice(-2);

			var itemsize = filesize.slice(0, -2);
			if (type == 'MB') {
				itemsize = parseFloat(itemsize) * 1024;
			}

			uploadedsize += parseFloat(itemsize);
			//alert(totalsize);
			var mbsize = 0;
			if (uploadedsize > parseFloat(1024)) {
				mbsize = parseFloat(uploadedsize / 1024).toFixed(2) + 'MB';
			} else {
				mbsize = parseFloat(uploadedsize).toFixed(2) + 'kB';
			}
			//alert(mbsize);
			$("#totalsize").html(mbsize);
			if (mbsize == 'NaNkB') {
				$("#totalsize").html('0');
			}
			/** calculating the total size of files uploaded completely **/
			if (aftercount == fileCount) {
				$("#estimatetime").html("");
				$("#totalspeed").html("");
			}

			//displaying the success message  after completion of upload
			if (fileCount == parseInt(li_count) + 1) {
				//alert('test');
				$(".success_message").show();
				$(".upload_meta_box").stop().slideDown();
				$(".action_btn_row").css('visibility','visible');
			}
		}
		
		//for($("#scrollUploadedImages").find(".tr_classstyle").)
		
		var aa = $("#scrollUploadedImages").find(".tr_classstyle");
		scroll_data = 0;
		for(i=0; i<aa.length; i++){
			var $this = aa.eq(i);
			if($this.hasClass('upload_in_progress')){
				break;	
			}
			
			scroll_data = scroll_data + parseInt($this.outerHeight());
			
		}
		
				
		$('#scrollUploadedImages').scrollTop(scroll_data);

	});

	/**checking  andriod and ios versions to hide drag and drop message box  **/
	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentIndex = deviceAgent.indexOf('android');
	var broweIndex = deviceAgent.indexOf('chrome');

	if (agentIndex != -1) {
		var androidversion = parseFloat(deviceAgent.substr(agentIndex + 8, 3).replace('_', '.'));
		if (androidversion < 4.0) {

		} else {

			$("#draguploading_file").hide();
			if (broweIndex != -1) {
				$("#draguploading_file").hide();
			}
		}
	} else {

	}

	/**check andriod and ios versions  **/
	var device = navigator.userAgent.toLowerCase();
	var ios = device.match(/(iphone|ipod|ipad)/);

	var start = device.indexOf('ios');
	if (ios && start > -1) {
		var iosversion = window.Number(device.substr(start + 3, 3).replace('_', '.'));
		if (iosversion > 6.0) {
			if (broweIndex != -1) {
				$("#draguploading_file").css('display', 'none');
			}
		}
	}

	$('#triggerUpload').click(function() {
		//script for onclick upload button move the scrool to top of list
		var objDiv = document.getElementById("scrollUploadedImages");

		var percentageToScroll = 100;
		var percentage = percentageToScroll / 100;
		var height = $("#scrollUploadedImages").scrollTop();
		var scrollAmount = height * (1 - percentage);
		$('#scrollUploadedImages').animate({
			scrollTop : scrollAmount + 60
		}, 'fast');
		uploadHandler.fineUploader('uploadStoredFiles');
	});

	//removing the items that are being uplaoded
	$(".qq-upload-cancel").click(function() {
		alert(0);
		aftercount--;
		$("#filecount").text(parseInt(aftercount) + ' file(s)');
	});
});

function doInnerUpdates() {//  this function to display the  upload speed and estimated time
	//getting the difference of total bytes and uploaded bytes
	var iBytesRem = Math.abs(iBytesTotal - newuploadedBytes);
	//difference of time
	var time = new Date() - startTime;

	if (startTime > 0) {
		timeest += time;

		//speed calculation
		var newspeed = newuploadedBytes / timeest;

		iSpeed = Math.round(newspeed.toString()) + ' KB/sec';

		var avragetest;

		//time calculation start
		if (iSpeed.slice(-4) == 'MB/s') {
			avragetest = average * 1024 * 1024;
		} else {
			avragetest = Math.round(newspeed.toString()) * 1024;
		}
		var TotalTime = iBytesRem / avragetest;

		//time calculation end
		if (tottest > 1) {
			$("#totalspeed").html("Speed : " + iSpeed);
			//diaplating the speed
		}

		//getting the time format
		TotalHours = Math.floor((TotalTime / 3600));
		TotalHoursMod = (TotalTime % 3600);
		TotalMin = Math.floor(TotalHoursMod / 60);
		TotalMinMod = (TotalHoursMod % 60);
		TotalSec = Math.floor(TotalMinMod);
		out = "";
		out = AddNum(TotalHours, "", ":");
		out = AddNum(TotalMin, out, ":");
		out = AddNum(TotalSec, out, "");

		if (out == "")
			out = "00:00:00";
		if (tottest > 1) {
			$("#estimatetime").html("~" + out);
			//displaying the time
		}
		tottest++;
	} else {
		//nothing
	}

	startTime = new Date();
}

function AddNum(Time, Out, Sep) {
	if (Time < 10)
		Out += "0";
	Out += Time;
	Out += Sep;

	return (Out);
}

function new_category_create() {
	$("#upload_form").stop().slideUp();
	$("#new_add_category").stop().slideDown();
}

function new_category_cancel() {
	$("#upload_form").stop().slideDown();
	$("#new_add_category").stop().slideUp();
}

//adding the new category
function newcategory_add() {
	var textbox = $('#new_categoryname').val();
	$('#category_id option:selected').text(textbox);

	new_category_cancel();
}

function adjust_total() {
	
}

function hideCategoryBox(){
$(".upload_meta_box").stop().slideUp();	
$('.action_btn_row').css('visibility','hidden');
}

$(function() {
	$(".fa").click(function() {
		$(this).closest('a').click();
	});
}); 