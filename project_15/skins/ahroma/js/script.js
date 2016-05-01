/* Custom JavaScript for default template */
/* Acordion menu (only opens, doesn't collapse) */
$('#menu.accordion a ~ ul').each(function(){
	$(this).siblings('a:first').addClass('menu_closed').hover(function(){
		$(this).addClass('menu_open').siblings('ul').slideDown();
	});
});
/* Registration toggle */
if ($('input#show-reg:checkbox').is(':checked') == false) $('fieldset#account-reg').hide();
$('input#show-reg:checkbox').change(function(){
	if ($(this).is(':checked')) {
		$('fieldset#account-reg').show();
		$('input#reg_password').addClass('required');
		$('input#reg_passconf').addClass('required');
	} else {
		$('fieldset#account-reg').hide();
		$('input#reg_password').removeClass('required');
		$('input#reg_passconf').removeClass('required');
	}
});

/* Delivery toggle */
if ($('#delivery_is_billing:checkbox').is(':checked') == true) $('fieldset#address_delivery').hide();
$('#delivery_is_billing:checkbox').change(function(){
	if ($(this).is(':checked')) {
		$('fieldset#address_delivery').hide();
	} else {
		$('fieldset#address_delivery').show();
	}
});

/* Do some clever gateway selection styling and hide the radio buttons */
$('#gateways>p').each(function(){
	if ($(this).children('input:radio:checked').length == 1) $(this).addClass('gateway-selected');
	$(this).children('input:radio').bind('change', function(){
		$('#gateways>p').removeClass('gateway-selected');
		$(this).parent('p:first').addClass('gateway-selected');
	}); //.hide();
});

/* Dropdown menu */
var timeout         = 500;
var closetimer		= 0;
var ddmenuitem      = 0;

function account_dd_open(){	
	account_dd_canceltimer();
	account_dd_close();
	ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');
}

function account_dd_close(){	
	if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');
}

function account_dd_timer(){
	closetimer = window.setTimeout(account_dd_close, timeout);
}

function account_dd_canceltimer(){	
	if(closetimer){	
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

function megaMenu(){
	jQuery(document).megaMenu({ 'sensitivity' : 5, 'interval' : 100, 'timeout' : 800});
	};
	
function initSearchDropdown(){
	var config = {
	'.chzn-select' : {},
	'.chzn-select-deselect' : {allow_single_deselect:true},
	'.chzn-select-no-single' : {disable_search_threshold:10},
	'.chzn-select-no-results': {no_results_text:'Oops, nothing found!'},
	'.chzn-select-width' : {width:"100%"}
	}
	for (var selector in config) {
	$(selector).chosen(config[selector]);
	}

}


function is_empty(obj) {
	var hasOwnProperty = Object.prototype.hasOwnProperty;
     if (obj == null) return true;
     if (obj.length && obj.length > 0)    return false;
    if (obj.length === 0)  return true;
   for (var key in obj) {
        if (hasOwnProperty.call(obj, key))    return false;
    }
    return true;
}

function updateCartInfo(cartList){
	var price = 0;
	var items = 0;
	for(var Item in cartList){
		price+=cartList[Item].unit*cartList[Item].pricePerUnit;
		items++;
	}
	var pref = (items>1) ? "Total items " : "Total item ";
	$(".totalItem").text("Cart ("+items+")");	
	}

function showCart(cartList){
	var i = 0;
	var tprice = 0;
	var html = $("<div>").addClass("inner");
	html.append("<div class=\"row divider\"></div>");

	if(!is_empty(cartList)){
		for(var Item in cartList){
				var row =  $("<div>").addClass("row");
				var thumb = $("<div>").addClass("thumb");
				var img = $("<img>").attr("src",cartList[Item].itemThumb);
				thumb.append(img);
				var des = $("<div>").addClass("des");
				var title = $("<p>").text(cartList[Item].itemName);
				var qnt = $("<p>").addClass("quantity").text("Quantity : "+cartList[Item].unit);
				var price =	$("<p>").addClass("price").text("Price : $"+(cartList[Item].unit*cartList[Item].pricePerUnit));
				des.append(title);
				des.append(qnt);
				des.append(price);
				row.append(thumb);
				row.append(des);
				html.append(row);
				html.append("<div class=\"row divider\"></div>");
				
				i++;
				tprice+=cartList[Item].unit*cartList[Item].pricePerUnit;

			}
		
	}
	
	var pref = (i>1) ? " items" : " item";
	var title = $("<div>").addClass("row title").append("<p class=\"total_cart\">"+i+pref+"</p><p class=\"total_price\">$"+tprice+"</p>");
	html.prepend(title);
	var cartbtn = $("<a>").addClass("cart_btn").text("Checkout");
	var cartbtn = $("<div>").addClass("row btn_con").append(cartbtn);
	html.append(cartbtn);
	
	$("#tooltip_container").find(".inner").remove();
	$("#tooltip_container").append(html);
}	

$(document).ready(function(){
	var cartItem = {
		0:{
			"itemName":"Item 1",
			"itemThumb":"images/thumb_1.jpg",
			"unit":5,
			"pricePerUnit":50
			},
		1:{
			"itemName":"Item 2",
			"itemThumb":"images/thumb_2.jpg",
			"unit":6,
			"pricePerUnit":50
			},
		2:{
			"itemName":"Item 3",
			"itemThumb":"images/thumb_3.jpg",
			"unit":2,
			"pricePerUnit":100
			},	
		3:{
			"itemName":"Item 4",
			"itemThumb":"images/thumb_4.jpg",
			"unit":6,
			"pricePerUnit":50
			}	
		}
		
	var btn = $(".summery");
	var tooltip = $("#tooltip_container");
	/*btn.toggle(function(){
		btn.find("b").toggleClass("open");
			showCart(cartItem);			
		},function(){
		btn.find("b").toggleClass("open");
			tooltip.hide();		
	});*/
	var kk = 0;	
	//showCart(cartItem);
	btn.mouseenter(function(){
		showCart(cartItem);
		$(this).toggleClass("active");	
	}).mouseleave(function(){
		$(this).toggleClass("active");
	
	});	
	updateCartInfo(cartItem);	
	megaMenu();
	initSearchDropdown();
	$('.jquery_dd > li').bind('mouseover', account_dd_open);
	$('.jquery_dd > li').bind('mouseout',  account_dd_timer);
});
document.onclick = account_dd_close;