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

function movieTicket (movieName, timeOfDay, userAge) {
  this.movieName = name;
  this.timeOfDay = time;
  this.userAge = age;
  this.price = 0;
}

function Movie (movieName, newRelease) {
  this.movieName = movieName;
  this.newRelease = newRelease;
}

var movieArray = [
  new Movie ("The Last Jedi", true),
  new Movie ("Jumanji", true),
  new Movie ("Saw", false),
  new Movie ("Wonder Woman", false),
  new Movie ("Lady Bird", true)
];

function fillMovieForm() {
  moviesArray.forEach(function (movie) {
    $("#movies").append("<option> " + movieArray[i].movieName + "</option>");
    i++;
  });
}



//USER INTERFACE LOGIC
