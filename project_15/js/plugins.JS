

/* all_in_one_shipping.js */

/* All In One Shipping by Estelle Winterflood */

$(document).ready(function() {

	$(".chzn-select").chosen();

	$('a.aios-remove-zone').live('click', function(){
		var msg = $(this).attr('title');
		if (msg != '' && !confirm(msg)) return false;
			return true;
	});

	// $('span.editable').each(function(){
	// 	if ($(this).html() == '') $(this).html('<em>null</em>');
	// });

	/* Inline text editor */

	$('span.aios-editable').each(function(){
		if ($(this).html() == '') $(this).html('<em>null</em>');
	});

	$('span.aios-editable').each(function(){
		$(this).attr('title', 'Click to edit');
	}).live('click', function(){
		var value	= $(this).html();
		if (value == '<em>null</em>') value = '';
		var name	= $(this).attr('name');
		var classes	= $(this).attr('class');

		var element	= document.createElement('input');
		$(element).attr({type: 'text', value: value}).addClass(classes);
		$(element).attr('name', name);
		if ($(this).hasClass('aios-number')) {
			$(element).attr('size', '7');
		}
		if ($(this).hasClass('aios-text')) {
			$(element).attr('size', '25');
		}
		$(this).replaceWith(element);
	});

	$('input.aios-editable').live('change', function(){
		var target = $(this).parents('tr:first').find('input[name^="update_rates"]');
		$(target).val(1); // Set flag to indicate that this row in the database should be updated when form is submitted
	});

	function escape_name(myname) { 
		return myname.replace(/(\[|\]|:|\.)/g,'\\$1');
	}

	$('a.aios-edit').live('click', function(){
		var target = $(this).parents('tr:first').find('span.aios-editable');
		$(target).click();
		var target = $(this).parents('tr:first').find('input.aios-editable');
		$(target).data('original', $(target).val());
		return false;
	});

	var AIOS_ROWS_TO_ADD = 5;

	$('tr.aios-add-rates-row').hide();

	$('a.aios-add').live('click', function(){
		var last_row = $(this).parents('tbody:first').find('tr:last');
		if ($(last_row).is(':visible')) {
			var row_html = $(last_row).html();
			for(var rows=1; rows<=AIOS_ROWS_TO_ADD; rows++) {
				var new_html = row_html.replace(/\]\[(\d+)\]/g, function(match, last_index){ new_index = parseInt(last_index,10) + rows; return ']['+new_index+']'; });
				$(this).parents('tbody:first').append('<tr>'+new_html+'</tr>');
			}
			$('.list').find('tbody>tr:nth-child(even)').addClass('list-even');
			$('.list').find('tbody>tr:nth-child(odd)').addClass('list-odd');
		} else {
			$(this).parents('tbody:first').find('tr.aios-add-rates-row').show();
		}

		return false;
	});

// Haven't figured this out
//$('a.aios-undo-edit').live('click', function(){
//	var target = $(this).parents('tr:first').find('input.aios-editable');
//	$(target).val($(target).data('original'));
//	return false;
//});

	$('a.aios-remove').live('click', function(){
		var rel		= $(this).attr('rel');
		var target = $('input[name='+escape_name(rel)+']');
		$(target).val(1); // Set flag to indicate that this row in the database should be deleted when form is submitted

		var target = $(this).parents('tr:first');
		$(target).addClass('show-removed');

		var target = $(this).parents('td').children('a.aios-undo-remove');
		$(target).show();
		$(this).hide();

		return false;
	});

	$('a.aios-undo-remove').live('click', function(){
		var rel = $(this).attr('rel');
		// we have a 
		var target = $('input[name='+escape_name(rel)+']');
		$(target).val(0); // Clear flag to indicate that this row in the database should NOT be deleted

		var target = $(this).parents('tr:first');
		$(target).removeClass('show-removed');

		var target = $(this).parents('td').children('a.aios-remove');
		$(target).show();
		$(this).hide();

		return false;
	});

	$('a.aios-undo-remove').hide();

	/* When adding new rows, copy max to min of next row */

	$('input.max-weight').live('change', function(){
		var target = $(this).parents('tr:first').next().find('input.min-weight');
		if (target) {
			$(target).val($(this).val());
			/* bit messy to duplicate this line and hardcode the colour, but will do for now */
			$(target).stop().css('background-color', '#FFFF00').animate({backgroundColor: '#FFFFFF'}, 500);
		}
	});
	$('input.max-value').live('change', function(){
		var target = $(this).parents('tr:first').next().find('input.min-value');
		if (target) {
			$(target).val($(this).val());
			$(target).stop().css('background-color', '#FFFF00').animate({backgroundColor: '#FFFFFF'}, 500);
		}
	});
	$('input.max-items').live('change', function(){
		var target = $(this).parents('tr:first').next().find('input.min-items');
		if (target) {
			$(target).val(parseInt($(this).val())+1);
			$(target).stop().css('background-color', '#FFFF00').animate({backgroundColor: '#FFFFFF'}, 500);
		}
	});

});



/* jquery.autocomplete.js */

/**
 * Extending jQuery with autocomplete
 * Version: 1.4.2
 * Author: Yanik Gleyzer (clonyara)
 */
