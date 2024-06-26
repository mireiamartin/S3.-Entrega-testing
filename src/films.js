// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(item => item.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesDirector = array.filter(film => film.director === director);
  
  let suma = moviesDirector.reduce((acc, movie) => acc + movie.score, 0);
  let mitjana = suma / moviesDirector.length;
  
  return parseFloat(mitjana.toFixed(2));
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
  let result = array.map(film => film.title).sort().map((film, index) => {
    if (index < 20){
      return film
    }
  });

  return result;
}


// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const moviesCopy = [...movies];

  moviesCopy.sort((film1, film2) => {
    if (film1.year === film2.year) {
      return film1.title.localeCompare(film2.title);
    } else {
      return film1.year - film2.year;
    }
  });
  return moviesCopy;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
