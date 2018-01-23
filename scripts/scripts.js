//BUSINESS LOGIC
var myMovie;

// run a loop on the moviesArray to determine if the movie selected in the form is the same as the user movie
function getMovie (userMovie) {
  movieArray.forEach(function(movie){
    if(movie.movieName === userMovie) {
      myMovie = movie;;
    };
  });
};

//constructor function fot ticket
function movieTicket (movieName, timeOfDay, userAge) {
  this.movieName = name;
  this.timeOfDay = time;
  this.userAge = age;
  this.price = 0; // base price is zero and will be amended based on user's age
}

//constructor function for movie name and if it is a new release.
function Movie (movieName, newRelease) {
  this.movieName = movieName;
  this.newRelease = newRelease;
}

//array to store movie objects
var movieArray = [
  new Movie ("The Last Jedi", true),
  new Movie ("Jumanji", true),
  new Movie ("Saw", false),
  new Movie ("Wonder Woman", false),
  new Movie ("Lady Bird", true),
  new Movie ("The Conjuring 3", false)
];

function fillMovieForm() {
  var i = 0; // declare i oustside of loop so it is not declared at 0 repeatedly
  movieArray.forEach(function (movie) {
    $("#movies").append("<option> " + movieArray[i].movieName + "</option>");
    i++;
  });
}

function calculatePrice () {

//  var age = movieTicket.userAge;

  if (movieTicket.userAge > 2 && movieTicket.userAge <= 17) {
    price += 10;
    console.log(movieTicket.userAge);
  } else if (movieTicket.userAge >= 18 && movieTicket.userAge <= 60) {
    price += 14;
    console.log(movieTicket.userAge);
  } else if (movieTicket.userAge >= 61) {
    price += 12;
    console.log(movieTicket.userAge);
  } else {
    alert("Please pick an age.");
  }
}


//USER INTERFACE LOGIC
$(document).ready(function () {

  fillMovieForm();

  $("form#form1").submit(function(event){
    event.preventDefault();

    var movieName = $("#movies").val();
    var timeOfDay = $("#time").val();
    var userAge = $("#age").val();

    console.log(movieName);
    console.log(timeOfDay);
    console.log(userAge);

    var ticket = new movieTicket(movieName, timeOfDay, userAge);


    getMovie(movieName);
    movieTicket(ticket);
    calculatePrice();

  });
});
