$(document).ready(function(){
    var line1 = [['High', 493],['Medium', 720],['Low', 311]];
 
    $('#chart3').jqplot([line1], {
        // Provide a custom seriesColors array to override the default colors.
        seriesColors:['#DA6247', '#F17E3F', '#A0CE4A'],
        seriesDefaults:{
            renderer:$.jqplot.BarRenderer,
            rendererOptions: {
                // Set varyBarColor to tru to use the custom colors on the bars.
                varyBarColor: true
            }
        },
        axes:{
            xaxis:{
                renderer: $.jqplot.CategoryAxisRenderer
            }
        }
    });
});



$(document).ready(function(){
  var line1=[['2008-06-30 8:00AM',4], ['2008-7-30 8:00AM',6.5], ['2008-8-30 8:00AM',5.7], ['2008-9-30 8:00AM',9], ['2008-10-30 8:00AM',8.2]];
  var line2=[['2008-06-30 8:00AM',3], ['2008-7-30 8:00AM',6], ['2008-8-30 8:00AM',5.7], ['2008-9-30 8:00AM',8], ['2008-10-30 8:00AM',8.2]];
  var line3=[['2008-06-30 8:00AM',0], ['2008-7-30 8:00AM',1], ['2008-8-30 8:00AM',7], ['2008-9-30 8:00AM',7], ['2008-10-30 8:00AM',6]];
   var line4=[['2008-06-30 8:00AM',8], ['2008-7-30 8:00AM',3], ['2008-8-30 8:00AM',2], ['2008-9-30 8:00AM',3], ['2008-10-30 8:00AM',3]];
   var line5=[['2008-06-30 8:00AM',2], ['2008-7-30 8:00AM',7], ['2008-8-30 8:00AM',5], ['2008-9-30 8:00AM',6], ['2008-10-30 8:00AM',3]];
  var plot2 = $.jqplot('chart2', [line1,line2,line3,line4,line5] ,{
	  seriesColors:['#D76251', '#ED6347', '#F1875F', '#D8B453' ,'#93C331'],
      gridPadding:{right:35},
      axes:{
        xaxis:{
          renderer:$.jqplot.DateAxisRenderer, 
          tickOptions:{formatString:'%b %#d'},
          min:'May 30, 2008', 
          tickInterval:'1 month'
        }
      },
      series:[{lineWidth:4, markerOptions:{style:'square'}}]
  });
});