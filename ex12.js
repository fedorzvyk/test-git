const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== "string") {
        return `Ошибка!`
    } else {
        console.log(str.split("").reverse().join(""))
    return str.split("").reverse().join("")}
    }

reverse(someString)

///////////////////////////////////

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют'
    } else {
        let res = 'Доступные валюты:\n'
        for (let cur of arr) {
            if (cur != missingCurr) {
                res += `${cur}\n`
            }
        }
        console.log(res)
        return res
    }
}

availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')