(function($) {

// some key codes
 var RETURN = 13;
 var TAB = 9;
 var ESC = 27;
 var ARRLEFT = 37;
 var ARRUP = 38;
 var ARRRIGHT = 39;
 var ARRDOWN = 40;
 var BACKSPACE = 8;
 var DELETE = 46;
 
function debug(s){
  $('#info').append(htmlspecialchars(s)+'<br>');
}
// getting caret position obj: {start,end}
function getCaretPosition(obj){
  var start = -1;
  var end = -1;
  if(typeof obj.selectionStart != "undefined"){
    start = obj.selectionStart;
    end = obj.selectionEnd;
  }
  else if(document.selection&&document.selection.createRange){
    var M=document.selection.createRange();
    var Lp;
    try{
      Lp = M.duplicate();
      Lp.moveToElementText(obj);
    }catch(e){
      Lp=obj.createTextRange();
    }
    Lp.setEndPoint("EndToStart",M);
    start=Lp.text.length;
    if(start>obj.value.length)
      start = -1;
    
    Lp.setEndPoint("EndToStart",M);
    end=Lp.text.length;
    if(end>obj.value.length)
      end = -1;
  }
  return {'start':start,'end':end};
}
// set caret to
function setCaret(obj,l){
  obj.focus();
  if (obj.setSelectionRange){
    obj.setSelectionRange(l,l);
  }
  else if(obj.createTextRange){
    m = obj.createTextRange();      
    m.moveStart('character',l);
    m.collapse();
    m.select();
  }
}
// prepare array with velued objects
// required properties are id and value
// rest of properties remaines
function prepareArray(jsondata){
  var new_arr = [];
  for(var i=0;i<jsondata.length;i++){
    if(jsondata[i].id != undefined && jsondata[i].value != undefined){
      jsondata[i].id = jsondata[i].id+"";
      jsondata[i].value = jsondata[i].value+"";
      if(jsondata[i].info != undefined)
        jsondata[i].info = jsondata[i].info+"";
      new_arr.push(jsondata[i]);
    }
  }
  return new_arr;
}
// php analogs
function escapearg(s){
  if(s == undefined || !s) return '';
  return s.replace('\\','\\\\').
           replace('*','\\*').
           replace('.','\\.').
           replace('/','\\/');
}
function htmlspecialchars(s){
  if(s == undefined || !s) return '';
  return s.replace('&','&amp;').
           replace('<','&lt;').
           replace('>','&gt;');
}
function ltrim(s){
  if(s == undefined || !s) return '';
  return s.replace(/^\s+/g,'');
}

// extending jQuery
$.fn.autocomplete = function(options){ return this.each(function(){
  var rel	= ($(this).attr('rel').length > 0) ? $(this).attr('rel') : false;
  var ele	= ($(this).attr('id').length > 0) ? $(this).attr('id') : false;
  
  // take me
  var me = $(this);
  var me_this = $(this).get(0);

  // test for supported text elements
  if(!me.is('input:text,input:password,textarea'))
  return;

  // get or ajax_get required!
  if(!options && (!$.isFunction(options.get) || !options.ajax_get)){
  return;
  }  
  // check plugin enabled
  if(me.attr('jqac') == 'on') return;

  // plugin on!
  me.attr('jqac','on');

  // no browser's autocomplete!
  me.attr('autocomplete','off');

  // default options
  options = $.extend({ 
                      delay     : 500 ,
                      timeout   : 5000 ,
                      minchars  : 3 ,
                      multi     : false ,
                      cache     : true , 
                      height    : 150 ,
                      autowidth : false ,
                      noresults : 'No results'
                      },
                      options);

  // bind key events
  // handle special keys here
  me.keydown(function(ev){
    switch(ev.which){
      // return choose highlighted item or default propogate
      case RETURN:
        if(!suggestions_menu) return true;
        else setHighlightedValue();
        return false;
      // escape clears menu
      case ESC:
        clearSuggestions();
        return false;
    }
    return true;
  });
  me.keypress(function(ev){
    // ev.which doesn't work here - it always returns 0
    switch(ev.keyCode){
      case RETURN: case ESC:
        return false;
      // up changes highlight
      case ARRUP:
        changeHighlight(ev.keyCode);
        return false;
      // down changes highlight or open new menu
      case ARRDOWN:
        if(!suggestions_menu) getSuggestions(getUserInput());
        else changeHighlight(ev.keyCode);
        return false;
     }
     return true;
  });
  // handle normal characters here
  me.keyup(function(ev) {
      switch(ev.which) {
        case RETURN: case ESC: case ARRLEFT: case ARRRIGHT: case ARRUP: case ARRDOWN:
          return false;
        default:
          getSuggestions(getUserInput());
      }
      return true;
  });

  // init variables
  var user_input = "";
  var input_chars_size  = 0;
  var suggestions = [];
  var current_highlight = 0;
  var suggestions_menu = false;
  var suggestions_list = false;
  var loading_indicator = false;
  var clearSuggestionsTimer = false;
  var getSuggestionsTimer = false;
  var showLoadingTimer = false;
  var zIndex = me.css('z-index');
  
  // get user input
  function getUserInput(){
    var val = me.val();
    if(options.multi){
      var pos = getCaretPosition(me_this);
      var start = pos.start;
      for(;start>0 && val.charAt(start-1) != ',';start--){}
      var end = pos.start;
      for(;end<val.length && val.charAt(end) != ',';end++){}
      var val = val.substr(start,end-start);
    }
    return ltrim(val);
  }
  // set suggestion
  function setSuggestion(val){
    user_input = val;
    if(options.multi){
      var orig = me.val();
      var pos = getCaretPosition(me_this);
      var start = pos.start;
      for(;start>0 && orig.charAt(start-1) != ',';start--){}
      var end = pos.start;
      for(;end<orig.length && orig.charAt(end) != ',';end++){}
      var new_val = orig.substr(0,start) + (start>0?' ':'') + val + orig.substr(end);
      me.val(new_val);
      setCaret(me_this,start + val.length + (start>0?1:0));
    }
    else{
      me_this.focus();
      me.val(val);
    }
  }
  // get suggestions
  function getSuggestions(val){
    // input length is less than the min required to trigger a request
    // reset input string
    // do nothing
    if (val.length < options.minchars){
      clearSuggestions();
      return false;
    }
    // if caching enabled, and user is typing (ie. length of input is increasing)
    // filter results out of suggestions from last request
    if (options.cache && val.length > input_chars_size && suggestions.length){
      var arr = [];
      for (var i=0;i<suggestions.length;i++){
        var re = new RegExp("("+escapearg(val)+")",'ig');
        if(re.exec(suggestions[i].value))
          arr.push( suggestions[i] );
      }
      user_input = val;
      input_chars_size = val.length;
      suggestions = arr;
      createList(suggestions);
      return false;
    }
    else{// do new request
      clearTimeout(getSuggestionsTimer);
      user_input = val;
      input_chars_size = val.length;
      getSuggestionsTimer = setTimeout( 
        function(){ 
          suggestions = [];
          // call pre callback, if exists
          if($.isFunction(options.pre_callback))
            options.pre_callback();
          // call get
          if($.isFunction(options.get)){
            suggestions = prepareArray(options.get(val));
            createList(suggestions);
          }
          // call AJAX get
          else if($.isFunction(options.ajax_get)){
            clearSuggestions();
            showLoadingTimer = setTimeout(show_loading,options.delay);
            options.ajax_get(val,ajax_continuation,rel);
          }
        },
        options.delay );
    }
    return false;
  };
  // AJAX continuation
  function ajax_continuation(jsondata){
    hide_loading();
    suggestions = prepareArray(jsondata);
    createList(suggestions);
  }
  // shows loading indicator
  function show_loading(){
    if(!loading_indicator){
      loading_indicator = $('<div class="jqac-menu"><div class="jqac-loading">Loading</div></div>').get(0);
      $(loading_indicator).css('position','absolute');
      var pos = me.offset();
      $(loading_indicator).css('left', pos.left + "px");
      $(loading_indicator).css('top', ( pos.top + me.height() + 2 ) + "px");
      if(!options.autowidth)
        $(loading_indicator).width(me.width());
      $('body').append(loading_indicator);
    }
    $(loading_indicator).show();
    setTimeout(hide_loading,10000);
  }
  // hides loading indicator 
  function hide_loading(){
    if(loading_indicator)
      $(loading_indicator).hide();
    clearTimeout(showLoadingTimer);
  }
  // create suggestions list
  function createList(arr){
    if(suggestions_menu)
      $(suggestions_menu).remove();
    hide_loading();
    killTimeout();

    // create holding div
    suggestions_menu = $('<div class="jqac-menu"></div>').get(0);

    // ovveride some necessary CSS properties 
    $(suggestions_menu).css({'position':'absolute',
                             'z-index':zIndex,
                             'max-height':options.height+'px',
                             'overflow-y':'auto'});

    // create and populate ul
    suggestions_list = $('<ul></ul>').get(0);
    // set some CSS's
    $(suggestions_list).
      css('list-style','none').
      css('margin','0px').
      css('padding','2px').
      css('overflow','hidden');
    // regexp for replace 
    var re = new RegExp("("+escapearg(htmlspecialchars(user_input))+")",'ig');
    // loop throught arr of suggestions creating an LI element for each suggestion
    for (var i=0;i<arr.length;i++){
      var val = new String(arr[i].value);
      // using RE
      var output = htmlspecialchars(val).replace(re,'<em>$1</em>');
      // using substr
      //var st = val.toLowerCase().indexOf( user_input.toLowerCase() );
      //var len = user_input.length;
      //var output = val.substring(0,st)+"<em>"+val.substring(st,st+len)+"</em>"+val.substring(st+len);

      var span = $('<span class="jqac-link">'+output+'</span>').get(0);
      if (arr[i].info != undefined && arr[i].info != ""){
        $(span).append($('<div class="jqac-info">'+arr[i].info+'</div>'));
      }

      $(span).attr('name',i+1);
      $(span).click(function () { setHighlightedValue(); });
      $(span).mouseover(function () { setHighlight($(this).attr('name'),true); });

      var li = $('<li></li>').get(0);
      $(li).append(span);

      $(suggestions_list).append(li);
    }

    // no results
    if (arr.length == 0){
      $(suggestions_list).append('<li class="jqac-warning">'+options.noresults+'</li>');
    }

    $(suggestions_menu).append(suggestions_list);

    // get position of target textfield
    // position holding div below it
    // set width of holding div to width of field
    var pos = me.offset();

    $(suggestions_menu).css('left', pos.left + "px");
    $(suggestions_menu).css('top', ( pos.top + me.height() + 2 ) + "px");
    if(!options.autowidth)
      $(suggestions_menu).width(me.width());

    // set mouseover functions for div
    // when mouse pointer leaves div, set a timeout to remove the list after an interval
    // when mouse enters div, kill the timeout so the list won't be removed
    $(suggestions_menu).mouseover(function(){ killTimeout() });
    $(suggestions_menu).mouseout(function(){ resetTimeout() });

    // add DIV to document
    $('body').append(suggestions_menu);

    // bgIFRAME support
    if($.fn.bgiframe)
      $(suggestions_menu).bgiframe({height: suggestions_menu.scrollHeight});


    // adjust height: add +20 for scrollbar
    if(suggestions_menu.scrollHeight > options.height){
      $(suggestions_menu).height(options.height);
      $(suggestions_menu).width($(suggestions_menu).width()+20);
    }
	
    // currently no item is highlighted
    current_highlight = 0;

    // remove list after an interval
    clearSuggestionsTimer = setTimeout(function () { clearSuggestions() }, options.timeout);
  };
  // set highlighted value
  function setHighlightedValue(){
    if(current_highlight && suggestions[current_highlight-1]){
      var sugg = suggestions[ current_highlight-1 ];
      if(sugg.affected_value != undefined && sugg.affected_value != '')
        setSuggestion(sugg.affected_value);
      else
        setSuggestion(sugg.value);
      // pass selected object to callback function, if exists
      if ($.isFunction(options.callback))
        options.callback(suggestions[current_highlight-1], ele, rel);

      clearSuggestions();
    }
  };
  // change highlight according to key
  function changeHighlight(key){	
    if(!suggestions_list || suggestions.length == 0) return false;
    var n;
    if (key == ARRDOWN)
      n = current_highlight + 1;
    else if (key == ARRUP)
      n = current_highlight - 1;

    if (n > $(suggestions_list).children().size())
      n = 1;
    if (n < 1)
      n = $(suggestions_list).children().size();
    setHighlight(n);
  };
  // change highlight
  function setHighlight(n,mouse_mode){
    if (!suggestions_list) return false;
    if (current_highlight > 0) clearHighlight();
    current_highlight = Number(n);
    var li = $(suggestions_list).children().get(current_highlight-1);
    li.className = 'jqac-highlight';
    // for mouse mode don't adjust scroll! prevent scrolling jumps
    if(!mouse_mode) adjustScroll(li);
    killTimeout();
  };
  // clear highlight
  function clearHighlight(){
    if (!suggestions_list)return false;
    if (current_highlight > 0){
      $(suggestions_list).children().get(current_highlight-1).className = '';
      current_highlight = 0;
    }
  };
  // clear suggestions list
  function clearSuggestions(){
    killTimeout();
    if(suggestions_menu){
      $(suggestions_menu).remove();
      suggestions_menu = false;
      suggestions_list = false;
      current_highlight = 0;
    }
  };
  // set scroll
  function adjustScroll(el){
    if(!suggestions_menu) return false;
    var viewportHeight = suggestions_menu.clientHeight;        
    var wholeHeight = suggestions_menu.scrollHeight;
    var scrolled = suggestions_menu.scrollTop;
    var elTop = el.offsetTop;
    var elBottom = elTop + el.offsetHeight;
    if(elBottom > scrolled + viewportHeight){
      suggestions_menu.scrollTop = elBottom - viewportHeight;
    }
    else if(elTop < scrolled){
      suggestions_menu.scrollTop = elTop;
    }
    return true; 
  }
  // timeout funcs
  function killTimeout(){
    clearTimeout(clearSuggestionsTimer);
  };
  function resetTimeout(){
    clearTimeout(clearSuggestionsTimer);
    clearSuggestionsTimer = setTimeout(function () { clearSuggestions() }, 1000);
  };

})};

})($);

/* jquery.chosen.js */

