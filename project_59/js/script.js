function valid_credit_card(a) {
    if (/[^0-9-\s]+/.test(a)) return false;
    var b = 0, c = 0, d = false;
    a = a.replace(/\D/g, "");
    for (var e = a.length - 1; e >= 0; e--) {
        var f = a.charAt(e), c = parseInt(f, 10);
        if (d) if ((c *= 2) > 9) c -= 9;
        b += c;
        d = !d;
    }
    return b % 10 == 0;
}

function GetCardType(a) {
    var b = new RegExp("^4");
    if (null != a.match(b)) return "visa";
    b = new RegExp("^62");
    if (null != a.match(b)) return "cu";
    b = new RegExp("^5[1-5]");
    if (null != a.match(b)) return "master_card";
    b = new RegExp("^3[47]");
    if (null != a.match(b)) return "amex";
    b = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
    if (null != a.match(b)) return "discover";
    b = new RegExp("^(3[689]|5[45])");
    if (null != a.match(b)) return "dc";
    b = new RegExp("^30[0-5]");
    if (null != a.match(b)) return "dc";
    b = new RegExp("^35[2-88-9]");
    if (null != a.match(b)) return "jcb";
    b = new RegExp("^(4026|417500|4508|4844|491(3|7))");
    if (null != a.match(b)) return "visa";
    return "";
}

function validteDate() {
    var a, b, c, d, e = false;
    var f = parseInt($("#expiration_month").val());
    var g = parseInt($("#expiration_year").val());
    if (!f || f > 12) e = true;
    if (!g) e = true;
    if (g < 100) g += 2e3;
    a = new Date();
    c = a.getFullYear();
    d = a.getMonth();
    if (g < c) e = true;
    if (g == c && f < d + 1) e = true;
    if (e) $(".expiration_date").addClass("error"); else $(".expiration_date").removeClass("error");
}

$(function() {
    $("#card_number").blur(function(a) {
        var b = $.trim($(this).val());
        if (b && valid_credit_card(b)) $(this).closest(".input_row").removeClass("error"); else $(this).closest(".input_row").addClass("error");
        $("form").attr("class", GetCardType(b));
    });
    $("#card_number").keyup(function(a) {
        var b = $(this).val();
        $("form").attr("class", GetCardType(b));
    });
    $("#expiration_month, #expiration_year").blur(validteDate);
    $("#cvv").blur(function() {
        var a = $(this).val();
        if (a == parseInt(a, 10) && 3 == a.length) $(this).closest(".cvv").removeClass("error"); else $(this).closest(".cvv").addClass("error");
    });
    $("form").submit(function() {
        $(this).find("input").blur();
        if ($(this).find(".error").length) return false;
    });
});