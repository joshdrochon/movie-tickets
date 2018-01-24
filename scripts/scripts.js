//BUSINESS LOGIC
var myMovie;

// run a loop on the moviesArray to determine if the movie selected in the form is the same as the user movie
function getMovie(userMovie){
  movies.forEach(function(movie){
    if(movie.movieName === userMovie){
      myMovie = movie;
    };
  });
};

//constructor function for ticket
function movieTicket(name, time, age){
  this.movieName = name;
  this.timeOfDay = time;
  this.userAge = age;
  this.price = 0; // base price is zero and will be amended based on user's age
}

//constructor function for movie name and if it is a new release.
function Movie (movieName, newRelease){
  this.movieName = movieName;
  this.newRelease = newRelease;
}

//array to store movie objects
var movies = [
  new Movie("The Last Jedi", true),
  new Movie("Jumanji", true),
  new Movie("Saw", false),
  new Movie("Wonder Woman", false),
  new Movie("Lady Bird", true),
  new Movie("The Conjuring 3", false)
];

function fillMovieForm(){
  var i = 0; // declare i oustside of loop so it is not declared at 0 repeatedly
  movies.forEach(function(movie){
    $("#movies").append("<option> " + movies[i].movieName + "</option>");
    i++;
  });
}

function calculatePrice(ticket){


  var age = ticket.userAge;

  if(age === "child"){
    ticket.price += 10;
  }else if (age === "young-adult"){
    ticket.price += 14;
  }else if (age === "senior"){
    ticket.price += 12;
  }else{
    alert("Please pick an age.");
  }
}


//USER INTERFACE LOGIC
$(document).ready(function(){

  fillMovieForm();

  $("form#form1").submit(function(event){
    event.preventDefault();

    var movieName = $("#movies").val(); //grabs user selection and sets to var ln70-72
    var timeOfDay = $("#time").val();
    var userAge = $("#age").val();

    console.log(movieName);
    console.log(timeOfDay);
    console.log(userAge);

    var ticket = new movieTicket(movieName, timeOfDay, userAge); //passes in user variable's as arguments ln70-72

    $("#summary").text("Cool, looks like you're all set to see a(n) " + ticket.timeOfDay + " showing of " + ticket.movieName + " which will cost you a grand total of " + ticket.moviePrice + "!");

    getMovie(movieName); //function declared at ln5 but not run until now

    calculatePrice(ticket);//function declared at ln45 but not run until now

  });
});
