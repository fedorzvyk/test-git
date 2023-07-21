// function fib(n) {
//     if (n <= 0 || typeof (n) !== "number" || !Number.isInteger(n)) {
//         return ''
//     } if (n === 1) {
//         return '0'
//     } else if (n === 2) {
//         return '0 1'
//     } else {
//         let a = 1;
//         let b = 1
//         let res = '0 1 1'
//         for (let i = 3; i < n; i++) {
//             let c = a + b;
//             res += ` ${c}`
//             a = b;
//             b = c 
//         }
//         console.log(res)
//         return res
//     }
// }


// fib(1.5)
// fib(4) => ''0 1 1 2"



function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }
console.log(result)
    return result;
}

fib(3)