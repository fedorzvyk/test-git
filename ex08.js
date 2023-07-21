function getTimeFromMinutes(m) {
   if (m < 0 || typeof (m) !== "number" || !Number.isInteger(m)) {
        console.log("Ошибка, проверьте данные")
        return "Ошибка, проверьте данные"
   } else {
       const hour = Math.floor(m / 60)
    //    console.log(hour);
       const min = m - hour * 60
    //    console.log(min)
       if (hour === 0 || (hour >= 5 && hour <= 10)) {
           console.log(`Это ${ hour } часов и ${ min } минут`)
           return `Это ${hour} часов и ${min} минут`
       } else if ( hour ===1){
           console.log(`Это ${ hour } час и ${ min } минут`)
           return `Это ${hour} час и ${min} минут`
       } else if ( hour >=2 && hour<=4){
           console.log(`Это ${ hour } часа и ${ min } минут`)
           return `Это ${hour} часа и ${min} минут`
       }
    }
}

getTimeFromMinutes(153)


function findMaxNumber(a, b, c, d) {
    if (typeof (a) === "number" && typeof (b) === "number" && typeof (c) === "number" && typeof (d) === "number") {
        return Math.max(a,b,c,d)
    } else return 0

}

findMaxNumber(1, 5, 6.6, 10.5);