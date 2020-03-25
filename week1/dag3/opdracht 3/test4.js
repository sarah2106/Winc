const myFavMovie = {
    title: '1917',
    duration: 220,
    actors: ['Dean-Charles Chapman', 'George MacKay', ]
};

function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    const starsString = 'actors: ';
    for (const i = 0; i < movie.actors.length; i++) {
        starsString += movie.actors[i];
        if (i != movie.actors.length -1) {
            actorsString += ', ';
        }
    }
    console.log(actorsString);
}

/ Or...
function printMovie(movie) {
    console.log(movie.title + ' lasts for ' + movie.duration + ' minutes');
    console.log('It actors ' + movie.actors.join(', '));
}
printMovie(myFavMovie);