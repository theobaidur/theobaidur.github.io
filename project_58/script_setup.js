var qs = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));

function setFontSize(){
    if(document.getElementById('monitorLink')){
        document.getElementById('monitorLink').href="monitor.html?font="+font;    
    } 

    if(document.getElementById('setupLink')){
        document.getElementById('setupLink').href="setup.html?font="+font;    
    }

     $('table').css('table-layout','auto');

    var twidth = $('table').width();
    var tabwidth = $('.tab_content').width();
    
    if(twidth>=tabwidth){
        $('table').css('table-layout','fixed');
    }else{
        $('table').css('table-layout','auto');
    }
}

var font = 14;
var tds = document.querySelectorAll("td"),i;

if(qs.font){
    font = parseInt(qs.font);
    for (i = 0; i < tds.length; ++i) {
        tds[i].style.fontSize = font + "px";
    }
    setFontSize();
}


function showWarning(text) {
    var el = document.getElementById("warning");
    el.innerHTML = text;
    el.removeAttribute('hidden');
    window.scrollTo(0, 0);
}

function hideWarning() {
    document.getElementById("warning").setAttribute('hidden', '');
}
var notifTimeout = null;

function showNotification(text) {

    var el = document.getElementById("notification");
    el.innerHTML = text;
    el.removeAttribute('hidden');


    if (notifTimeout != null) clearTimeout(notifTimeout);
    notifTimout = setTimeout(function() {
        el.setAttribute('hidden', '');
        notifTimout = null;
    }, 4000);
}

// Please improve following function. and try to check all corner-cases.
function updateTable(data){
    for(var key in data){
    var a = document.getElementById(key);
    var b = 0;
    if(a.type == "number") b = a.step.toString().split(".")[1].length; 
        $("#"+key).val(parseFloat(data[key]).toFixed(b)); // update each input elements
    }

    toggleFunc(document.getElementById('aru'));
    toggleFunc2(document.getElementById('bru'));
    changeUnit1(document.getElementById('aoru'));
    changeUnit2(document.getElementById('boru'));
}

function postData(data){
    var url = "changeSetup.json?"+data;
    $.post(url,'', function(response, status){
        updateTable(response);
    });
}

function getData(){
    var url = "changeSetup.json";

    $.get(url, function(data, status){
        updateTable(data);
    });
}

function saveData(){
    var url = "changeSetup.json";
    var data = $("#setupForm").serialize();
    $.post(url,data, function(data, status){
        updateTable(data);
    }); 
}

showNotification("Notification Example...!!");



document.querySelector(".arrow.up").addEventListener("click", function(e) {

    font+=4;
    for (i = 0; i < tds.length; ++i) {
        tds[i].style.fontSize = (font) + "px";
    }

    setFontSize();

});

document.querySelector(".arrow.down").addEventListener("click", function(e) {
    font-=4;
    for (i = 0; i < tds.length; ++i) {
        tds[i].style.fontSize = font + "px";
    }

    setFontSize();
});


function toggleRow1(sel){
    if(sel=='IN1A Range'){
        document.getElementById("ina_func").innerHTML = "IN2A Function";
    }else{
        document.getElementById("ina_func").innerHTML = "IN1A Function";
    }  
    
}


function toggleRow2(sel){
    if(sel=='IN1B Range'){
        document.getElementById("inb_func").innerHTML = "IN2B Function";
     
    }else{
        document.getElementById("inb_func").innerHTML = "IN1B Function";
    
    }  
    
}

function toggleFunc(sel){
   var val = 'IN1A Range';
   if(sel.value=='1'){
        val = 'IN2A Range';
        document.getElementById('arl').step = "0.01";
        document.getElementById('arh').step = "0.01";
    }
    else {
        document.getElementById('arl').step = "0.1";
        document.getElementById('arh').step = "0.1";
    }

    document.getElementById('ro1c00').innerHTML = val;
    toggleRow1(val);
    
    
}

function toggleFunc2(sel){
   var val = 'IN1B Range';
   if(sel.value=='1'){
        val = 'IN2B Range';
        document.getElementById('brl').step = "0.01";
        document.getElementById('brh').step = "0.01";
    } else {
        document.getElementById('brl').step = "0.1";
        document.getElementById('brh').step = "0.1";
    }

    document.getElementById('r10c00').innerHTML = val;

    toggleRow2(val);
    
}


function changeUnit1(sel){
    document.getElementById("aaoru").value = sel.value;
    if(sel.value == "1") {
        document.getElementById('aorl').step = "0.1";
        document.getElementById('aorh').step = "0.1";
        document.getElementById('aaorl').step = "0.1";
        document.getElementById('aaorh').step = "0.1";
    } else {
        document.getElementById('aorl').step = "0.01";
        document.getElementById('aorh').step = "0.01";
        document.getElementById('aaorl').step = "0.01";
        document.getElementById('aaorh').step = "0.01";
    }
}


function changeUnit2(sel){
    document.getElementById("baoru").value = sel.value;
    if(sel.value == "1") {
        document.getElementById('borl').step = "0.1";
        document.getElementById('borh').step = "0.1";
        document.getElementById('baorl').step = "0.1";
        document.getElementById('baorh').step = "0.1";
    } else {
        document.getElementById('borl').step = "0.01";
        document.getElementById('borh').step = "0.01";
        document.getElementById('baorl').step = "0.01";
        document.getElementById('baorh').step = "0.01";
    }
}

$(function(){
    getData();//get defult data
    $('input').on('focus',function(){
        $(this).attr('data-pVal',$(this).val());
    });
    $('input').on('blur', function() { // listen to any inputs
        var data = $(this).attr('name')+"="+$(this).val();
       
        if($(this).attr('data-pVal')!=$(this).val()){
            postData(data);    
        }
        
    });

    $('select').on('change', function() { // listen to any inputs
        var data = $(this).attr('name')+"="+$(this).val();
       
        postData(data);
        
    });

    $(".savebtn").click(saveData);

    var focusedElem;

    $(document).on('focus','input',function(){
        if(focusedElem == $(this)) return;
        focusedElem = $(this);
        setTimeout(function(){
            focusedElem.select();
        },50);
    });
});