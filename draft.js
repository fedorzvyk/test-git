'use strict';

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
// console.log("TEST")
//     }
// };

// for (let option in options) {
//     if (typeof(options[option]) === 'object') {
//         for (let clr in options[option]) {
//             console.log(`${ clr } - ${ options[option][clr] }`);
//         }
//     } else {
//         console.log(`${ option } - ${ options[option] }`)
//     }
// }
// console.log(Object.keys(options))

// options.makeTest()

// const { border, bg } = options.colors;

// console.log(bg)

// const arr = [1, 2, 13, 4, 5, 28, 4]

// arr.sort((a,b)=>b-a)

// console.log(arr)

// let number = 5;

// function logNumber() {
//   console.log(number);
// }
// logNumber();
// number = 6;

///////////////////////////////////////////////

// function createCounter() {
//   let counter = 0;

//   const myFunction = function () {
//     counter += 1;
//     return counter;
//   };
//   return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

/////////////////////////////////////////////

console.log(1 && 2);

alert(null || (2 && 3) || 3 || 4);
