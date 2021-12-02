const numbersOffilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
  count: numbersOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const answerFirst = prompt("Один из последних просмотренных фильмов?", ""),
answerSecond = prompt("На сколько оцените его?", ""),
answerThird = prompt("Один из последних просмотренных фильмов?", ""),
answerFour = prompt("На сколько оцените его?", "");

personalMovieDB.movies[answerFirst] = answerSecond;
personalMovieDB.movies[answerThird] = answerFour;

console.log(personalMovieDB);
