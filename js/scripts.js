


$(document).ready(function(){
  $("#personal-info").submit(function(event){
  var inputName = $("input#name").val();
  $(".inputName").text(inputName);

  var favfood = $("#favfood").val();
  $(".favfood").text(favfood);
  var music = $("input:radio[name=music]:checked").val();
  $(".music").text(music);
  var dob = $("#born").val();
  $(".dob").text(dob);


  event.preventDefault();
});




});
