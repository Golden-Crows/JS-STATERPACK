/*
    referensi
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 
*/
const input = "12345"
const number = Number(input)

console.log(typeof input)
console.log(typeof number)
console.log(number)

console.log("=====================")

//static properti number
console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

console.log("=====================")

//static method number
console.log(Number.isInteger(number))
console.log(Number.isNaN(number))

console.log("=====================")

//number instance method
const value = Number(12345)
console.log(value.toString(2))
console.log(value.toLocaleString("id-ID")) //format indo
console.log(value.toLocaleString("en-US")) //format amerika