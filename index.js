const addsToTen = (a, b) => {
    if(a === undefined && b ===undefined){
        return false
    } else {
        return a + b === 10 ? true : false
    }

}


const vowelCount = (str) => {
 if(str === ""){
    return "Empty string passed, no vowels present"
 } else {
    let vowels = ['a','e','i','o','u']
    let letters = str.split("")
    let count = letters.filter(letter =>  vowels.includes(letter.toLowerCase())).length
    return count
 }
}

vowelCount("Victoria Coach Station")

module.exports = {
    addsToTen, 
    vowelCount
}