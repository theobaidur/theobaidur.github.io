var font = 14;
var tds = document.querySelectorAll("td"),i;


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

function load(url, callback) {
    var xhr;

    if (typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
    else {
        var versions = ["MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ]

        for (var i = 0, len = versions.length; i < len; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {}
        } // end for
    }

    xhr.onreadystatechange = ensureReadiness;

    function ensureReadiness() {
        if (xhr.readyState < 4) {
            return;
        }

        if (xhr.status !== 200) {
            return;
        }

        // all is well  
        if (xhr.readyState === 4) {
            callback(xhr);
        }
    }

    xhr.open('GET', url, true);
    xhr.send('');
}

function fetchData() {
    if(!document.querySelector("table")){
      return;
    }
    load('data.json', function(data) {
      data = JSON.parse(data.responseText);
        if(!document.querySelector(".setup_table")){
        document.querySelector(".in1_a").innerHTML = data.IN1_A;
        document.querySelector(".in1_b").innerHTML = data.IN1_B;
        document.querySelector(".in2_a").innerHTML = data.IN2_A;
        document.querySelector(".in2_b").innerHTML = data.IN2_B;
        document.querySelector(".tar_a").innerHTML = data.TARGET_A;
        document.querySelector(".tar_b").innerHTML = data.TARGET_B;
        document.querySelector(".op_a").innerHTML = data.OUT_A;
        document.querySelector(".op_b").innerHTML = data.OUT_B;
        document.querySelector(".dc_a").innerHTML = data.DC_A;
        document.querySelector(".dc_b").innerHTML = data.DC_B;
        document.querySelector(".ip_a").innerHTML = data.IMP_A;
        document.querySelector(".ip_b").innerHTML = data.IMP_B;
        document.querySelector(".sv_a").innerHTML = data.SUP_A;
        document.querySelector(".sv_b").innerHTML = data.SUP_B;
        document.querySelector(".tmp_a").innerHTML = data.TEMP_A;
        document.querySelector(".tmp_b").innerHTML = data.TEMP_B;
        }
    })
};


showWarning("Hello warning");
fetchData();
setInterval(fetchData, 10000);

document.querySelector(".arrow.up").addEventListener("click", function(e) {

    font++;
    for (i = 0; i < tds.length; ++i) {
        tds[i].style.fontSize = (font) + "px";
    }

});

document.querySelector(".arrow.down").addEventListener("click", function(e) {
    --font;
    for (i = 0; i < tds.length; ++i) {
        tds[i].style.fontSize = font + "px";
    }
});

function initSetup(){
    document.querySelector(".in1a_func").style.display = 'none';
    document.querySelector(".in1b_func").style.display = 'none';
        
}

initSetup();

function toggleRow1(sel){
    if(sel.value=='IN1A Range'){
        document.querySelector(".in1a_func").style.display = 'none';
        document.querySelector(".in2a_func").style.display = '';
     
    }else{
        document.querySelector(".in1a_func").style.display = '';
        document.querySelector(".in2a_func").style.display = 'none';
    
    }  
    
}


function toggleRow2(sel){
    if(sel.value=='IN1B Range'){
        document.querySelector(".in1b_func").style.display = 'none';
        document.querySelector(".in2b_func").style.display = '';
     
    }else{
        document.querySelector(".in1b_func").style.display = '';
        document.querySelector(".in2b_func").style.display = 'none';
    
    }  
    
}

function changeUnit1(sel){
    document.querySelector(".alt_op_range_unit").innerHTML = sel.value;
        
}


function changeUnit2(sel){
    document.querySelector(".alt_op_range_unit_2").innerHTML = sel.value;
        
}


