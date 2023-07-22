const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        console.log('Семья пуста')
        return 'Семья пуста'
    } else {
        console.log(`Семья состоит из: ${ arr.join(" ")}`)
        return `Семья состоит из: ${ arr.join(" ")}`
    }
   
}

showFamily(family)

////////////////////////////////////////////

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    console.log(arr.join('\n').toLowerCase())
    return arr.join('\n').toLowerCase()
    
}

standardizeStrings(favoriteCities)