// Chosen, a Select Box Enhancer for jQuery and Protoype
// by Patrick Filler for Harvest, http://getharvest.com
// 
// Version 0.9.6
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `cake build`, do not edit it by hand.
(function() {
  var SelectParser;
  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }
    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };
    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: group.label,
        children: 0,
        disabled: group.disabled
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };
    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };
    return SelectParser;
  })();
  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };
  this.SelectParser = SelectParser;
}).call(this);
(function() {
  /*
  Chosen source: generate output using 'cake build'
  Copyright (c) 2011 by Harvest
  */
  var AbstractChosen, root;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  root = this;
  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      this.set_default_values();
      this.is_multiple = this.form_field.multiple;
      this.default_text_default = this.is_multiple ? "Select Some Options" : "Select an Option";
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.finish_setup();
    }
    AbstractChosen.prototype.set_default_values = function() {
      this.click_test_action = __bind(function(evt) {
        return this.test_active_click(evt);
      }, this);
      this.activate_action = __bind(function(evt) {
        return this.activate_field(evt);
      }, this);
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.result_single_selected = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.choices = 0;
      return this.results_none_found = this.options.no_results_text || "No results match";
    };
    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };
    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };
    AbstractChosen.prototype.input_focus = function(evt) {
      if (!this.active_field) {
        return setTimeout((__bind(function() {
          return this.container_mousedown();
        }, this)), 50);
      }
    };
    AbstractChosen.prototype.input_blur = function(evt) {
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((__bind(function() {
          return this.blur_test();
        }, this)), 100);
      }
    };
    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, style;
      if (!option.disabled) {
        option.dom_id = this.container_id + "_o_" + option.array_index;
        classes = option.selected && this.is_multiple ? [] : ["active-result"];
        if (option.selected) {
          classes.push("result-selected");
        }
        if (option.group_array_index != null) {
          classes.push("group-option");
        }
        if (option.classes !== "") {
          classes.push(option.classes);
        }
        style = option.style.cssText !== "" ? " style=\"" + option.style + "\"" : "";
        return '<li id="' + option.dom_id + '" class="' + classes.join(' ') + '"' + style + '>' + option.html + '</li>';
      } else {
        return "";
      }
    };
    AbstractChosen.prototype.results_update_field = function() {
      this.result_clear_highlight();
      this.result_single_selected = null;
      return this.results_build();
    };
    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };
    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };
    AbstractChosen.prototype.generate_field_id = function() {
      var new_id;
      new_id = this.generate_random_id();
      this.form_field.id = new_id;
      return new_id;
    };
    AbstractChosen.prototype.generate_random_char = function() {
      var chars, newchar, rand;
      chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ";
      rand = Math.floor(Math.random() * chars.length);
      return newchar = chars.substring(rand, rand + 1);
    };
    return AbstractChosen;
  })();
  root.AbstractChosen = AbstractChosen;
}).call(this);
(function() {
  /*
  Chosen source: generate output using 'cake build'
  Copyright (c) 2011 by Harvest
  */
  var $, Chosen, get_side_border_padding, root;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  }, __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  root = this;
  $ = jQuery;
  $.fn.extend({
    chosen: function(options) {
      if ($.browser.msie && ($.browser.version === "6.0" || $.browser.version === "7.0")) {
        return this;
      }
      return $(this).each(function(input_field) {
        if (!($(this)).hasClass("chzn-done")) {
          return new Chosen(this, options);
        }
      });
    }
  });
  Chosen = (function() {
    __extends(Chosen, AbstractChosen);
    function Chosen() {
      Chosen.__super__.constructor.apply(this, arguments);
    }
    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      return this.is_rtl = this.form_field_jq.hasClass("chzn-rtl");
    };
    Chosen.prototype.finish_setup = function() {
      return this.form_field_jq.addClass("chzn-done");
    };
    Chosen.prototype.set_up_html = function() {
      var container_div, dd_top, dd_width, sf_width;
      this.container_id = this.form_field.id.length ? this.form_field.id.replace(/(:|\.)/g, '_') : this.generate_field_id();
      this.container_id += "_chzn";
      this.f_width = this.form_field_jq.outerWidth();
      this.default_text = this.form_field_jq.data('placeholder') ? this.form_field_jq.data('placeholder') : this.default_text_default;
      container_div = $("<div />", {
        id: this.container_id,
        "class": "chzn-container" + (this.is_rtl ? ' chzn-rtl' : ''),
        style: 'width: ' + this.f_width + 'px;'
      });
      if (this.is_multiple) {
        container_div.html('<ul class="chzn-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chzn-drop" style="left:-9000px;"><ul class="chzn-results"></ul></div>');
      } else {
        container_div.html('<a href="javascript:void(0)" class="chzn-single"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chzn-drop" style="left:-9000px;"><div class="chzn-search"><input type="text" autocomplete="off" /></div><ul class="chzn-results"></ul></div>');
      }
      this.form_field_jq.hide().after(container_div);
      this.container = $('#' + this.container_id);
      this.container.addClass("chzn-container-" + (this.is_multiple ? "multi" : "single"));
      this.dropdown = this.container.find('div.chzn-drop').first();
      dd_top = this.container.height();
      dd_width = this.f_width - get_side_border_padding(this.dropdown);
      this.dropdown.css({
        "width": dd_width + "px",
        "top": dd_top + "px"
      });
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chzn-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chzn-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chzn-search').first();
        this.selected_item = this.container.find('.chzn-single').first();
        sf_width = dd_width - get_side_border_padding(this.search_container) - get_side_border_padding(this.search_field);
        this.search_field.css({
          "width": sf_width + "px"
        });
      }
      this.results_build();
      this.set_tab_index();
      return this.form_field_jq.trigger("liszt:ready", {
        chosen: this
      });
    };
    Chosen.prototype.register_observers = function() {
      this.container.mousedown(__bind(function(evt) {
        return this.container_mousedown(evt);
      }, this));
      this.container.mouseup(__bind(function(evt) {
        return this.container_mouseup(evt);
      }, this));
      this.container.mouseenter(__bind(function(evt) {
        return this.mouse_enter(evt);
      }, this));
      this.container.mouseleave(__bind(function(evt) {
        return this.mouse_leave(evt);
      }, this));
      this.search_results.mouseup(__bind(function(evt) {
        return this.search_results_mouseup(evt);
      }, this));
      this.search_results.mouseover(__bind(function(evt) {
        return this.search_results_mouseover(evt);
      }, this));
      this.search_results.mouseout(__bind(function(evt) {
        return this.search_results_mouseout(evt);
      }, this));
      this.form_field_jq.bind("liszt:updated", __bind(function(evt) {
        return this.results_update_field(evt);
      }, this));
      this.search_field.blur(__bind(function(evt) {
        return this.input_blur(evt);
      }, this));
      this.search_field.keyup(__bind(function(evt) {
        return this.keyup_checker(evt);
      }, this));
      this.search_field.keydown(__bind(function(evt) {
        return this.keydown_checker(evt);
      }, this));
      if (this.is_multiple) {
        this.search_choices.click(__bind(function(evt) {
          return this.choices_click(evt);
        }, this));
        return this.search_field.focus(__bind(function(evt) {
          return this.input_focus(evt);
        }, this));
      } else {
        return this.container.click(__bind(function(evt) {
          return evt.preventDefault();
        }, this));
      }
    };
    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chzn-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chzn-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus", this.activate_action);
        }
      }
    };
    Chosen.prototype.container_mousedown = function(evt) {
      var target_closelink;
      if (!this.is_disabled) {
        target_closelink = evt != null ? ($(evt.target)).hasClass("search-choice-close") : false;
        if (evt && evt.type === "mousedown") {
          evt.stopPropagation();
        }
        if (!this.pending_destroy_click && !target_closelink) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(document).click(this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chzn-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        } else {
          return this.pending_destroy_click = false;
        }
      }
    };
    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR") {
        return this.results_reset(evt);
      }
    };
    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chzn-container-active")) {
        return this.close_field();
      }
    };
    Chosen.prototype.close_field = function() {
      $(document).unbind("click", this.click_test_action);
      if (!this.is_multiple) {
        this.selected_item.attr("tabindex", this.search_field.attr("tabindex"));
        this.search_field.attr("tabindex", -1);
      }
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chzn-container-active");
      this.winnow_results_clear();
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };
    Chosen.prototype.activate_field = function() {
      if (!this.is_multiple && !this.active_field) {
        this.search_field.attr("tabindex", this.selected_item.attr("tabindex"));
        this.selected_item.attr("tabindex", -1);
      }
      this.container.addClass("chzn-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };
    Chosen.prototype.test_active_click = function(evt) {
      if ($(evt.target).parents('#' + this.container_id).length) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };
    Chosen.prototype.results_build = function() {
      var content, data, _i, _len, _ref;
      this.parsing = true;
      this.results_data = root.SelectParser.select_to_array(this.form_field);
      if (this.is_multiple && this.choices > 0) {
        this.search_choices.find("li.search-choice").remove();
        this.choices = 0;
      } else if (!this.is_multiple) {
        this.selected_item.find("span").text(this.default_text);
        if (this.form_field.options.length <= this.disable_search_threshold) {
          this.container.addClass("chzn-container-single-nosearch");
        } else {
          this.container.removeClass("chzn-container-single-nosearch");
        }
      }
      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else if (!data.empty) {
          content += this.result_add_option(data);
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.selected_item.find("span").text(data.text);
            if (this.allow_single_deselect) {
              this.single_deselect_control_build();
            }
          }
        }
      }
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      this.search_results.html(content);
      return this.parsing = false;
    };
    Chosen.prototype.result_add_group = function(group) {
      if (!group.disabled) {
        group.dom_id = this.container_id + "_g_" + group.array_index;
        return '<li id="' + group.dom_id + '" class="group-result">' + $("<div />").text(group.label).html() + '</li>';
      } else {
        return "";
      }
    };
    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };
    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };
    Chosen.prototype.results_show = function() {
      var dd_top;
      if (!this.is_multiple) {
        this.selected_item.addClass("chzn-single-with-drop");
        if (this.result_single_selected) {
          this.result_do_highlight(this.result_single_selected);
        }
      }
      dd_top = this.is_multiple ? this.container.height() : this.container.height() - 1;
      this.dropdown.css({
        "top": dd_top + "px",
        "left": 0
      });
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      return this.winnow_results();
    };
    Chosen.prototype.results_hide = function() {
      if (!this.is_multiple) {
        this.selected_item.removeClass("chzn-single-with-drop");
      }
      this.result_clear_highlight();
      this.dropdown.css({
        "left": "-9000px"
      });
      return this.results_showing = false;
    };
    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field_jq.attr("tabindex")) {
        ti = this.form_field_jq.attr("tabindex");
        this.form_field_jq.attr("tabindex", -1);
        if (this.is_multiple) {
          return this.search_field.attr("tabindex", ti);
        } else {
          this.selected_item.attr("tabindex", ti);
          return this.search_field.attr("tabindex", -1);
        }
      }
    };
    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };
    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        return this.result_select(evt);
      }
    };
    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };
    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };
    Chosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (this.active_field && !($(evt.target).hasClass("search-choice" || $(evt.target).parents('.search-choice').first)) && !this.results_showing) {
        return this.results_show();
      }
    };
    Chosen.prototype.choice_build = function(item) {
      var choice_id, link;
      choice_id = this.container_id + "_c_" + item.array_index;
      this.choices += 1;
      this.search_container.before('<li class="search-choice" id="' + choice_id + '"><span>' + item.html + '</span><a href="javascript:void(0)" class="search-choice-close" rel="' + item.array_index + '"></a></li>');
      link = $('#' + choice_id).find("a").first();
      return link.click(__bind(function(evt) {
        return this.choice_destroy_link_click(evt);
      }, this));
    };
    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      if (!this.is_disabled) {
        this.pending_destroy_click = true;
        return this.choice_destroy($(evt.target));
      } else {
        return evt.stopPropagation;
      }
    };
    Chosen.prototype.choice_destroy = function(link) {
      this.choices -= 1;
      this.show_search_field_default();
      if (this.is_multiple && this.choices > 0 && this.search_field.val().length < 1) {
        this.results_hide();
      }
      this.result_deselect(link.attr("rel"));
      return link.parents('li').first().remove();
    };
    Chosen.prototype.results_reset = function(evt) {
      this.form_field.options[0].selected = true;
      this.selected_item.find("span").text(this.default_text);
      this.show_search_field_default();
      $(evt.target).remove();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };
    Chosen.prototype.result_select = function(evt) {
      var high, high_id, item, position;
      if (this.result_highlight) {
        high = this.result_highlight;
        high_id = high.attr("id");
        this.result_clear_highlight();
        if (this.is_multiple) {
          this.result_deactivate(high);
        } else {
          this.search_results.find(".result-selected").removeClass("result-selected");
          this.result_single_selected = high;
        }
        high.addClass("result-selected");
        position = high_id.substr(high_id.lastIndexOf("_") + 1);
        item = this.results_data[position];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.selected_item.find("span").first().text(item.text);
          if (this.allow_single_deselect) {
            this.single_deselect_control_build();
          }
        }
        if (!(evt.metaKey && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field.val("");
        this.form_field_jq.trigger("change");
        return this.search_field_scale();
      }
    };
    Chosen.prototype.result_activate = function(el) {
      return el.addClass("active-result");
    };
    Chosen.prototype.result_deactivate = function(el) {
      return el.removeClass("active-result");
    };
    Chosen.prototype.result_deselect = function(pos) {
      var result, result_data;
      result_data = this.results_data[pos];
      result_data.selected = false;
      this.form_field.options[result_data.options_index].selected = false;
      result = $("#" + this.container_id + "_o_" + pos);
      result.removeClass("result-selected").addClass("active-result").show();
      this.result_clear_highlight();
      this.winnow_results();
      this.form_field_jq.trigger("change");
      return this.search_field_scale();
    };
    Chosen.prototype.single_deselect_control_build = function() {
      if (this.allow_single_deselect && this.selected_item.find("abbr").length < 1) {
        return this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
    };
    Chosen.prototype.winnow_results = function() {
      var found, option, part, parts, regex, result, result_id, results, searchText, startpos, text, zregex, _i, _j, _len, _len2, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.search_field.val() === this.default_text ? "" : $('<div/>').text($.trim(this.search_field.val())).html();
      regex = new RegExp('^' + searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
      zregex = new RegExp(searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (!option.disabled && !option.empty) {
          if (option.group) {
            $('#' + option.dom_id).css('display', 'none');
          } else if (!(this.is_multiple && option.selected)) {
            found = false;
            result_id = option.dom_id;
            result = $("#" + result_id);
            if (regex.test(option.html)) {
              found = true;
              results += 1;
            } else if (option.html.indexOf(" ") >= 0 || option.html.indexOf("[") === 0) {
              parts = option.html.replace(/\[|\]/g, "").split(" ");
              if (parts.length) {
                for (_j = 0, _len2 = parts.length; _j < _len2; _j++) {
                  part = parts[_j];
                  if (regex.test(part)) {
                    found = true;
                    results += 1;
                  }
                }
              }
            }
            if (found) {
              if (searchText.length) {
                startpos = option.html.search(zregex);
                text = option.html.substr(0, startpos + searchText.length) + '</em>' + option.html.substr(startpos + searchText.length);
                text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              } else {
                text = option.html;
              }
              result.html(text);
              this.result_activate(result);
              if (option.group_array_index != null) {
                $("#" + this.results_data[option.group_array_index].dom_id).css('display', 'list-item');
              }
            } else {
              if (this.result_highlight && result_id === this.result_highlight.attr('id')) {
                this.result_clear_highlight();
              }
              this.result_deactivate(result);
            }
          }
        }
      }
      if (results < 1 && searchText.length) {
        return this.no_results(searchText);
      } else {
        return this.winnow_results_set_highlight();
      }
    };
    Chosen.prototype.winnow_results_clear = function() {
      var li, lis, _i, _len, _results;
      this.search_field.val("");
      lis = this.search_results.find("li");
      _results = [];
      for (_i = 0, _len = lis.length; _i < _len; _i++) {
        li = lis[_i];
        li = $(li);
        _results.push(li.hasClass("group-result") ? li.css('display', 'auto') : !this.is_multiple || !li.hasClass("result-selected") ? this.result_activate(li) : void 0);
      }
      return _results;
    };
    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      if (!this.result_highlight) {
        selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
        do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
        if (do_high != null) {
          return this.result_do_highlight(do_high);
        }
      }
    };
    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      return this.search_results.append(no_results_html);
    };
    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };
    Chosen.prototype.keydown_arrow = function() {
      var first_active, next_sib;
      if (!this.result_highlight) {
        first_active = this.search_results.find("li.active-result").first();
        if (first_active) {
          this.result_do_highlight($(first_active));
        }
      } else if (this.results_showing) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          this.result_do_highlight(next_sib);
        }
      }
      if (!this.results_showing) {
        return this.results_show();
      }
    };
    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };
    Chosen.prototype.keydown_backstroke = function() {
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        this.pending_backstroke = this.search_container.siblings("li.search-choice").last();
        return this.pending_backstroke.addClass("search-choice-focus");
      }
    };
    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };
    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          evt.preventDefault();
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          this.keydown_arrow();
          break;
      }
    };
    Chosen.prototype.search_field_scale = function() {
      var dd_top, div, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        if (w > this.f_width - 10) {
          w = this.f_width - 10;
        }
        this.search_field.css({
          'width': w + 'px'
        });
        dd_top = this.container.height();
        return this.dropdown.css({
          "top": dd_top + "px"
        });
      }
    };
    Chosen.prototype.generate_random_id = function() {
      var string;
      string = "sel" + this.generate_random_char() + this.generate_random_char() + this.generate_random_char();
      while ($("#" + string).length > 0) {
        string += this.generate_random_char();
      }
      return string;
    };
    return Chosen;
  })();
  get_side_border_padding = function(elmt) {
    var side_border_padding;
    return side_border_padding = elmt.outerWidth() - elmt.width();
  };
  root.get_side_border_padding = get_side_border_padding;
}).call(this);


