var categories = null;
var questions = null;
var currentSlide = 0;
var totalPt = 0;
var qString = '';

function updateResult(){
	var avg_1 = categories[1].points/categories[1].total_question;
	var avg_2 = categories[2].points/categories[2].total_question;
	var avg_3 = categories[3].points/categories[3].total_question;
	var avg_4 = categories[4].points/categories[4].total_question;
	
	
    var crtv_avg = Math.round(avg_1*100)/100;
    var strs_avg = Math.round(avg_2*100)/100;
    var dif_avg = Math.round(avg_3*100)/100;
    var flex_avg = Math.round(avg_4*100)/100;
    totalPt = Math.round((crtv_avg+strs_avg+dif_avg+flex_avg)*100)/100;

    $("#str_avg").text(strs_avg+"/10");
    $("#crtv_avg").text(crtv_avg+"/10");
    $("#flex_avg").text(flex_avg+"/10");
    $("#diff_avg").text(dif_avg+"/10");

    $("#total").text("Total : "+totalPt);
    
    qString = "avg_1="+avg_1+"&avg_2="+avg_2+"&avg_3="+avg_3+"&avg_4="+avg_4;
}

function fetchSummery(){
    $.ajax({
        url:"http://static.dream2development.com/project_49/php/app.php?action=fetch",
        method:"POST",
        data:qString+"&total="+totalPt,
        success:function(data){
            var ret = $.parseJSON(data);
            $(".showAfterLoad").show();
            $(".loadingText").hide();
            $(".rankText").text(ret['rank']);
            $("#job").text(ret['job']);
            $("#defpt").text(Math.round(ret['defeatPt']*100)/100);

        }
    });
}

function addCat(){
    $(this).siblings(".btn").addClass("btn-default").removeClass("btn-primary");
    $(this).addClass("btn-primary").removeClass("btn-default");
    
    var cat = $(this).data('cat');
    var pt = $(this).data('point');

    categories[cat].points += pt;
    categories[cat].total_question++; 

    $(".carousel").carousel('next');
    updateResult();
    currentSlide = $('.item.active').index() + 1;
    if((currentSlide+1)==$(".item").length){
        fetchSummery();
    }
}

function buildSlide(){
    var n = questions.length;
    var container = $(".carousel-inner");
    for(i=0; i<n; i++){
        var cat = questions[i].category_id;
        var tab = $("<div>").addClass("item item-question");
        var panel = $("<div>").addClass("panel panel-primary");
        var ph = $("<div>").addClass("panel-heading").html("<h4>"+(i+1)+". "+questions[i].question);
        var pb = $("<div>").addClass("panel-body");
        var options = questions[i].options;
            for(j=0; j<options.length; j++){
                var opt = $("<a>")
                            .addClass("btn btn-default btn-sm btn-block textLeft")
                            .attr("data-cat",cat)
                            .attr("data-point", options[j].point)
                            .text((j+1)+" ."+options[j].option)    
                            .click(addCat);
                   pb.append(opt);         
            }
         panel.append(ph);
         panel.append(pb);
         tab.append(panel);

         container.append(tab).append($(".result-item"));
         
    }

     $("#starBtn").addClass('active').text("Start Game");
    
}


function init(){
	
	$("#starBtn").removeClass('active').text("Loading...");
		
     categories = null;
     questions = null;
     currentSlide = 0;
     totalPt = 0;
     $(".item-question").remove();

     $(".item").removeClass("active").eq(0).addClass("active");
     $.ajax({
        url:"http://static.dream2development.com/project_49/php/app.php?action=get",
        method:"GET",
        success:function(data){
            var ret = $.parseJSON(data);
            //console.log(ret);
            questions = ret.questions;
            categories = ret.categories;
            buildSlide();
        }
    });


}


$(function(){

    $('.carousel').carousel({
      interval: false,
      wrap:true
    });
    
    init();
    
    $("#starBtn").click(function(){
    	if($(this).hasClass('active')){
    		$(".carousel").carousel('next');
    	}
    });


});