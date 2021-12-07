const numbersOffilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

const personalMovieDB = {
  count: numbersOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const answerFirst = prompt("Один из последних просмотренных фильмов?", ""),
    answerSecond = prompt("На сколько оцените его?", "");

  if (answerFirst && answerSecond && answerFirst.length < 50) {
    personalMovieDB.movies[answerFirst] = answerSecond;
    console.log("DONE");
  } else {
    console.log("error");
    i--;
  }
}

if(personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  console.log("Вы классически зритель");
} else if (personalMovieDB >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
