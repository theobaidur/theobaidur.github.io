(function($){
	$.fn.FillSocialInfo = function(options){
		var settings = $.extend({
			"facebook":{
				"icon":"icons/facebook.png",
				"url":"http://www.facebook.com/%username%"
			},
			"twitter":{
				"icon":"icons/twitter.png",
				"url":"http://twitter.com/%username%"
			},
			"LinkedIn":{
				"icon":"icons/linkedin.png",
				"url":"http://www.linkedin.com/in/%username%"
			},
			"pinterest":{
				"icon":"icons/pinterest.png",
				"url":"http://www.pinterest.com/%username%"
			},
			"google+":{
				"icon":"icons/google_plus.png",
				"url":"https://plus.google.com/%username%/posts/p/pub"
			}

		},options);
		var This = this;
		var placeholder = this.attr("placeholder");
		var val = this.val();

		var outerWrapper = $("<div>").addClass("socialInfoWrapperOuter");


		var theWrapper = $("<div>").attr({
			"contenteditable":"true"
		}).addClass("socialInfoWrapper");
		if($(this).is("input")){
			theWrapper.addClass("single-line");
		}
		outerWrapper.css({
			"width":$(this).outerWidth()>150?$(this).outerWidth():150,
			"height":$(this).outerHeight()>=30?$(this).outerHeight():30
		});
		theWrapper.css({
			"width":$(this).outerWidth()>150?$(this).outerWidth()-10:140,
			"height":$(this).outerHeight()>=30?$(this).outerHeight()-10:20
		});
		$(this).parent().append(outerWrapper);
		$(this).appendTo(outerWrapper);
		$(this).hide();

		outerWrapper.append(theWrapper);

		var getCaretPixelPos = function (node, offsetx, offsety){
			    offsetx = offsetx || 0;
			    offsety = offsety || 0;

			    var nodeLeft = 0,
			        nodeTop = 0;
			    if (node){
			        nodeLeft = node.offset().left;
			        nodeTop = node.offset().top;
			    }

			    var pos = {left: 0, top: 0};

			    if (document.selection){
			        var range = document.selection.createRange();
			        range.move("character",-1);
			        pos.left = range.offsetLeft + offsetx - nodeLeft+10 + 'px';
			        pos.top = range.offsetTop + offsety - nodeTop + 'px';
			    }else if (window.getSelection){
			        var sel = window.getSelection();
			        var range = sel.getRangeAt(0).cloneRange();
			        try{
			            range.setStart(range.startContainer, range.startOffset-1);
			        }catch(e){}
			        var rect = range.getBoundingClientRect();
			        if (range.endOffset == 0 || range.toString() === ''){
			            // first char of line
			            if (range.startContainer == $node){
			                // empty div
			                if (range.endOffset == 0){
			                    pos.top = '0px';
			                    pos.left = '0px';
			                }else{
			                    // firefox need this
			                    var range2 = range.cloneRange();
			                    range2.setStart(range2.startContainer, 0);
			                    var rect2 = range2.getBoundingClientRect();
			                    pos.left = rect2.left + offsetx - nodeLeft + 'px';
			                    pos.top = rect2.top + rect2.height + offsety - nodeTop + 'px';
			                }
			            }else{
			                pos.top = range.startContainer.offsetTop+'px';
			                pos.left = range.startContainer.offsetLeft+'px';
			            }
			        }else{
			            pos.left = rect.left + rect.width + offsetx - nodeLeft + 'px';
			            pos.top = rect.top + offsety - nodeTop + 'px';
			        }
			    }
			    return pos;
			};

		var getCaretPos = function (element) {
		    var caretOffset = 0;
		    var doc = element.ownerDocument || element.document;
		    var win = doc.defaultView || doc.parentWindow;
		    var sel;
		    if (typeof win.getSelection != "undefined") {
		        sel = win.getSelection();
		        if (sel.rangeCount > 0) {
		            var range = win.getSelection().getRangeAt(0);
		            var preCaretRange = range.cloneRange();
		            preCaretRange.selectNodeContents(element);
		            preCaretRange.setEnd(range.endContainer, range.endOffset);
		            caretOffset = preCaretRange.toString().length;
		        }
		    } else if ( (sel = doc.selection) && sel.type != "Control") {
		        var textRange = sel.createRange();
		        var preCaretTextRange = doc.body.createTextRange();
		        preCaretTextRange.moveToElementText(element);
		        preCaretTextRange.setEndPoint("EndToEnd", textRange);
		        caretOffset = preCaretTextRange.text.length;
		    }
		    return caretOffset-1;
		}
		
		

		

		var charCountStartedAt = 0;
		var caretEndPos = 0;
		var charCount = 0;
		var caretPos = 0;
		var currentQuery = false;
		var currentWord = '';
		var theWord = '';
		var currentElem = null;
		var focusOnList = false;
		
		var fetch_json = function(word){
			if(word.length<3){
				return;
			}
			currentQuery = $.ajax({
			    type: "POST",
			    url: "json_out.php",
			    data: "query="+word,
			    success: function(msg){
			    	theWord=word;
			       processResult($.parseJSON(msg));
			    }
			});
		}

		var replaceWord = function(e){
			e.preventDefault();
			var username = $(this).attr("data-username");
			var url =  $(this).attr("data-url");
			var node = "<a href='"+url+"' target='_blank'>"+username+"</a>\u200b<span id='blink'></span>";

			var html = theWrapper.html();
			var tmp = "?"+theWord;
			var html = html.replace(tmp,node);
			theWrapper.html(html);

			outerWrapper.find(".socialInfoSuggestion").remove();
			

			theWrapper.focus();

			var range = null;
	        var sel = null;
	        var blinkNode = document.getElementById('blink');
		    if (document.selection) {
		        range = document.body.createTextRange();
		        range.moveToElementText(blinkNode);
		        range.select();
		    } else if (window.getSelection) {
		        range = document.createRange();
		        range.selectNode(blinkNode);
		        sel = window.getSelection();
		        sel.removeAllRanges();
		        sel.addRange(range);
		    }

		    blinkNode.parentNode.removeChild(blinkNode);
		    
		    charCount=0;
			charCountStartedAt=0;
			updateValue();
		}

		var processResult = function(result){
			outerWrapper.find(".socialInfoSuggestion").remove();
			var ul = $("<ul>").addClass("socialInfoSuggestion");
			ul.mouseenter(function(){
				focusOnList = true;
			})
			.mouseleave(function(){
				focusOnList = false;
			});
			var pos = getCaretPixelPos(theWrapper);
			ul.css(pos);
			var counter = 0;
			for (var key in result) {
			   var obj = result[key];
			   var title = $("<li>").addClass("socialInfoTitle").text(key);
			      ul.append(title);
			      
			   for (var prop in obj) {
			      if(obj.hasOwnProperty(prop)){
			      		var format = settings[prop]; 
				      	if(typeof format == "undefined"){

				      	}else{
				      		var icon = $("<span>").css("background-image","url("+format.icon+")");
				      		var link = $("<a>")
				      		.text(obj[prop]);
				      		

				      		var li = $("<li>").addClass("socailInfoLink").attr({
				      			"data-username":obj[prop],
				      			"data-url":format.url.replace("%username%",obj[prop])
				      		}).click(replaceWord);				      		
				      		link.append(icon);
				      		li.append(link);
				      		ul.append(li);

				      	}
			        }
			   }
			}
			ul.appendTo(outerWrapper);
		}

		var updateValue = function(){
			var val = theWrapper.html();
			if($(This).is("input") || $(This).is("textarea")){
				$(This).val(val);
			}else{
				$(This).html(val);
			}
		}

		theWrapper.blur(function(){
			if(!focusOnList){
				outerWrapper.find(".socialInfoSuggestion").remove();
				charCount=0;
				charCountStartedAt = 0;
			}
		});

		theWrapper.keyup(function(e){
			console.log(e);
			updateValue();
			outerWrapper.find(".socialInfoSuggestion").remove();

			tmpCaretPos=getCaretPos(this);
			currentElem = $(this);
			var keyPressed = e.keyCode;
			console.log(e);
			$("p").text(e.key);
			if(keyPressed==191 && charCount==0){
				charCount++;
				charCountStartedAt = tmpCaretPos;		
			}else if(keyPressed==13 || keyPressed==32){
				charCount=0;
			}else if(keyPressed==8 && charCount){
				charCount--;
			}else if(!(keyPressed>=37 && keyPressed<=40) && charCount){
				charCount++;
			}




			
			if(tmpCaretPos<charCountStartedAt){
				charCount=0;

			}


			if(charCount>3){
				var text = $(this).text();
				var word = text.substring(charCountStartedAt+1,caretEndPos+1);
				if(currentWord != word){
					if(currentQuery){
						currentQuery.abort();
						theWord='';	
					}
					fetch_json(word);
				}
				
			}

			if(charCount<=3){
				if(currentQuery){
					currentQuery.abort();
					theWord='';
				}
			}

			caretPos = tmpCaretPos;
			caretEndPos = charCountStartedAt+charCount;
			
		});

	}
}(jQuery));