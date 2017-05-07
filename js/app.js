
$(document).ready(function(){
  function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

$(".year").click(function(){
  $("").toggle();
});

$(" .year p").css("font-weight", "Bold");

});
