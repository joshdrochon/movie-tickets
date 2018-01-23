//BUSINESS LOGIC
//CONSTRUCTOR

function Profile (name, movie, date, age) {
  this.userName = name;
  this.movie = movie;
  this.date = date;
  this.age = age;
}

function ageVer(){
  if (age < 17){
    $(".sorry").show();
  }
}


//USER INTERFACE LOGIC
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();


    var userName = $("#userName").val();
    var movie = $("#movie").val();
    var date = $("#date").val();
    var age = parseInt($("#age").val());

    var userProfile = new Profile (userName, movie, date, age);

    console.log(userProfile);

    //console.log(userProfile.userNamename);

    // console.log(userName);
    // console.log(movie);
    // console.log(date);
    // console.log(age);

    $(".name").text(userProfile.userName);
    $(".movie").text(userProfile.movie);
    $(".date").text(userProfile.date);

    $("#initially-hidden").show();
  });
});
