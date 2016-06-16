var gameInit = false;

var totalPc = 0;

var gData = {};

var adminInputFinished = false;

function show_popup(a, b, c) {
    $(".popup_overlay").removeClass("hide");
    $(".popup_content").removeClass("show");
    $(".popup_content." + a).addClass("show");
    $(".popup_content." + a).find("label").text(b);
    $(".popup_content." + a).find("input").data("index", c).val("");
    $(".popup_content." + a).find(".btn").data("index", c);
}

function hide_popup() {
    $(".popup_overlay").addClass("hide");
    $(".popup_content").removeClass("show");
}

function getTimeReadable(a) {
    var b, c;
    b = parseInt(a / 60, 10);
    c = parseInt(a % 60, 10);
    b = b < 10 ? "0" + b : b;
    c = c < 10 ? "0" + c : c;
    return b + ":" + c;
}

function startTimer(a, b) {
    var c = a, d, e;
    b.find("p").text(getTimeReadable(a));
    c--;
    var f = setInterval(function() {
        b.find("p").text(getTimeReadable(c));
        if (--c < 0) {
            reset_pc(b.data("index"));
            clearInterval(f);
        }
    }, 1e3);
}

function create_pc() {
    var a = $(".container");
    a.empty();
    var b = gData.total_pc > 4 || !(gData.total_pc % 4) ? 4 : !(gData.total_pc % 3) ? 3 : 1;
    a.removeClass(function(a, b) {
        return (b.match(/(^|\s)grid-\S+/g) || []).join(" ");
    });
    a.addClass("grid_" + b);
    for (var c = 1; c <= gData.total_pc; c++) {
        var d = $('<div class="pc_box pc_box_' + c + '"><div class="pc_monitor_outer"><span class="pc_index">' + c + '</span><div class="pc_monitor_inner" data-index="' + c + '"><p></p></div><div class="circle_container"><span></span><span></span><span></span></div></div><div class="pc_stand_outer"><div class="pc_stand"></div><div class="pc_stand_base"></div></div></div>');
        a.append(d);
        d.find(".pc_monitor_inner").click(popupHandle);
    }
}

function reset_pc(a) {
    $(".pc_box_" + a).find(".pc_monitor_inner").removeClass("disabled");
    $(".pc_box_" + a).find(".pc_monitor_inner").find("p").text("");
    gData["passInfo"]["pc_" + a]["turn"] = 0;
    $(".pc_box_" + a).find(".circle_container").find("span").removeClass("selected");
}

function popupHandle() {
    if ($(this).hasClass("disabled")) return false;
    var a = $(this).data("index");
    if (!adminInputFinished) show_popup("pc_pass_input", "Set password for PC : " + a, a); else show_popup("pc_pass_match", "Password for PC : " + a, a);
}

function pass_input_handle(a) {
    a.preventDefault();
    var b = $(this).data("index");
    var c = $.trim($(".pass_input").val());
    hide_popup();
    if (c) gData["passInfo"]["pc_" + b]["pass"] = c;
    var d = 0;
    for (var e = 1; e <= gData.total_pc; e++) if (gData["passInfo"]["pc_" + e]["pass"]) d++;
    if (d == gData.total_pc) {
        adminInputFinished = true;
        gData["adminInputFinished"] = adminInputFinished;
        show_popup("game_start", "", "");
    }
}

function pass_match_handle(a) {
    if (!adminInputFinished) return false;
    a.preventDefault();
    var b = $(this).data("index");
    var c = $.trim($(".pass_match").val());
    hide_popup();
    if (c && gData["passInfo"]["pc_" + b]["pass"] == c) $(".pc_box_" + b).addClass("matched"); else {
        gData["passInfo"]["pc_" + b]["turn"]++;
        var d = $(".pc_box_" + b).find(".circle_container").find("span");
        d.removeClass("selected");
        for (var e = 0; e < 3; e++) d.eq(e).addClass(e < gData["passInfo"]["pc_" + b]["turn"] ? "selected" : "");
        if (gData["passInfo"]["pc_" + b]["turn"] >= 3) {
            $(".pc_box_" + b).find(".pc_monitor_inner").addClass("disabled");
            startTimer(60 * 5, $(".pc_box_" + b).find(".pc_monitor_inner"));
        }
    }
}

function init() {
    gData["total_pc"] = total_pc;
    gData["adminInputFinished"] = adminInputFinished;
    gData["passInfo"] = {};
    for (var a = 1; a <= total_pc; a++) gData["passInfo"]["pc_" + a] = {
        pass: "",
        turn: 0
    };
    create_pc();
}

function get_pc_input() {
    hide_popup();
    var a = parseInt($(".total_pc").val());
    if (a < 1) total_pc = 1; else if (a > 15) total_pc = 15; else total_pc = a;
    init();
}

function save_n_start() {
    hide_popup();
}

$(function() {
    show_popup("pc_input", "Total Pc (1 to 15)", 0);

    $(".total_pc_btn").click(get_pc_input);
    $(".popup_close").click(hide_popup);
    $(".pass_input_btn").click(pass_input_handle);
    $(".pass_match_btn").click(pass_match_handle);
    $(".start").click(save_n_start);
});