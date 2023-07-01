const numberOfFilms = +prompt('how many films did you watch?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const filmName = prompt('Один из последних просмотренных фильмов?');
const filmRate = prompt('На сколько оцените его?');
const filmName2 = prompt('Один из последних просмотренных фильмов?');
const filmRate2 = prompt('На сколько оцените его?');

personalMovieDB.movies[filmName] = filmRate;
personalMovieDB.movies[filmName2] = filmRate2;

console.log(personalMovieDB)