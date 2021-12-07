let numbersOffilms;

function start() {
  while (!numbersOffilms || isNaN(numbersOffilms)) {
    numbersOffilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
  }
}
start();

const personalMovieDB = {
  count: numbersOffilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Вы классически зритель");
  } else if (personalMovieDB >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function wtiteYourGenres() {
  for (let i=1; i <= 3; i++) { // начинаем с 1 для пользователя (что б не выдавало пользователю `Ваш любимый жанр под номером ${0}?`) 
    let genre = prompt(`Ваш любимый жанр под номером ${i}?`);
    personalMovieDB.genres[i-1] = genre; //[i-1]  см. комментарий выше. Записать данные в массив необходимо с значения "0"
    // personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}?`);
    // тогда переменную let genre можно удалить.
  }
}

wtiteYourGenres();

console.log(personalMovieDB);
