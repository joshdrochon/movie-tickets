//BUSINESS LOGIC

//CONSTRUCTOR
function Profile (name, movie, date, age) {
  this.userName = name;
  this.movie = movie;
  this.date = date;
  this.age = age;
}



function ageVerify(){

  if(userProfile.movie==="Saw" && userProfile.age <17){
    $(".sorry").show();
  }else if (userProfile.age >= 50){
    $(".senior").show();
  } else if (userProfile.age >= 18) {
    $(".young-adult").show();
  } else {
    $(".child").show();
  }

};


//USER INTERFACE LOGIC
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();


    var userName = $("#userName").val();
    var movie = $("#movie").val();
    var date = $("#date").val();
    var age = parseInt($("#age").val());

    userProfile = new Profile (userName, movie, date, age);

    console.log(userProfile);

    //console.log(userProfile.userNamename);

    // console.log(userName);
    // console.log(movie);
    // console.log(date);
    // console.log(age);

    $(".name").text(userProfile.userName);
    $(".movie").text(userProfile.movie);
    $(".date").text(userProfile.date);

    $("#summary").show();

    ageVerify();
  });


});
