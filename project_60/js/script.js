var gameInit = false;
var totalPc = 0;
var gData = {}; 
var adminInputFinished = false;   
function show_popup(which, label, index){
    $('.popup_overlay').removeClass('hide');
    $('.popup_content').removeClass('show');
    $('.popup_content.'+which).addClass('show');
    $('.popup_content.'+which).find('label').text(label);
    $('.popup_content.'+which).find('input').data('index',index).val('');
    $('.popup_content.'+which).find('.btn').data('index',index);
}

function hide_popup(){
    $('.popup_overlay').addClass('hide');
    $('.popup_content').removeClass('show');
}

function getTimeReadable(duration){
    var m,s;
    m = parseInt(duration / 60, 10);
    s = parseInt(duration % 60, 10);

    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    return m+":"+s;
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    display.find('p').text(getTimeReadable(duration));
    timer--;
    var interval = setInterval(function () {
        
        display.find('p').text(getTimeReadable(timer));

        if (--timer < 0) {
            reset_pc(display.data('index'));
            
            clearInterval(interval);
        }
    }, 1000);


}



function create_pc(){
    var container = $('.container');
    container.empty();
    
    var grid = gData.total_pc > 4 || !(gData.total_pc%4)?4:!(gData.total_pc%3)?3:1;
    container.removeClass (function (index, css) {
        return (css.match (/(^|\s)grid-\S+/g) || []).join(' ');
    });

    container.addClass('grid_'+grid);

    for(var i=1; i<=gData.total_pc; i++){
        var template = $('<div class="pc_box pc_box_'+i+'">\
                            <div class="pc_monitor_outer">\
                                <span class="pc_index">'+i+'</span>\
                                <div class="pc_monitor_inner" data-index="'+i+'"><p></p>\
                                </div>\
                                <div class="circle_container"><span></span><span></span><span></span></div>\
                            </div>\
                            <div class="pc_stand_outer">\
                                <div class="pc_stand"></div>\
                                <div class="pc_stand_base"></div>\
                            </div>\
                        </div>');
        container.append(template);
        template.find('.pc_monitor_inner').click(popupHandle);

    }
}

function reset_pc(index){
    $('.pc_box_'+index).find('.pc_monitor_inner').removeClass('disabled');
    $('.pc_box_'+index).find('.pc_monitor_inner').find('p').text('');
    gData["passInfo"]["pc_"+index]["turn"] = 0;
    $('.pc_box_'+index).find('.circle_container').find('span').removeClass('selected');

            
}

function popupHandle(){
    if($(this).hasClass('disabled')){
        return false;
    }
    var index = $(this).data('index');
    if(!adminInputFinished){
        show_popup('pc_pass_input','Set password for PC : '+index, index);
        
    }else{
        show_popup('pc_pass_match','Password for PC : '+index, index);
    }
}

function pass_input_handle(e){
    e.preventDefault();
    var index = $(this).data('index');
    var pass = $.trim($('.pass_input').val());
    hide_popup();
    if(pass){
        gData["passInfo"]["pc_"+index]["pass"]=pass;
       
    }

    var tmp = 0;
    for(var i=1; i<=gData.total_pc; i++){
        if(gData["passInfo"]["pc_"+i]["pass"]){
            tmp++;
        }
    }
    if(tmp==gData.total_pc){
        adminInputFinished = true;
        gData["adminInputFinished"] = adminInputFinished;
        show_popup('game_start','','');
    }
}

function pass_match_handle(e){
    if(!adminInputFinished){
        return false;
    }
    e.preventDefault();
    var index = $(this).data('index');
    var pass = $.trim($('.pass_match').val());
    hide_popup();
    if(pass && gData["passInfo"]["pc_"+index]["pass"]==pass){
       $('.pc_box_'+index).addClass('matched');
    }else{
        gData["passInfo"]["pc_"+index]["turn"]++;
        var circles = $('.pc_box_'+index).find('.circle_container').find('span');
        circles.removeClass('selected');
        for(var i=0; i<3; i++){
            circles.eq(i).addClass(i<gData["passInfo"]["pc_"+index]["turn"] ? "selected":"");
        }

        if(gData["passInfo"]["pc_"+index]["turn"]>=3){
            $('.pc_box_'+index).find('.pc_monitor_inner').addClass('disabled');
            startTimer(60*5,$('.pc_box_'+index).find('.pc_monitor_inner'));
        }
    }
}

function init(){
    gData["total_pc"] = total_pc;
    gData["adminInputFinished"] = adminInputFinished;
    gData["passInfo"] = {};
    for(var i=1; i<=total_pc; i++){
        gData["passInfo"]["pc_"+i] = {
            "pass":"",
            "turn":0
        }   
    }

    localStorage.setItem("gdata", JSON.stringify(gData));
    create_pc();
    
}

function get_pc_input(){
    hide_popup();
    
    var tmp = parseInt($('.total_pc').val());
    if(tmp<2)
        total_pc = 2;
    else if(tmp>10)
        total_pc=10;
    else
        total_pc = tmp;
    init();
}

function save_n_start(){
    localStorage.setItem("gdata", JSON.stringify(gData));
    hide_popup();
}

$(function(){
    var savedData = localStorage.getItem('gdata') || false;
    if(!savedData){
        show_popup('pc_input','Total Pc (2 to 10)', 0);
    }else{
        gData = JSON.parse(savedData);
        adminInputFinished = gData["adminInputFinished"];
        for(var i=1; i<=gData.total_pc; i++){
            gData["passInfo"]["pc_"+i]["turn"] = 0;
        }
        create_pc();
    }

    $('.total_pc_btn').click(get_pc_input);
    $('.popup_close').click(hide_popup);
    $('.pass_input_btn').click(pass_input_handle);
    $('.pass_match_btn').click(pass_match_handle);
    $('.start').click(save_n_start);

});
