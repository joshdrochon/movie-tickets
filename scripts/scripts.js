$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var movie = $("#movie").val();
    var date = $("#date").val();
    var age = $("#age").val();

  });
});