/* jquery.colorbox-min.js */

// ColorBox v1.3.18 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function Y(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function Z(a){var b=y.length,c=(Q+a)%b;return c<0?b+c:c}function $(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function _(a){return K.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function ba(){var b;K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.slice(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function bb(b,c){a.event.trigger(b),c&&c.call(P)}function bc(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(Q<y.length-1||K.loop)a=setTimeout(W.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function bd(b){if(!U){P=b,ba(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1));if(!S){S=T=!0,r.show();if(K.returnFocus)try{P.blur(),a(P).one(l,function(){try{this.focus()}catch(a){}})}catch(c){}q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=$(K.initialWidth,"x"),K.h=$(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),bb(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()}W.load(!0)}}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=a.browser.msie&&!a.support.opacity,o=n&&a.browser.version<7,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X="div";W=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{},W.init();if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}return c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b)),a(this).addClass(g)}),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&bd(f[0]),f},W.init=function(){if(!r){if(!a("body")[0]){a(W.init);return}z=a(c),r=Y(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}),q=Y(X,"Overlay",o?"position:absolute":"").hide(),s=Y(X,"Wrapper"),t=Y(X,"Content").append(A=Y(X,"LoadedContent","width:0; height:0; overflow:hidden"),C=Y(X,"LoadingOverlay").add(Y(X,"LoadingGraphic")),D=Y(X,"Title"),E=Y(X,"Current"),G=Y(X,"Next"),H=Y(X,"Previous"),F=Y(X,"Slideshow").bind(h,bc),I=Y(X,"Close")),s.append(Y(X).append(Y(X,"TopLeft"),u=Y(X,"TopCenter"),Y(X,"TopRight")),Y(X,!1,"clear:left").append(v=Y(X,"MiddleLeft"),t,w=Y(X,"MiddleRight")),Y(X,!1,"clear:left").append(Y(X,"BottomLeft"),x=Y(X,"BottomCenter"),Y(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Y(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),a("body").prepend(q,r.append(s,B)),L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}).hide(),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),J=G.add(H).add(E).add(F),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))})}},W.remove=function(){r.add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g)},W.position=function(a,b){function g(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,C[0].style.height=C[1].style.height=t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c=0,d=0,e=r.offset();z.unbind("resize."+f),r.css({top:-99999,left:-99999}),K.fixed&&!o?r.css({position:"fixed"}):(c=z.scrollTop(),d=z.scrollLeft(),r.css({position:"absolute"})),K.right!==!1?d+=Math.max(z.width()-K.w-O-M-$(K.right,"x"),0):K.left!==!1?d+=$(K.left,"x"):d+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?c+=Math.max(z.height()-K.h-N-L-$(K.bottom,"y"),0):K.top!==!1?c+=$(K.top,"y"):c+=Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:e.top,left:e.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:c,left:d},{duration:a,complete:function(){g(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",b&&b(),setTimeout(function(){z.bind("resize."+f,W.position)},1)},step:function(){g(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=$(a.width,"x")-O-M),a.innerWidth&&(K.w=$(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=$(a.height,"y")-N-L),a.innerHeight&&(K.h=$(a.innerHeight,"y")),!a.innerHeight&&!a.height&&(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position(K.transition==="none"?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(!S)return;var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Y(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function q(){n&&r[0].style.removeAttribute("filter")}var b,c,g=y.length,h,i="frameBorder",k="allowTransparency",l,o,p;if(!S)return;l=function(){clearTimeout(V),C.hide(),bb(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show();if(g>1){typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||Q<g-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show();if(K.preloading){b=[Z(-1),Z(1)];while(c=y[b.pop()])o=a.data(c,e).href||c.href,a.isFunction(o)&&(o=o.call(c)),_(o)&&(p=new Image,p.src=o)}}else J.hide();K.iframe?(h=Y("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),h.name=f+ +(new Date),K.fastIframe?l():a(h).one("load",l),h.src=K.href,K.scrolling||(h.scrolling="no"),a(h).addClass(f+"Iframe").appendTo(A).one(m,function(){h.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,q):q()},K.transition==="fade"?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||ba(),bb(m),bb(i,K.onLoad),K.h=K.height?$(K.height,"y")-N-L:K.innerHeight&&$(K.innerHeight,"y"),K.w=K.width?$(K.width,"x")-O-M:K.innerWidth&&$(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=$(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=$(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show()},100),K.inline?(Y(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):_(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Y(X,"Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(Q<y.length-1||K.loop)&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Y(X,"Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},W.next=function(){!T&&y[1]&&(Q<y.length-1||K.loop)&&(Q=Z(1),W.load())},W.prev=function(){!T&&y[1]&&(Q||K.loop)&&(Q=Z(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,bb(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),bb(m),A.remove(),setTimeout(function(){U=!1,bb(l,K.onClosed)},1)}))},W.element=function(){return a(P)},W.settings=d,a("."+g,b).live("click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),bd(this))}),W.init()})(jQuery,document,this);

