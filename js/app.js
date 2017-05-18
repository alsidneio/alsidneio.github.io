
$(document).ready(function(){
  function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

$("#present").click(function(){
  $("#boeing").slideToggle();
});

$("#2012").click(function(){
    $("#ge").slideToggle();
});

$("#2011").click(function(){
  $("#nasa").slideToggle();
});

$("#2013").click(function(){
  $("#zazzle").slideToggle();
});
$("#2014").click(function(){
  $("#pge").slideToggle();
});

$(" .year p").css("font-weight", "Bold");

});
