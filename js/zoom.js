
var zoom_val = 100;

$( "#zoom_up" ).click(function() {
  zoom_val += 5;
  if(zoom_val >= 150){
  	zoom_val = 150;
  }
  $( "body" ).css("zoom", zoom_val + "%");
});

$( "#zoom_down" ).click(function() {
  zoom_val -= 5;
  if(zoom_val <= 90){
  	zoom_val = 90;
  }
  $( "body" ).css("zoom", zoom_val + "%");
});