/* jquery.cropper.js */

/*
* Image Cropping Plugin
* Version 1.1
* Martin Purcell <martin@devellion.com>
*
* Description:	Adapted (heavily) from the JQuery UI example script (ui.jquery.com)
* Takes a source image, and creates a draggable, resizable image editor
*
* Usage:		Add class="cropper" to any image tag, and set an ID, which will be used for the input fields
* Handling:		Creates 4 hidden input fields:
*					<id>[x]	- defines crop left
*					<id>[y]	- defines crop top
*					<id>[h]	- defines crop height
*					<id>[w]	- defines crop width
*
* This work is licensed under a Creative Commons Attribution-Share Alike 2.0 license (creativecommons.org)
*/
jQuery.fn.cropper	= function(){
	this.each(function(){
		var img		= new Image();
		var name	= jQuery(this).attr('id');
		img.src		= jQuery(this).attr('src');
		
		var cropper	= document.createElement('div');
		jQuery(cropper).addClass('crop_wrapper').css({width: img.width, height: img.height});
		var input_x	= document.createElement('input');
		jQuery(input_x).attr({id: name+'_x', name: name+'[x]', type: 'hidden'});
		jQuery(cropper).append(input_x);
		var input_y	= document.createElement('input');
		jQuery(input_y).attr({id: name+'_y', name: name+'[y]', type: 'hidden'});
		jQuery(cropper).append(input_y);
		var input_h	= document.createElement('input');
		jQuery(input_h).attr({id: name+'_h', name: name+'[h]', type: 'hidden'});
		jQuery(cropper).append(input_h);
		var input_w	= document.createElement('input');
		jQuery(input_w).attr({id: name+'_w', name: name+'[w]', type: 'hidden'});
		jQuery(cropper).append(input_w);
		var source	= document.createElement('div');
		jQuery(source).addClass('crop_source').css({
			width: img.width,
			height: img.height,
			background: 'transparent url('+img.src+') no-repeat scroll 0%',
			opacity: 0.3
		});
		var select	= document.createElement('div');
		jQuery(select).addClass('crop_select').resizable({
			containment: 'parent',
			handles: 'all',
			knobHandles: true,
			ghost: false,
			autoHide: false,
			minWidth: 75,
			minHeight: 75,
			resize: function(e, ui) {
				var self = jQuery(this).data('resizable');
				this.style.backgroundPosition = '-' + (self.position.left) + 'px -' + (self.position.top) + 'px';
				jQuery(input_x).val(self.position.left);
				jQuery(input_y).val(self.position.top);
				jQuery(input_h).val(self.size.height);
				jQuery(input_w).val(self.size.width);
			},
			stop: function(e, ui) {
				var self = jQuery(this).data('resizable');
				this.style.backgroundPosition = '-' + (self.position.left) + 'px -' + (self.position.top) + 'px';
			}
		}).draggable({		
			cursor: 'move',
			containment: 'parent',
			drag: function(e, ui) {
				var pos		= jQuery(this).data('draggable');
				jQuery(input_x).val(pos.position.left);
				jQuery(input_y).val(pos.position.top);
				this.style.backgroundPosition = '-' + (pos.position.left) + 'px -' + (pos.position.top) + 'px';
			}
		}).css({background: 'transparent url('+img.src+') no-repeat scroll 0px 0px'});
		jQuery(cropper).append(source);
		jQuery(cropper).append(select);
		jQuery(this).replaceWith(cropper);
	});
}
jQuery(document).ready(function(){
	jQuery('img.cropper').cropper();
});

/* jquery.filetree.js */

/*
jQuery File Tree Plugin
Version 1.8 - 27th June 2012

Martin Purcell & Bill Wheeler - Devellion (http://devellion.com)
- re-engineered specifically for CubeCart to use a JSON response, instead of html
- modified to only insert form tags when images change

Based on the original plugin by Cory S.N. LaViska - A Beautiful Site (http://abeautifulsite.net/)

Usage:
	$('div.filetree').fileTree([options]);

-- TERMS OF USE --
jQuery File Tree is licensed under a Creative Commons License and is copyrighted (C)2008 by Cory S.N. LaViska.
For details, visit http://creativecommons.org/licenses/by/3.0/us/
*/

function in_array(val, ar, strict) {
	if (strict) {
		function equals(a,b){return a === b}
	} else {
		function equals(a,b){return a == b}
	}
	for (var i in ar) {
		if (equals(ar[i], val)) return true;
	}
	return false;
}

function array_search( needle, haystack, strict ) {
    var strict = !!strict;
    for (var key in haystack){
        if( (strict && haystack[key] === needle) || (!strict && haystack[key] == needle) ){
            return true;
        }
    }
    return false;
}

if (jQuery)(function($){

	$.extend($.fn, {
		fileTree: function(o, h) {
			if (!o) var o = {};
			if (!h) var h = function(h){return};
			if (!o.root) o.root = '/';
			if (!o.name) o.name = 'image';
			if (!o.group) o.group = 1;
			if (!o.script) o.script = 'admin.php';
			if (!o.unique) {
				o.unique = ($(this).hasClass('unique')) ? true : false;
			}
			$(this).each(function() {
				function showTree(c, t) {
					$(c).addClass('wait');
					$('.filetree.start').remove();
					if ($(c).children('ul').length >= 1) {
						// Already Loaded
						$(c).removeClass('wait').children('ul').slideDown();
					} else {
						// AJAX request
						$.ajax({
							complete: function(XMLHttpRequest, textStatus){$('.wait').removeClass('wait');},
							dataType: 'json',
							global: false
						});
						$.getJSON(o.script, {'_g': 'xml', type: 'files', q: 'list', dir: t, group: o.group}, function(data){
							$(c).find('.start').html('');
							var ul	= document.createElement('ul');
							$(ul).addClass('filetree');
							$.each(data, function(i, item){
								var li	= document.createElement('li');
								var a	= document.createElement('a');
								switch (item.type) {
									case 'directory':
										$(li).addClass('directory collapsed');
										$(a).attr({href: '#', rel: item.path}).text(item.name);
										break;
									case 'file':
										var span	= document.createElement('span');
										var img		= document.createElement('img');
										var status	= '0'; // added to fix bug 2367
										if (typeof(file_default) != 'number') file_default = 0;
										if (file_default == item.id) {
											var bool = '2';
										} else {
											var bool	= (typeof(file_list) == 'object' && array_search(item.id, file_list)) ? 1 : 0
										}
										$(span).addClass('actions');

										$(img).addClass('imgtoggle').data({
											id: o.name+'_'+item.id,
											rel: item.id,
											name: o.name+'['+item.id+']',
											value: bool
										});
										
										switch (bool) {
											case '2':
												status = 'star'; break;
											default:
												status = bool;
										}
										img.src = 'admin/skins/default/images/'+status+'.png';
										$(img).attr({rel: '#'+o.name+'_'+item.id}).addClass('checkbox');
										if (o.unique) $(img).addClass('unique');
										$(span).append(img);
										$(li).append(span).addClass('file');
										$(a).attr({href: item.path+item.name, rel: item.path, title: item.description}).text(item.file);
										if (item.mime.match(/^image/)) {
											$(li).addClass('image');
											$(a).bind('click', function() {
												$.fn.colorbox({href:$(a).attr('href'), open:true});
												return false;
											});
										}
										break;
								}
								$(li).append(a);
								$(ul).append(li);
							});
							if (o.root == t) $(c).find('ul:hidden').show(); else $(c).find('ul:hidden').slideDown('slow');
							$(c).append(ul).removeClass('wait');
							bindTree(c);
						});
					}
				}
				function bindTree(t) {
					$(t).find('li>a').bind('click', function(){
						if ($(this).parent().hasClass('directory')) {
							if ($(this).parent().hasClass('collapsed')) {
								$(this).parent('ul').remove();
                                                                /* BUG 2814 fixed */
                                                                showTree($(this).parent(), $(this).attr('rel'));
								$(this).parent().removeClass('collapsed').addClass('expanded');
							} else {
								$(this).parent().find('ul').slideUp('slow');
								$(this).parent().removeClass('expanded').addClass('collapsed');
							}
						}
						return false;
					});
				}
				$(this).html('<ul class="filetree start"><li class="wait">&nbsp;<li></ul>');
				showTree($(this), escape(o.root));
			});
		}
	});

	/* Set up status toggle images */
	$('input.toggle:hidden').each(function(){
		var img_status = ($(this).val() == '1') ? '1' : '0';
		var img			= document.createElement('img');
		img.src = 'admin/skins/default/images/'+img_status+'.png';
		if (img_status == '1') {
			img.alt = img.title = 'Disable';
		} else {
			img.alt = img.title = 'Enable';
	    }
		$(img).addClass('checkbox');
		if ($(this).hasClass('unique')) $(img).addClass('unique');
		$(img).attr('rel', '#'+$(this).attr('id'));
		$(this).after(img);
	}).change(function(){
		switch ($(this).val()) {
			case '1':
				var status = '1'; var alt = 'Disable'; break;
			case '2':
				var status = 'star'; var alt = ''; break;
			default:
				var status = '0'; var alt = 'Enable'; break;
		}
		var controller = 'img.checkbox[rel=#'+$(this).attr('id')+']';
		$(controller).attr({'src': 'admin/skins/default/images/'+status+'.png', 'alt' : alt, 'title' : alt});
	});

	// handle special insertion of form element only when an image is changed from current
	$('img.imgtoggle').live('click', function(){
		var id_val = $(this).data('id');
		var is_unique = $(this).hasClass('unique');
		var input = document.createElement('input');
		var status = '0';
		if (is_unique) $(input).addClass('unique');
		$(input).addClass('toggle').attr({
			type: 'hidden',
			id: id_val,
			rel: $(this).data('rel'),
			name: $(this).data('name'),
			value: $(this).data('value')
		}).change(function(){
			switch ($(this).val()) {
				case '1':
					status = '1'; break;
				case '2':
					status = 'star'; 
					if($('#master_image_preview').exists()) {
						var master_image = $(this).closest(".image").find("a").attr('href');
						$('#master_image_preview').attr('src', master_image);
					}
					break;
				default:
					status = '0'; break;
			}
			var controller = 'img.checkbox[rel=#'+id_val+']';
			$(controller).attr({'src': 'admin/skins/default/images/'+status+'.png'});
		});
		var parent_span = $(this).parent('span.action');
		$(this).before(input);
		$(this).removeClass('imgtoggle').addClass('toggle');
	});

	$('img.checkbox').live('click', function(){
		var parent = $(this).attr('rel');

		var is_filemanager	= $(this).parents('div:first').hasClass('fm-filelist');
		var is_unique		= $(this).hasClass('unique');
		switch ($(parent).val()) {
			case '1':
				if (is_unique || !is_filemanager) {
					var new_value = '0';
				} else {
					$('input[value=2].toggle').each(function(){
						$('img[rel='+$(this).attr('rel')+'].checkbox').val('1').change();
					});
					var new_value = '2';
				}
				break;
			case '2':
				var new_value = '0';
				break;
			default:
				
				if (is_unique) $('.fm-container input.toggle').val('0').change();
				
				/* Code form Redux causing other bug removed for now
				if (is_unique) $('.fm-container input.toggle[value="1"], .fm-container input.toggle[value="2"]').val('0').change();
				*/
				var new_value = '1';
				break;
		}
		$(parent).val(new_value).change();
	});
})(jQuery);

