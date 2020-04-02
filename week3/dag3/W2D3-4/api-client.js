const API_KEY = "ecaffbd093d806821ff5535defab1843";

const getData = async function () {
    const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    const res = await fetch(apiURL, { method: "GET" });
    const data = await res.json();
    return data;
}

const favMovie = async function () {
    const apiURL = `https://api.themoviedb.org/3/find/tt0277027?api_key=${API_KEY}&external_source=imdb_id`;
    const res = await fetch(apiURL, { method: "GET" });
    const data = await res.json();
    return data;
}

const topRated = async function () {
    const apiURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`;
    const res = await fetch(apiURL, { method: "GET" });
    const data = await res.json();
    return data;
}

const actionMovies = async function () {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&with_genres=28&page=1`;
    const res = await fetch(apiURL, { method: "GET" });
    const data = await res.json();
    return data;
}

const moviesReleaseYear75 = async function () {
    const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&primary_release_year=1975&page=1`;
    const res = await fetch(apiURL, { method: "GET" });
    const data = await res.json();
    return data;
}