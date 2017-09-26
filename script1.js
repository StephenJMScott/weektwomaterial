$(document).ready(function() {

$("button").mouseenter(function() {
  $("button").removeClass("makeRed").addClass("makeBorder");

}); 

$("button").mouseleave(function(){
  $("button").removeClass("makeBorder").addClass("makeRed");
});

$("#button1").click( function(){
 $("#para1").slideToggle('1000');
});

$("#button2").click( function(){
 $("#para2").typewrite('1000');
});


});