/* jquery.magnifier.js */

/**
 * jQuery Magnifier Plugin
 * @author Dieter Orens dieter@dio5.com
 * 
 * @option Number lensWidth -  width of the lens 
 * @option Number lensHeight - height of the lens
 * @option Boolean link - makes clicking go to the large image (default:true)
 * @option Number delay - adds a delay to the appearing of the lens (default:0)
 * 
 */
(function($){
    $.extend($.fn,
    {
        magnify:function(options)
        {
            return this.each(function()
            {
                var magnifier =
                {
                    defaults:
                    {
                        lensWidth: 160,
                        lensHeight: 160,
                        link: true,
                        delay: 0
                    },
					
                    a: null,
                    $img: null,
                    $largeImage: null,
                    $lens: null,
                    $sensor: null,
                    $loader: null,
                    timeOut: null,
                    largeWidth: 0,
                    largeHeight: 0,
					
                    init:function(options)
                    {
                        magnifier.options = $.extend({}, magnifier.defaults, options);
                        magnifier.a = this;
                        magnifier.$img = $('img', this);
                        magnifier.setLargeImage();
                        magnifier.setLens();
                        magnifier.setSensor();
                        magnifier.setLoader();
                        magnifier.loadImage();
                        magnifier.addHandles();
                    },
					
                    setLargeImage:function()
                    {
                        magnifier.$largeImage = $(new Image());
                        magnifier.$largeImage.attr('src', magnifier.a.href).css('display', 'none');
                    },
					
                    setLens:function()
                    {
                        magnifier.$lens = $("<div id='dio-lens'></div>");
                        magnifier.$lens.css({
                            width: magnifier.options.lensWidth,
                            height: magnifier.options.lensHeight,
                            visibility: 'hidden',
                            overflow: 'hidden',
                            position: 'absolute',
                            left:0,
                            top:0
                        }).appendTo('body');
                    },
					
                    setSensor:function()
                    {
                        magnifier.$sensor = $("<div id='dio-sensor' style='position:absolute;'></div>");
                        $('body').append(magnifier.$sensor);
						
                        if (magnifier.options.link)
                        {
                            magnifier.$sensor.click(function(){
                                //window.location = magnifier.a.href
                                $.fn.colorbox({href:magnifier.a.href, open:true});
                            });
                        }
                    },
					
                    setLoader:function()
                    {
                        magnifier.$loader = $("<div id='dio-loader'>loading</div>").css({
                            width: magnifier.options.lensWidth,
                            height: magnifier.options.lensHeight
                            });
                        magnifier.$lens.append(magnifier.$loader);
                    },
					
                    loadImage:function()
                    {
						
                        magnifier.$largeImage.load(function(e)
                        {
                            magnifier.imgLoadCheck(magnifier.$largeImage[0], magnifier.loadCallback, magnifier.errorCallback, e);
                        });
                    },
					
                    imgLoadCheck:function(img, loadCallback, errorCallback)
                    {
                        if(img!=null)
                        {
                            function imgWatch()
                            {
                                if(img.complete)
                                {
                                    clearInterval(loadWatch);
                                    loadCallback();
                                }
                            }
                            var loadWatch = setInterval(imgWatch, 100);
                        }
                        else
                        {
                            errorCallback();
                        }
                    },
					
                    loadCallback:function()
                    {
                        magnifier.$lens.append(magnifier.$largeImage);
						
                        function moveWatch()
                        {
                            if(magnifier.$largeImage.width())
                            {
                                magnifier.largeWidth = magnifier.$largeImage.width();
                                magnifier.largeHeight = magnifier.$largeImage.height();
                            }
                            if (magnifier.largeWidth) {
                                magnifier.$loader.remove();
                                clearInterval(moveID);
                            }
                        }
                        var moveID = setInterval(moveWatch, 100);
                    },
					
                    errorCallback:function()
                    {
                        alert("large image could not be loaded");
                    },
					
                    addHandles:function()
                    {
                        magnifier.$sensor.css(
                        {
                            width: magnifier.$img.width() + "px",
                            height: magnifier.$img.height() + "px",
                            top: magnifier.$img.offset().top + "px",
                            left: magnifier.$img.offset().left + "px",
                            backgroundColor: "#fff",
                            opacity: "0"
                        })
                        .mousemove(function(e){
                            magnifier.handleMouseMove(e);
                        })
                        .mouseout(function(e){
                            magnifier.handleMouseOut(e);
                        });
                    },
										
                    handleMouseMove:function(e)
                    {
                        magnifier.$lens.css({
                            left: parseInt(e.pageX - (magnifier.options.lensWidth * .5)) + "px",
                            top: parseInt(e.pageY - (magnifier.options.lensHeight * .5)) + "px"
                        });
						

                        if (magnifier.options.delay)
                        {
                            if (!magnifier.timeOut) {
                                magnifier.timeOut = setTimeout(function(){
                                    magnifier.$lens.css('visibility', 'visible');
                                }, magnifier.options.delay);
                            }
                        }
                        else {
                            magnifier.$lens.css('visibility', 'visible');
                        }
						
                        if(magnifier.largeWidth){
                            magnifier.positionLargeImage(e);
                        }
						
                        magnifier.$lens.css('display', 'block');
                    },
					
                    positionLargeImage:function(e)
                    {
                        var scale = {};
				
                        scale.x = magnifier.largeWidth / magnifier.$img.width();
                        scale.y = magnifier.largeHeight / magnifier.$img.height();
					
                        var left = -scale.x * Math.abs((e.pageX - magnifier.$img.offset().left)) + magnifier.options.lensWidth / 2 + "px";
                        var top = -scale.y * Math.abs((e.pageY - magnifier.$img.offset().top)) + magnifier.options.lensHeight / 2 + "px";
										
                        magnifier.$largeImage.css(
                        {
                            position: 'absolute',
                            left: left,
                            top: top,
                            display:'block'
                        });
                    },
					
                    handleMouseOut: function(e)
                    {
                        if (magnifier.timeOut) {
                            clearTimeout(magnifier.timeOut);
                            magnifier.timeOut = null;
                        }
                        magnifier.$lens.css({
                            visibility: 'hidden',
                            display: 'none'
                        });
                    }
                };
				
                magnifier.init.call(this,options);
            });
        }
    });
})(jQuery);

/* jquery.multifile.min.js */

