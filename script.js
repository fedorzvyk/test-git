/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// let i=0
// while  (i < 2){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
    
//     if (a !== '' && a !== null && b !== '' && b !== null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         i++
//     } else {
//         console.log('error')
//         i--
//     }
// }

// if (numberOfFilms < 10) {
//     console.log('Просмотрено довольно мало фильмов')
// } else if (numberOfFilms > 10 && numberOfFilms < 30) {
//     console.log('Вы классический зритель')
// }  else if (numberOfFilms > 30) {
//     console.log('Вы киноман')
// } else console.log('error')

// console.log(personalMovieDB);

function getMathResult(number, count) {
    let result = '';
    if (count <= 0 || typeof (count) !== "number") {
        console.log(number)
        return number
    } else {
        for (let i = 1; i <= count; i++) {
            result += `${ number * i }`
            if (i !== count) {
                result += '---'
            }              
        }
    }
    console.log(result)
}

getMathResult(3, 10)


const str = 'hello, world';

console.log(str.substring(8, 3))