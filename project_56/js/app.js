$.fn.getPreText = function() {
    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    var isMs = isIE || isEdge;

    var ce = $("<pre />").html(this.html());
    if (isSafari || isChrome)
        ce.find("div").replaceWith(function() {
            return "\n" + this.innerHTML;
        });
    if (isMs)
        ce.find("p").replaceWith(function() {
            return this.innerHTML + "<br>";
        });
    if (isFirefox || isOpera || isMs)
        ce.find("br").replaceWith("\n");

    return ce.text();
};
if (window.location.protocol == 'file:') {
    alert('To test this demo properly please use a local server such as XAMPP or WAMP. See README.md for more details.');
}
(function($, window, document, undefined) {
    //config 
    var config = {
        "sizes": [{
            "small": {
                "width": 800,
                "height": 600,
                "text": {
                    "heading": {
                        "text": "Sample heading",
                        "size": "30px",
                        "font": "Arial",
                        "color": "#000",
                        "top": 150,
                        "left": 0,
                        "maxLength": 20
                    },
                    "subheading": {
                        "text": "Sample sub heading",
                        "size": "18px",
                        "font": "Arial",
                        "color": "#999",
                        "top": 180,
                        "left": 80,
                        "maxLength": 30
                    }
                }
            }
        }, {
            "medium": {
                "width": 1024,
                "height": 768,
                "text": {
                    "heading": {
                        "text": "Sample heading",
                        "size": "32px",
                        "font": "Arial",
                        "color": "#000",
                        "top": 0,
                        "left": 0,
                        "maxLength": 20

                    },
                    "subheading": {
                        "text": "Sample sub heading",
                        "size": "18px",
                        "font": "Arial",
                        "color": "#999",
                        "top": 32,
                        "left": 0,
                        "maxLength": 30
                    }
                }
            }
        }, {
            "large": {
                "width": 1280,
                "height": 1024,
                "text": {
                    "heading": {
                        "text": "Sample heading",
                        "size": "36px",
                        "font": "Arial",
                        "color": "#000",
                        "top": 0,
                        "left": 0,
                        "maxLength": 20
                    },
                    "subheading": {
                        "text": "Sample sub heading",
                        "size": "24px",
                        "font": "Arial",
                        "color": "#999",
                        "top": 36,
                        "left": 0,
                        "maxLength": 30
                    }
                }
            }
        }]
    }

    var customTextConfig = {
        "heading": {
            "text": "Sample heading",
            "size": "32px",
            "font": "Arial",
            "color": "#000",
            "top": 0,
            "left": 0,
            "maxLength": 20
        },
        "subheading": {
            "text": "Sample sub heading",
            "size": "18px",
            "font": "Arial",
            "color": "#999",
            "top": 32,
            "left": 0,
            "maxLength": 30
        }
    }

    var QueryString = function() {
        // This function is anonymous, is executed immediately and 
        // the return value is assigned to QueryString!
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = decodeURIComponent(pair[1]);
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }
        }
        return query_string;
    }();


    // feature detection for drag&drop upload

    var isAdvancedUpload = function() {
        var div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }();

    $(".button_row").hide();

    var $form = $('.box'),
        $input = $form.find('input[type="file"]'),
        $label = $form.find('label'),
        $errorMsg = $form.find('.box__error span'),
        $restart = $form.find('.box__restart'),
        droppedFiles = false,
        processFiles = function(files) {
            var imageIndex = -1;
            for (var i = 0, f;
                (f = files[i]) && imageIndex < 0; i++) {
                // Only process image files.
                if (!f.type.match('image.*')) {
                    continue;
                }

                imageIndex = i;
                var reader = new FileReader();

                // Closure to capture the file information.
                reader.onload = (function(theFile) {
                    return function(e) {
                        theFile["imageData"] = e.target.result;
                        $form.addClass('is-success');
                        $(".button_row").show();
                        if (QueryString.w !== undefined || QueryString.h !== undefined) {
                            config["sizes"] = [{
                                "custom": {
                                    width: QueryString.w || QueryString.h,
                                    height: QueryString.h || QueryString.w,
                                    "text": customTextConfig
                                }
                            }]
                        }

                        $(".crop-tool-area").empty();
                        $(".button_row").show();

                        for (i = 0; config["sizes"][i]; i++) {
                            resizeableImage(theFile, config["sizes"][i]);
                        }

                    };
                })(f);

                // Read in the image file as a data URL.
                reader.readAsDataURL(f);
            }
            $label.text(files[imageIndex].name);
        };

    // letting the server side to know we are going to make an Ajax request
    $form.append('<input type="hidden" name="ajax" value="1" />');

    // automatically submit the form on file select
    $input.on('change', function(e) {
        processFiles(e.target.files);
    });

    // drag&drop files if the feature is available
    if (isAdvancedUpload) {
        $form
            .addClass('has-advanced-upload') // letting the CSS part to know drag&drop is supported by the browser
            .on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
                // preventing the unwanted behaviours
                e.preventDefault();
                e.stopPropagation();
            })
            .on('dragover dragenter', function() //
                {
                    $form.addClass('is-dragover');
                })
            .on('dragleave dragend drop', function() {
                $form.removeClass('is-dragover');
            })
            .on('drop', function(e) {
                droppedFiles = e.originalEvent.dataTransfer.files; // the files that were dropped
                processFiles(droppedFiles);

            });
    }

    // restart the form if has a state of error/success

    $restart.on('click', function(e) {
        e.preventDefault();
        $(".button_row").hide();
        $form.removeClass('is-error is-success');
        $input.trigger('click');
    });

    // Firefox focus bug fix for file input
    $input
        .on('focus', function() {
            $input.addClass('has-focus');
        })
        .on('blur', function() {
            $input.removeClass('has-focus');
        });

    function crop_download() {
        var zipContent = [];
        $(".component.crop_this").each(function() {
            $(this).removeClass("crop_this");
            var imageOriginal = new Image();
            var currentImage = $(this).find("img");
            imageOriginal.src = currentImage.get(0).src;
            var crop_canvas,
                left = $(this).find('.overlay').offset().left - $(this).find(".draggable").offset().left,
                top = $(this).find('.overlay').offset().top - $(this).find(".draggable").offset().top,
                width = $(this).find('.overlay').width(),
                height = $(this).find('.overlay').height();

            resize_canvas = document.createElement('canvas');

            resize_canvas.width = $(this).find(".resizable").width();
            resize_canvas.height = $(this).find(".resizable").height();
            resize_canvas.getContext('2d').drawImage(currentImage.get(0), 0, 0, $(this).find(".resizable").width(), $(this).find(".resizable").height());
            $(this).find("img").attr('src', resize_canvas.toDataURL("image/png"));


            crop_canvas = document.createElement('canvas');
            context = crop_canvas.getContext('2d');
            crop_canvas.width = width;
            crop_canvas.height = height;
            //window.open($(this).find("img").get(0).src);
            context.drawImage(currentImage.get(0), left, top, width, height, 0, 0, width, height);

            var tmpH2 = $(this).find('.overlay').find("h2");
            var tmpH3 = $(this).find('.overlay').find("h3");

            var tmpO = $(this).find('.overlay');

            context.font = tmpH2.data("fontsize") + " " + tmpH2.data("fontfamily");
            context.fillStyle = tmpH2.data("color");
            var heading = tmpH2.getPreText().split(/\r\n|\n|\r/);
            var fsize = parseInt(tmpH2.data("fontsize"));
            for ($i = 0; $i < heading.length; $i++) {
                context.fillText(heading[$i], tmpH2.offset().left - tmpO.offset().left, tmpH2.offset().top - tmpO.offset().top + 24 + (fsize * $i));
            }

            context.font = tmpH3.data("fontsize") + " " + tmpH3.data("fontfamily");
            context.fillStyle = tmpH3.data("color");

            var heading2 = tmpH3.getPreText().split(/\r\n|\n|\r/);
            var fsize2 = parseInt(tmpH3.data("fontsize"));
            for ($i = 0; $i < heading2.length; $i++) {
                context.fillText(heading2[$i], tmpH3.offset().left - tmpO.offset().left, tmpH3.offset().top - tmpO.offset().top + 14 + (fsize2 * $i));
            }


            var cropped_image = crop_canvas.toDataURL("image/png");
            var cropped_file_info = {
                data: cropped_image.substr(cropped_image.indexOf(",") + 1),
                name: currentImage.data("name")
            }

            zipContent.push(cropped_file_info);
            currentImage.attr("src", imageOriginal.src);
        });

        var zip = new JSZip();


        for ($i = 0; $i < zipContent.length; $i++) {

            zip.file(zipContent[$i].name, zipContent[$i].data, {
                base64: true
            });
        }
        zip.generateAsync({
                type: "base64"
            })
            .then(function(content) {
                location.href = "data:application/zip;base64," + content;
            });
    }

    var resizeableImage = function(image, frameInfo) {
        // Some variable and settings
        var container,
            overlay,
            orig_src = new Image(),
            image_target = $("<img>"),
            event_state = {},
            constrain = false,
            min_width = 60, // Change as required
            min_height = 60,
            max_width = 800, // Change as required
            max_height = 900,
            resize_canvas = document.createElement('canvas');

        var frameKey = Object.keys(frameInfo)[0];
        // When resizing, we will always use this copy of the original as the base
        orig_src.src = image.imageData;
        image_target.attr("src", image.imageData);
        //naming
        var name = image.name.substr(0, image.name.lastIndexOf("."));
        var ext = image.name.substr(image.name.lastIndexOf(".") + 1);
        var dim = frameInfo[frameKey]["width"] + "X" + frameInfo[frameKey]["height"];

        image_target.attr("data-name", name + "-" + frameKey + "_" + dim + "." + ext);

        var crop_tool = $("<div>").addClass("component").addClass("imgMode").width(parseFloat(frameInfo[frameKey]["width"]) + 200)
            .height(parseFloat(frameInfo[frameKey]["height"]) + 200);
        overlay = $("<div>").addClass("overlay")
            .width(parseFloat(frameInfo[frameKey]["width"]))
            .height(parseFloat(frameInfo[frameKey]["height"]))
            .css({
                left: 100,
                top: 100
            });

        var btn = $("<a>")
            .addClass("btn-crop")
            .addClass("js-crop-single")
            .html("Crop & Download")
            .click(function(e) {
                e.preventDefault();
                $(this).closest(".component").addClass("crop_this");
                crop_download();
            })

        var heading = $("<h2>").text(frameInfo[frameKey]["text"]["heading"]["text"])
            .css({
                color: frameInfo[frameKey]["text"]["heading"]["color"],
                fontSize: frameInfo[frameKey]["text"]["heading"]["size"],
                fontFamily: frameInfo[frameKey]["text"]["heading"]["font"],
                left: frameInfo[frameKey]["text"]["heading"]["left"],
                top: frameInfo[frameKey]["text"]["heading"]["top"]

            }).attr({
                "data-color": frameInfo[frameKey]["text"]["heading"]["color"],
                "data-fontsize": frameInfo[frameKey]["text"]["heading"]["size"],
                "data-fontfamily": frameInfo[frameKey]["text"]["heading"]["font"],
                "data-maxlength": frameInfo[frameKey]["text"]["heading"]["maxLength"]
            })
            .prop('contenteditable', true)
            .keydown(function(e) {
                var length = $(this).getPreText().length;
                var maxLength = $(this).data('maxlength');
                if (length > maxLength && [8, 37, 38, 39, 40].indexOf(e.keyCode) < 0) {
                    return false;
                }
            });

        var subheading = $("<h3>").text(frameInfo[frameKey]["text"]["subheading"]["text"])
            .css({
                color: frameInfo[frameKey]["text"]["subheading"]["color"],
                fontSize: frameInfo[frameKey]["text"]["subheading"]["size"],
                fontFamily: frameInfo[frameKey]["text"]["subheading"]["font"],
                left: frameInfo[frameKey]["text"]["subheading"]["left"],
                top: frameInfo[frameKey]["text"]["subheading"]["top"]

            }).attr({
                "data-color": frameInfo[frameKey]["text"]["subheading"]["color"],
                "data-fontsize": frameInfo[frameKey]["text"]["subheading"]["size"],
                "data-fontfamily": frameInfo[frameKey]["text"]["subheading"]["font"],
                "data-maxlength": frameInfo[frameKey]["text"]["subheading"]["maxLength"]
            })
            .prop('contenteditable', true)
            .keydown(function(e) {
                var length = $(this).getPreText().length;
                var maxLength = $(this).data('maxlength');
                if (length > maxLength && [8, 37, 38, 39, 40].indexOf(e.keyCode) < 0) {
                    return false;
                }
            });

        var textModeSelector = $("<a>")
            .attr("href", "#")
            .addClass("textModeButton")
            .text("Edit Text")
            .click(function(e) {
                e.preventDefault();
                $(this).closest(".component").removeClass("imgMode");
                $(this).toggleClass("active");
                $(this).siblings().toggleClass("active");
            });

        var imageModeSelector = $("<a>")
            .attr("href", "#")
            .addClass("textModeButton")
            .addClass("active")
            .text("Edit Image")
            .click(function(e) {
                e.preventDefault();
                $(this).closest(".component").addClass("imgMode");
                $(this).toggleClass("active");
                $(this).siblings().toggleClass("active");
            });

        var selectorWrapper = $("<div>").addClass("selectorWrapper");

        selectorWrapper.append(imageModeSelector)
            .append(textModeSelector);

        overlay.append(heading);
        overlay.append(subheading);

        var wrapper_draggable = $("<div>")
            .addClass("draggable")
            .addClass("resizable")
            .width(orig_src.width)
            .height(orig_src.height);


        crop_tool.append(overlay);
        crop_tool.append(wrapper_draggable);
        crop_tool.append(btn);
        crop_tool.append(selectorWrapper);

        wrapper_draggable.append(image_target);


        // Add events
        wrapper_draggable.draggable().resizable({
            handles: 'ne, se, sw, nw',
            aspectRatio: parseFloat(orig_src.width / orig_src.height)
        });


        var title = $("<h2>").text(frameKey + " (" + dim + ")").addClass("frameTitle");
        $(".crop-tool-area").append(title);
        $(".crop-tool-area").append(crop_tool);

    };



    $(".js-crop").click(function(e) {
        $(".component").addClass("crop_this");
        crop_download();
    });




})(jQuery, window, document);
