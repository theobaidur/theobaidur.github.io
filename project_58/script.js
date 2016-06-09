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
    
    if(twidth>tabwidth){
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
    load('/value', function(data) {
      data = JSON.parse(data.responseText);
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
        document.querySelector(".sv_a").innerHTML = data.SUPP_A;
        document.querySelector(".sv_b").innerHTML = data.SUPP_B;
        document.querySelector(".tmp_a").innerHTML = data.TEMP_A;
        document.querySelector(".tmp_b").innerHTML = data.TEMP_B;
    })
};


showNotification("Connected...!!");
fetchData();
setInterval(fetchData, 100);



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


