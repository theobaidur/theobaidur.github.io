function showWarning(text) {
  var el = $("#warning");
  el.text(text);
  el.removeAttr('hidden');
  window.scrollTo(0, 0);
}
function hideWarning() {
  el = $("#warning").attr('hidden', '');
}
var notifTimeout = null;
function showNotification(text) {
  var el = $("#notification");
  el.text(text);
  el.removeAttr('hidden');
  if (notifTimeout != null) clearTimeout(notifTimeout);
  notifTimout = setTimeout(function() {
      el.attr('hidden', '');
      notifTimout = null;
    }, 4000);
}

function fetchData(){
    $.get('data.json',function(data){
        $(".in1_a").text(data.IN1_A);
        $(".in1_b").text(data.IN1_B);
        $(".in2_a").text(data.IN2_A);
        $(".in2_b").text(data.IN2_B);
        $(".tar_a").text(data.TARGET_A);
        $(".tar_b").text(data.TARGET_B);
        $(".op_a").text(data.OUT_A);
        $(".op_b").text(data.OUT_B);
        $(".dc_a").text(data.DC_A);
        $(".dc_b").text(data.DC_B);
        $(".ip_a").text(data.IMP_A);
        $(".ip_b").text(data.IMP_B);
        $(".sv_a").text(data.SUP_A);
        $(".sv_b").text(data.SUP_B);
        $(".tmp_a").text(data.TEMP_A);
        $(".tmp_b").text(data.TEMP_B);     
   })
}

$(function(){
    showNotification("Hello warning");
   fetchData();
   setInterval(fetchData,10000);
   
});

