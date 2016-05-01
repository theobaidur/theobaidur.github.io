if (typeof Array.prototype.indexOf !== 'function') {
    Array.prototype.indexOf = function (item) {
        for(var i = 0; i < this.length; i++) {
            if (this[i] === item) {
                return i;
            }
        }
        return -1;
    }; 
}

window.lineupWidget = (function () {
    function Dome(selector) {
        var els;
        if (typeof selector === 'string') {
            els = document.querySelectorAll(selector);
        } else if (selector.length) { 
            els = selector;
        } else {
            els = [selector];
        }
        for(var i = 0; i < els.length; i++ ) {
            this[i] = els[i];
        }
        this.length = els.length;

        return this;
    }
    // ========= UTILS =========
    Dome.prototype.forEach = function (callback) {
        this.map(callback);
        return this; 
    };
    Dome.prototype.map = function (callback) {
        var results = [];
        for (var i = 0; i < this.length; i++) {
            results.push(callback.call(this, this[i], i));
        }
        return results; //.length > 1 ? results : results[0];
    };
    Dome.prototype.mapOne = function (callback) {
        var m = this.map(callback);
        return m.length > 1 ? m : m[0];
    };

    Dome.prototype.createXHR = function (){
        var xhr;
        if (window.ActiveXObject)
        {
            try
            {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e)
            {
                alert(e.message);
                xhr = null;
            }
        }
        else
        {
            xhr = new XMLHttpRequest();
        }

        return xhr;
    }

    // ========== DOM MANIPULATION ==========
    Dome.prototype.createFrame = function(token){
        var frame = document.createElement("IFRAME");
        frame.setAttribute("src", "http://static.dream2development.com/phptest/iframe.php?token="+token);

        return frame;
    }

    Dome.prototype.init = function () {
        return this.forEach(function (el) {
            var This = this;
            var mypostrequest=This.createXHR();

            mypostrequest.onreadystatechange=function(){
             if (mypostrequest.readyState==4){
              if (mypostrequest.status==200 || window.location.href.indexOf("http")==-1){
               console.log(mypostrequest.responseText);
               var iframe = This.createFrame(mypostrequest.responseText);
               el.appendChild(iframe);
              }
              else{
               console.log("An error has occured making the request")
              }
             }
            }
            //var namevalue=encodeURIComponent(document.getElementById("name").value)
            //var agevalue=encodeURIComponent(document.getElementById("age").value)
            var parameters="";
            mypostrequest.open("POST", "response.php", true);
            mypostrequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            mypostrequest.send(parameters);
        });
    };

    

    

    

    var dome = function (selector) {
            var els;
            if (typeof selector === 'string') {
                els = document.querySelectorAll(selector);
            } else if (selector.length) { 
                els = selector;
            } else {
                els = [selector];
            }
            return new Dome(els);
        };
    return dome;
}());
