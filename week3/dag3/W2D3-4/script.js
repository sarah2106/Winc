const getArr = async function () {
  const data = await getData();
  const list = data.genres;

  // console.log(list);
}

const topRatedMoviesFrom75 = async function () {
  const data = await moviesReleaseYear75();
  const list = data.results.slice(0, 10);

  list.forEach(a => {
      let movieTitles = a.title;
      let ul = document.querySelector("#top-rated-movies-75");
      let li = document.createElement("li");
      let listContent = document.createTextNode(`${movieTitles}`);

      li.appendChild(listContent);
      ul.appendChild(li);
  })
}

const topRatedActionMovieTitles = async function () {
  const data = await actionMovies();
  const results = data.results.slice(0, 10);

  results.forEach(a => {
      let movieTitles = a.title;
      let ul = document.querySelector("#top-rated-action");
      let li = document.createElement("li");
      let listContent = document.createTextNode(`${movieTitles}`);

      li.appendChild(listContent);
      ul.appendChild(li);
  })
}

const topRatedMovieTitles = async function () {
  const data = await topRated();
  const list = data.results.slice(0, 10);

  list.forEach(a => {
      let ul = document.querySelector("#top-rated");
      let li = document.createElement("li");
      let listContent = document.createTextNode(`${a.title}`);

      li.appendChild(listContent);
      ul.appendChild(li);
  })
}

const favMovieOfAllTime = async function () {
  const data = await favMovie();
  const title = data.movie_results[0].title;
  let p = document.querySelector("p");
  p.innerHTML = title;
}

const listOfGenres = async function () {
  const data = await getData();
  const list = data.genres;
  list.forEach(a => {
      let ul = document.querySelector("#genres");
      let li = document.createElement("li");
      let listContent = document.createTextNode(`genre naam: ${a.name}, id: ${a.id}`);


      li.appendChild(listContent);
      ul.appendChild(li);
  })
}



getArr();
listOfGenres();
favMovieOfAllTime();
topRatedMovieTitles();
topRatedActionMovieTitles();
topRatedMoviesFrom75();