newFunction();
function newFunction() {
  const generateMovieListItem = movie => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let img = document.createElement("img");
    li.classList.add("list-item");
    a.href = `https://www.imdb.com/title/${movie.imdbID}/`;
    img.src = movie.Poster;
    li.appendChild(a);
    a.appendChild(img);
    return li;
  };
  const addMoviesToDom = moviesToShow => {
    const list = document.getElementById("movie-list");
    list.innerHTML = "";
    const listItems = moviesToShow.map(generateMovieListItem);
    listItems.forEach(listItem => {
      list.appendChild(listItem);
    });
  };
  const minimumYear = 2014;
  const getLatestMovies = movies => {
    const filteredMovies = movies.filter(movie => {
      return movie.Year >= minimumYear;
    });
    return filteredMovies;
  };
  const getMoviesFilteredByTitle = (movies, titlePart) => {
    const filteredMovies = movies.filter(movie => {
      const movieTitle = movie.Title.toLowerCase();
      return movieTitle.includes(titlePart);
    });
    return filteredMovies;
  };
  const filmFilterChangeHandler = event => {
    const movieType = event.target.value;
    let filteredMovies;
    if (movieType === "latest") {
      filteredMovies = getLatestMovies(movies);
    }
    else {
      filteredMovies = getMoviesFilteredByTitle(movies, movieType);
    }
    addMoviesToDom(filteredMovies);
  };
  const addEventListeners = () => {
    const filmFilters = document.getElementsByName("film-filter");
    filmFilters.forEach(filmFilter => {
      filmFilter.addEventListener("change", filmFilterChangeHandler);
    });
  };
  document.addEventListener("DOMContentLoaded", () => {
    addMoviesToDom(movies);
    addEventListeners();
  });
}