/*
 ### jQuery Multiple File Upload Plugin v1.46 - 2009-05-12 ###
 * Home: http://www.fyneworks.com/jquery/multiple-file-upload/
 * Code: http://code.google.com/p/jquery-multifile-plugin/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 ###
*/
;if(window.jQuery)(function($){$.fn.MultiFile=function(options){if(this.length==0)return this;if(typeof arguments[0]=='string'){if(this.length>1){var args=arguments;return this.each(function(){$.fn.MultiFile.apply($(this),args);});};$.fn.MultiFile[arguments[0]].apply(this,$.makeArray(arguments).slice(1)||[]);return this;};var options=$.extend({},$.fn.MultiFile.options,options||{});$('form').not('MultiFile-intercepted').addClass('MultiFile-intercepted').submit($.fn.MultiFile.disableEmpty);if($.fn.MultiFile.options.autoIntercept){$.fn.MultiFile.intercept($.fn.MultiFile.options.autoIntercept);$.fn.MultiFile.options.autoIntercept=null;};this.not('.MultiFile-applied').addClass('MultiFile-applied').each(function(){window.MultiFile=(window.MultiFile||0)+1;var group_count=window.MultiFile;var MultiFile={e:this,E:$(this),clone:$(this).clone()};if(typeof options=='number')options={max:options};var o=$.extend({},$.fn.MultiFile.options,options||{},($.metadata?MultiFile.E.metadata():($.meta?MultiFile.E.data():null))||{},{});if(!(o.max>0)){o.max=MultiFile.E.attr('maxlength');if(!(o.max>0)){o.max=(String(MultiFile.e.className.match(/\b(max|limit)\-([0-9]+)\b/gi)||['']).match(/[0-9]+/gi)||[''])[0];if(!(o.max>0))o.max=-1;else o.max=String(o.max).match(/[0-9]+/gi)[0];}};o.max=new Number(o.max);o.accept=o.accept||MultiFile.E.attr('accept')||'';if(!o.accept){o.accept=(MultiFile.e.className.match(/\b(accept\-[\w\|]+)\b/gi))||'';o.accept=new String(o.accept).replace(/^(accept|ext)\-/i,'');};$.extend(MultiFile,o||{});MultiFile.STRING=$.extend({},$.fn.MultiFile.options.STRING,MultiFile.STRING);$.extend(MultiFile,{n:0,slaves:[],files:[],instanceKey:MultiFile.e.id||'MultiFile'+String(group_count),generateID:function(z){return MultiFile.instanceKey+(z>0?'_F'+String(z):'');},trigger:function(event,element){var handler=MultiFile[event],value=$(element).attr('value');if(handler){var returnValue=handler(element,value,MultiFile);if(returnValue!=null)return returnValue;}
return true;}});if(String(MultiFile.accept).length>1){MultiFile.accept=MultiFile.accept.replace(/\W+/g,'|').replace(/^\W|\W$/g,'');MultiFile.rxAccept=new RegExp('\\.('+(MultiFile.accept?MultiFile.accept:'')+')$','gi');};MultiFile.wrapID=MultiFile.instanceKey+'_wrap';MultiFile.E.wrap('<div class="MultiFile-wrap" id="'+MultiFile.wrapID+'"></div>');MultiFile.wrapper=$('#'+MultiFile.wrapID+'');MultiFile.e.name=MultiFile.e.name||'file'+group_count+'[]';if(!MultiFile.list){MultiFile.wrapper.append('<div class="MultiFile-list" id="'+MultiFile.wrapID+'_list"></div>');MultiFile.list=$('#'+MultiFile.wrapID+'_list');};MultiFile.list=$(MultiFile.list);MultiFile.addSlave=function(slave,slave_count){MultiFile.n++;slave.MultiFile=MultiFile;if(slave_count>0)slave.id=slave.name='';if(slave_count>0)slave.id=MultiFile.generateID(slave_count);slave.name=String(MultiFile.namePattern.replace(/\$name/gi,$(MultiFile.clone).attr('name')).replace(/\$id/gi,$(MultiFile.clone).attr('id')).replace(/\$g/gi,group_count).replace(/\$i/gi,slave_count));if((MultiFile.max>0)&&((MultiFile.n-1)>(MultiFile.max)))
slave.disabled=true;MultiFile.current=MultiFile.slaves[slave_count]=slave;slave=$(slave);slave.val('').attr('value','')[0].value='';slave.addClass('MultiFile-applied');slave.change(function(){$(this).blur();if(!MultiFile.trigger('onFileSelect',this,MultiFile))return false;var ERROR='',v=String(this.value||'');if(MultiFile.accept&&v&&!v.match(MultiFile.rxAccept))
ERROR=MultiFile.STRING.denied.replace('$ext',String(v.match(/\.\w{1,4}$/gi)));for(var f in MultiFile.slaves)
if(MultiFile.slaves[f]&&MultiFile.slaves[f]!=this)
if(MultiFile.slaves[f].value==v)
ERROR=MultiFile.STRING.duplicate.replace('$file',v.match(/[^\/\\]+$/gi));var newEle=$(MultiFile.clone).clone();newEle.addClass('MultiFile');if(ERROR!=''){MultiFile.error(ERROR);MultiFile.n--;MultiFile.addSlave(newEle[0],slave_count);slave.parent().prepend(newEle);slave.remove();return false;};$(this).css({position:'absolute',top:'-3000px'});slave.after(newEle);MultiFile.addToList(this,slave_count);MultiFile.addSlave(newEle[0],slave_count+1);if(!MultiFile.trigger('afterFileSelect',this,MultiFile))return false;});$(slave).data('MultiFile',MultiFile);};MultiFile.addToList=function(slave,slave_count){if(!MultiFile.trigger('onFileAppend',slave,MultiFile))return false;var
r=$('<div class="MultiFile-label"></div>'),v=String(slave.value||''),a=$('<span class="MultiFile-title" title="'+MultiFile.STRING.selected.replace('$file',v)+'">'+MultiFile.STRING.file.replace('$file',v.match(/[^\/\\]+$/gi)[0])+'</span>'),b=$('<a class="MultiFile-remove" href="#'+MultiFile.wrapID+'">'+MultiFile.STRING.remove+'</a>');MultiFile.list.append(r.append(b,' ',a));b.click(function(){if(!MultiFile.trigger('onFileRemove',slave,MultiFile))return false;MultiFile.n--;MultiFile.current.disabled=false;MultiFile.slaves[slave_count]=null;$(slave).remove();$(this).parent().remove();$(MultiFile.current).css({position:'',top:''});$(MultiFile.current).reset().val('').attr('value','')[0].value='';if(!MultiFile.trigger('afterFileRemove',slave,MultiFile))return false;return false;});if(!MultiFile.trigger('afterFileAppend',slave,MultiFile))return false;};if(!MultiFile.MultiFile)MultiFile.addSlave(MultiFile.e,0);MultiFile.n++;MultiFile.E.data('MultiFile',MultiFile);});};$.extend($.fn.MultiFile,{reset:function(){var settings=$(this).data('MultiFile');if(settings)settings.list.find('a.MultiFile-remove').click();return $(this);},disableEmpty:function(klass){klass=(typeof(klass)=='string'?klass:'')||'mfD';var o=[];$('input:file.MultiFile').each(function(){if($(this).val()=='')o[o.length]=this;});return $(o).each(function(){this.disabled=true}).addClass(klass);},reEnableEmpty:function(klass){klass=(typeof(klass)=='string'?klass:'')||'mfD';return $('input:file.'+klass).removeClass(klass).each(function(){this.disabled=false});},intercepted:{},intercept:function(methods,context,args){var method,value;args=args||[];if(args.constructor.toString().indexOf("Array")<0)args=[args];if(typeof(methods)=='function'){$.fn.MultiFile.disableEmpty();value=methods.apply(context||window,args);setTimeout(function(){$.fn.MultiFile.reEnableEmpty()},1000);return value;};if(methods.constructor.toString().indexOf("Array")<0)methods=[methods];for(var i=0;i<methods.length;i++){method=methods[i]+'';if(method)(function(method){$.fn.MultiFile.intercepted[method]=$.fn[method]||function(){};$.fn[method]=function(){$.fn.MultiFile.disableEmpty();value=$.fn.MultiFile.intercepted[method].apply(this,arguments);setTimeout(function(){$.fn.MultiFile.reEnableEmpty()},1000);return value;};})(method);};}});$.fn.MultiFile.options={accept:'',max:-1,namePattern:'$name',STRING:{remove:'x',denied:'You cannot select a $ext file.\nTry again...',file:'$file',selected:'File selected: $file',duplicate:'This file has already been selected:\n$file'},autoIntercept:['submit','ajaxSubmit','ajaxForm','validate'],error:function(s){alert(s);}};$.fn.reset=function(){return this.each(function(){try{this.reset();}catch(e){}});};$(function(){$("input[type=file].multi").MultiFile();});})(jQuery);

/* jquery.pstrength.js */

/* @projectDescription jQuery Password Strength Plugin - A jQuery plugin to provide accessibility functions
 * @author Tane Piper (digitalspaghetti@gmail.com)
 * @version 2.0
 * @website: http://digitalspaghetti.me.uk/digitalspaghetti
 * @license MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * === Changelog ===
 * Version 2.1 (18/05/2008)
 * Added a jQuery method to add a new rule: jQuery('input[@type=password]').pstrength.addRule(name, method, score, active)
 * Added a jQuery method to change a rule score: jQuery('input[@type=password]').pstrength.changeScore('one_number', 50);
 * Added a jQuery method to change a rules active state: jQuery('input[@type=password]').pstrength.ruleActive('one_number', false);
 * Hide the 'password to short' span if the password is more than the min chars
 *
 * Version 2.0 (17/05/2008)
 * Completly re-wrote the plugin from scratch.  Plugin now features lamda functions for validation and
 * custom validation rules
 * Plugin now exists in new digitalspaghetti. namespace to stop any conflits with other plugins.
 * Updated documentation
 *
 * Version 1.4 (12/02/2008)
 * Added some improvments to i18n stuff from Raffael Luthiger.
 * Version 1.3 (02/01/2008)
 * Changing coding style to more OO
 * Added default messages object for i18n
 * Changed password length score to Math.pow (thanks to Keith Mashinter for this suggestion)
 * Version 1.2 (03/09/2007)
 * Added more options for colors and common words
 * Added common words checked to see if words like 'password' or 'qwerty' are being entered
 * Added minimum characters required for password
 * Re-worked scoring system to give better results
 * Version 1.1 (20/08/2007)
 * Changed code to be more jQuery-like
 * Version 1.0 (20/07/2007)
 * Initial version.
 */

