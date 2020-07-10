function basic_bars() {
    
    var chart1 = document.getElementById("chart1"); 
    var data = [ [1,10], [2,3], [3,7],  [4,8], [5,9], [6,2] ];
              
    // Draw the graph
    Flotr.draw(
      chart1,
      [data],
      {
        bars : {
          show : true,
          shadowSize : 0,
          barWidth : 0.5
        },
        mouse : {
          track : true,
          relative : true
        },
        yaxis : {
          min : 0
        }
      }
    );
  }
  
  $( window ).load( basic_bars );



  