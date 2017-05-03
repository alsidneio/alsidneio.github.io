
$(document).ready(function(){
  $('#html').circleProgress({
      value: .8,
      size: 120,
      startAngle:0,
      lineCap:"square",
      thickness:10,
      fill: {
        gradient: ["red", "orange"]
      }
    });
});