// Create our namespaced object
/*global window */
/*global jQuery */
/*global digitalspaghetti*/
window.digitalspaghetti = window.digitalspaghetti || {};
digitalspaghetti.password = {
	'defaults' : {
		'displayMinChar': true,
		'minChar': 8,
		'minCharText': 'You must enter a minimum of %d characters',
		'colors': ["#f00", "#c06", "#f60", "#3c0", "#3f0"],
		'scores': [20, 30, 43, 50],
		'verdicts':	['Weak', 'Normal', 'Medium', 'Strong', 'Very Strong'],
		'raisePower': 1.4,
		'debug': false
	},
	'ruleScores' : {
		'length': 0,
		'lowercase': 1,
		'uppercase': 3,
		'one_number': 3,
		'three_numbers': 5,
		'one_special_char': 3,
		'two_special_char': 5,
		'upper_lower_combo': 2,
		'letter_number_combo': 2,
		'letter_number_char_combo': 2
	},
	'rules' : {
		'length': true,
		'lowercase': true,
		'uppercase': true,
		'one_number': true,
		'three_numbers': true,
		'one_special_char': true,
		'two_special_char': true,
		'upper_lower_combo': true,
		'letter_number_combo': true,
		'letter_number_char_combo': true
	},
	'validationRules': {
		'length': function (word, score) {
			digitalspaghetti.password.tooShort = false;
			var wordlen = word.length;
			var lenScore = Math.pow(wordlen, digitalspaghetti.password.options.raisePower);
			if (wordlen < digitalspaghetti.password.options.minChar) {
				lenScore = (lenScore - 100);
				digitalspaghetti.password.tooShort = true;
			}
			return lenScore;
		},
		'lowercase': function (word, score) {
			return word.match(/[a-z]/) && score;
		},
		'uppercase': function (word, score) {
			return word.match(/[A-Z]/) && score;
		},
		'one_number': function (word, score) {
			return word.match(/\d+/) && score;
		},
		'three_numbers': function (word, score) {
			return word.match(/(.*[0-9].*[0-9].*[0-9])/) && score;
		},
		'one_special_char': function (word, score) {
			return word.match(/.[!,@,#,$,%,\^,&,*,?,_,~]/) && score;
		},
		'two_special_char': function (word, score) {
			return word.match(/(.*[!,@,#,$,%,\^,&,*,?,_,~].*[!,@,#,$,%,\^,&,*,?,_,~])/) && score;
		},
		'upper_lower_combo': function (word, score) {
			return word.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && score;
		},
		'letter_number_combo': function (word, score) {
			return word.match(/([a-zA-Z])/) && word.match(/([0-9])/) && score;
		},
		'letter_number_char_combo' : function (word, score) {
			return word.match(/([a-zA-Z0-9].*[!,@,#,$,%,\^,&,*,?,_,~])|([!,@,#,$,%,\^,&,*,?,_,~].*[a-zA-Z0-9])/) && score;
		}
	},
	'attachWidget': function (element) {
		var output = ['<div id="password-strength">'];
		if (digitalspaghetti.password.options.displayMinChar && !digitalspaghetti.password.tooShort) {
			output.push('<span class="password-min-char">' + digitalspaghetti.password.options.minCharText.replace('%d', digitalspaghetti.password.options.minChar) + '</span>');
		}
		output.push('<span class="password-strength-bar"></span>');
		output.push('</div>');
		output = output.join('');
		jQuery(element).after(output);
	},
	'debugOutput': function (element) {
		if (typeof console.log === 'function') {
			console.log(digitalspaghetti.password);
		} else {
			alert(digitalspaghetti.password);
		}
	},
	'addRule': function (name, method, score, active) {
		digitalspaghetti.password.rules[name] = active;
		digitalspaghetti.password.ruleScores[name] = score;
		digitalspaghetti.password.validationRules[name] = method;
		return true;
	},
	'init': function (element, options) {
		digitalspaghetti.password.options = jQuery.extend({}, digitalspaghetti.password.defaults, options);
		digitalspaghetti.password.attachWidget(element);
		jQuery(element).keyup(function () {
			digitalspaghetti.password.calculateScore(this, jQuery(this).val());
		});
		if (digitalspaghetti.password.options.debug) {
			digitalspaghetti.password.debugOutput();
		}
	},
	'calculateScore': function (element, word) {
		digitalspaghetti.password.totalscore = 0;
		digitalspaghetti.password.width = 0;
		for (var key in digitalspaghetti.password.rules) if (digitalspaghetti.password.rules.hasOwnProperty(key)) {
			if (digitalspaghetti.password.rules[key] === true) {
				var score = digitalspaghetti.password.ruleScores[key];
				var result = digitalspaghetti.password.validationRules[key](word, score);
				if (result) {
					digitalspaghetti.password.totalscore += result;
				}
			}
			if (digitalspaghetti.password.totalscore <= digitalspaghetti.password.options.scores[0]) {
				digitalspaghetti.password.strColor = digitalspaghetti.password.options.colors[0];
				digitalspaghetti.password.strText = digitalspaghetti.password.options.verdicts[0];
				digitalspaghetti.password.width =  "1";
			} else if (digitalspaghetti.password.totalscore > digitalspaghetti.password.options.scores[0] && digitalspaghetti.password.totalscore <= digitalspaghetti.password.options.scores[1]) {
				digitalspaghetti.password.strColor = digitalspaghetti.password.options.colors[1];
				digitalspaghetti.password.strText = digitalspaghetti.password.options.verdicts[1];
				digitalspaghetti.password.width =  "25";
			} else if (digitalspaghetti.password.totalscore > digitalspaghetti.password.options.scores[1] && digitalspaghetti.password.totalscore <= digitalspaghetti.password.options.scores[2]) {
				digitalspaghetti.password.strColor = digitalspaghetti.password.options.colors[2];
				digitalspaghetti.password.strText = digitalspaghetti.password.options.verdicts[2];
				digitalspaghetti.password.width =  "50";
			} else if (digitalspaghetti.password.totalscore > digitalspaghetti.password.options.scores[2] && digitalspaghetti.password.totalscore <= digitalspaghetti.password.options.scores[3]) {
				digitalspaghetti.password.strColor = digitalspaghetti.password.options.colors[3];
				digitalspaghetti.password.strText = digitalspaghetti.password.options.verdicts[3];
				digitalspaghetti.password.width =  "75";
			} else {
				digitalspaghetti.password.strColor = digitalspaghetti.password.options.colors[4];
				digitalspaghetti.password.strText = digitalspaghetti.password.options.verdicts[4];
				digitalspaghetti.password.width =  "99";
			}
			jQuery('.password-strength-bar').stop();
			if (digitalspaghetti.password.options.displayMinChar && !digitalspaghetti.password.tooShort) {
				jQuery('.password-min-char').hide();
			} else {
				jQuery('.password-min-char').show();
			}

			jQuery('.password-strength-bar').animate({opacity: 0.5}, 'fast', 'linear', function () {
				jQuery(this).css({'display': 'block', 'background-color': digitalspaghetti.password.strColor, 'width': digitalspaghetti.password.width + "%"}).text(digitalspaghetti.password.strText);
				jQuery(this).animate({opacity: 1}, 'fast', 'linear');
			});
		}
		/* CubeCart Patch - 2010/01/27 */
		jQuery(element).removeClass('required-error');
		if (digitalspaghetti.password.width < digitalspaghetti.password.options.scores[3]) {
			jQuery(element).addClass('required-error');

		}
		/* End Patch */
	}
};

jQuery.extend(jQuery.fn, {
	'pstrength': function (options) {
		return this.each(function () {
			digitalspaghetti.password.init(this, options);
		});
	}
});
jQuery.extend(jQuery.fn.pstrength, {
	'addRule': function (name, method, score, active) {
		digitalspaghetti.password.addRule(name, method, score, active);
		return true;
	},
	'changeScore': function (rule, score) {
		digitalspaghetti.password.ruleScores[rule] = score;
		return true;
	},
	'ruleActive': function (rule, active) {
		digitalspaghetti.password.rules[rule] = active;
		return true;
	}
});

/* jquery.rating.min.js */

/*
 ### jQuery Star Rating Plugin v3.12 - 2009-04-16 ###
 * Home: http://www.fyneworks.com/jquery/star-rating/
 * Code: http://code.google.com/p/jquery-star-rating-plugin/
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 ###
*/
;if(window.jQuery)(function($){if($.browser.msie)try{document.execCommand("BackgroundImageCache",false,true)}catch(e){};$.fn.rating=function(options){if(this.length==0)return this;if(typeof arguments[0]=='string'){if(this.length>1){var args=arguments;return this.each(function(){$.fn.rating.apply($(this),args);});};$.fn.rating[arguments[0]].apply(this,$.makeArray(arguments).slice(1)||[]);return this;};var options=$.extend({},$.fn.rating.options,options||{});$.fn.rating.calls++;this.not('.star-rating-applied').addClass('star-rating-applied').each(function(){var control,input=$(this);var eid=(this.name||'unnamed-rating').replace(/\[|\]/g,'_').replace(/^\_+|\_+$/g,'');var context=$(this.form||document.body);var raters=context.data('rating');if(!raters||raters.call!=$.fn.rating.calls)raters={count:0,call:$.fn.rating.calls};var rater=raters[eid];if(rater)control=rater.data('rating');if(rater&&control)
control.count++;else{control=$.extend({},options||{},($.metadata?input.metadata():($.meta?input.data():null))||{},{count:0,stars:[],inputs:[]});control.serial=raters.count++;rater=$('<span class="star-rating-control"/>');input.before(rater);rater.addClass('rating-to-be-drawn');if(input.attr('disabled'))control.readOnly=true;rater.append(control.cancel=$('<div class="rating-cancel"><a title="'+control.cancel+'">'+control.cancelValue+'</a></div>').mouseover(function(){$(this).rating('drain');$(this).addClass('star-rating-hover');}).mouseout(function(){$(this).rating('draw');$(this).removeClass('star-rating-hover');}).click(function(){$(this).rating('select');}).data('rating',control));};var star=$('<div class="star-rating rater-'+control.serial+'"><a title="'+(this.title||this.value)+'">'+this.value+'</a></div>');rater.append(star);if(this.id)star.attr('id',this.id);if(this.className)star.addClass(this.className);if(control.half)control.split=2;if(typeof control.split=='number'&&control.split>0){var stw=($.fn.width?star.width():0)||control.starWidth;var spi=(control.count%control.split),spw=Math.floor(stw/control.split);star.width(spw).find('a').css({'margin-left':'-'+(spi*spw)+'px'})};if(control.readOnly)
star.addClass('star-rating-readonly');else
star.addClass('star-rating-live').mouseover(function(){$(this).rating('fill');$(this).rating('focus');}).mouseout(function(){$(this).rating('draw');$(this).rating('blur');}).click(function(){$(this).rating('select');});if(this.checked)control.current=star;input.hide();input.change(function(){$(this).rating('select');});star.data('rating.input',input.data('rating.star',star));control.stars[control.stars.length]=star[0];control.inputs[control.inputs.length]=input[0];control.rater=raters[eid]=rater;control.context=context;input.data('rating',control);rater.data('rating',control);star.data('rating',control);context.data('rating',raters);});$('.rating-to-be-drawn').rating('draw').removeClass('rating-to-be-drawn');return this;};$.extend($.fn.rating,{calls:0,focus:function(){var control=this.data('rating');if(!control)return this;if(!control.focus)return this;var input=$(this).data('rating.input')||$(this.tagName=='INPUT'?this:null);if(control.focus)control.focus.apply(input[0],[input.val(),$('a',input.data('rating.star'))[0]]);},blur:function(){var control=this.data('rating');if(!control)return this;if(!control.blur)return this;var input=$(this).data('rating.input')||$(this.tagName=='INPUT'?this:null);if(control.blur)control.blur.apply(input[0],[input.val(),$('a',input.data('rating.star'))[0]]);},fill:function(){var control=this.data('rating');if(!control)return this;if(control.readOnly)return;this.rating('drain');this.prevAll().andSelf().filter('.rater-'+control.serial).addClass('star-rating-hover');},drain:function(){var control=this.data('rating');if(!control)return this;if(control.readOnly)return;control.rater.children().filter('.rater-'+control.serial).removeClass('star-rating-on').removeClass('star-rating-hover');},draw:function(){var control=this.data('rating');if(!control)return this;this.rating('drain');if(control.current){control.current.data('rating.input').attr('checked','checked');control.current.prevAll().andSelf().filter('.rater-'+control.serial).addClass('star-rating-on');}
else
$(control.inputs).removeAttr('checked');control.cancel[control.readOnly||control.required?'hide':'show']();this.siblings()[control.readOnly?'addClass':'removeClass']('star-rating-readonly');},select:function(value){var control=this.data('rating');if(!control)return this;if(control.readOnly)return;control.current=null;if(typeof value!='undefined'){if(typeof value=='number')
return $(control.stars[value]).rating('select');if(typeof value=='string')
$.each(control.stars,function(){if($(this).data('rating.input').val()==value)$(this).rating('select');});}
else
control.current=this[0].tagName=='INPUT'?this.data('rating.star'):(this.is('.rater-'+control.serial)?this:null);this.data('rating',control);this.rating('draw');var input=$(control.current?control.current.data('rating.input'):null);if(control.callback)control.callback.apply(input[0],[input.val(),$('a',control.current)[0]]);},readOnly:function(toggle,disable){var control=this.data('rating');if(!control)return this;control.readOnly=toggle||toggle==undefined?true:false;if(disable)$(control.inputs).attr("disabled","disabled");else $(control.inputs).removeAttr("disabled");this.data('rating',control);this.rating('draw');},disable:function(){this.rating('readOnly',true,true);},enable:function(){this.rating('readOnly',false,false);}});$.fn.rating.options={cancel:'Cancel Rating',cancelValue:'',split:0,starWidth:16};$(function(){$('input[type=radio].star').rating();});})(jQuery);