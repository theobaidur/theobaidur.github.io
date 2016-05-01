var initial_click = true;
var routeSelected,dateSelected, deliveries = [];


function setSuccessMessage(Message){
    $("#serviceStatus").removeClass("alert-info").removeClass('alert-alert').addClass('alert-success').show().find('span').html(Message);
}

function setErrorMessage(Message){
    $("#serviceStatus").removeClass("alert-info").removeClass('alert-success').addClass('alert-alert').show().find('span').html(Message);   
}

function setStatusMessage(Message){
    $("#serviceStatus").removeClass("alert-alert").removeClass('alert-success').addClass('alert-info').show().find('span').html(Message);   
}

function initDropdowns(){
    var domRoute = $("#route");
    var domDate = $("#date");

    domRoute.html('<option value="-1">Loading..</option>');
    domDate.html('<option value="-1">Loading..</option>');

}

function download(){
    csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Sparklean \n";
    csvContent += "Client Pick-Up/Turn In Log \n";
    csvContent += "Date : "+dateSelected+" route : "+routeSelected+" \n";
    csvContent += "Company, Weight, Bags/Carts, Due Date, Special Instructions, Initials \n";
    
    for(var i=0; i<deliveries.length; i++){
        csvContent += deliveries[i].company +", , ,'"+deliveries[i].date_next_delivery+ "', , \n";
    }

    var a = document.createElement('a');
    a.href = encodeURI(csvContent);
    a.target = '_blank';
    a.download = 'report.csv';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

}

function destroyDropdowns(){
    var domRoute = $("#route");
    var domDate = $("#date");

    domRoute.empty();
    domDate.empty();    
}

function updateView(data){
    setStatusMessage("<strong>OK</strong> Data loaded");
    var routes = data.routes;
    var dates = data.dates;

    var domRoute = $("#route");
    var domDate = $("#date");

    if(!routes.length){
        domRoute.html('<option value="-1">No route found</option>');
    }

    destroyDropdowns();

    if(!dates.length){
        domDate.html('<option value="-1">No date found</option>');
    }

    for(var i=0; i<routes.length; i++){
        var opt = $('<option>').attr('value', routes[i]).html(routes[i]);
        domRoute.append(opt);
    }

    for(var i=0; i<dates.length; i++){
        var opt = $('<option>').attr('value', dates[i]).html(dates[i]);
        domDate.append(opt);
    }

    if(initial_click){
        initial_click = false;
    }else{
        deliveries = data.deliveries;
        $(".report-table-container").show();
        $(".table_row").remove();
        $('.route-name').text(routeSelected);
        $('.date-name').text(dateSelected);
        
        for(var i=0; i<data.deliveries.length; i++){
            var tr = $('<tr>').addClass('table_row');
            var col_1 = $('<td>').text(data.deliveries[i].company);
            var col_3 = $('<td>').text(data.deliveries[i].date_next_delivery);
            
            tr.append(col_1).append($('<td>')).append($('<td>')).append(col_3).append($('<td>')).append($('<td>'));
            $(".report-table").append(tr);
        }
        

        console.log(data);
    }
}


function getData(route, date){
    $.ajax({
        url: 'http://prerelease.gomobileiq.com/clients/sparklean/report.php',
        data: { 'token': 'e63f3beab2e646dbb1e607371cb205c38447cd2b', 'loc_route': route, 'date': date },
        dataType: "json",
        type: 'post',
        beforeSend: function(xhr){
            initDropdowns();
            $("#formRunBtn").addClass('state-loading')
            var message = "<strong>Please wait!</strong> Data is loading";
            setStatusMessage(message);
        },
        success: function(response) {
            $("#formRunBtn").removeClass('state-loading')
            if (response.success) {
                updateView(response);
            } else {
                $("#formRunBtn").removeClass('state-loading')
                var message = "<strong>Sorry!</strong> "+response.message;
                setErrorMessage(message);
            }
        },
        error:function(){
            var message = "<strong>Sorry!</strong> Something went wrong. Try again later.";
            setErrorMessage(message);
        }

    });
}

(function () {

        
    $(".close-alert").on("click",function(e){
        e.preventDefault();
        $(this).closest('.alert').fadeOut(200);
    })

    $("#formRunBtn").on("click", function(e) {
        e.preventDefault();
        

        if($("#formRunBtn").hasClass('state-loading')){
            return;
        }    

        if(initial_click){
            getData('Grand-1','2015-4-13');    
        }else{
            routeSelected = $("#route option:selected").attr('value');
            dateSelected = $("#date option:selected").attr('value');
            getData(routeSelected,dateSelected);
            $(".report-table-container").hide();
        }
            
        

    });

    $("#formRunBtn").click();

    $("#print-report").click(function(e){
        e.preventDefault();
        window.print();
    });

    $("#download-report").click(function(e){
        e.preventDefault();
        download();
    });

    

} ());