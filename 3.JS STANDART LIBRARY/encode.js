//encode uri dan decode uri
const url = "https://contoh.com/?name=alfa naoki"

const encode = encodeURI(url)
console.log(encode)

const decode = decodeURI(url)
console.log(decode)

console.log("==========================================")

//cara lain yang lebih dianjurkan
const value = "alfa&naoki;kigi"
const url2  = "https://contoh.com/?name="

const encode2 = encodeURIComponent(value)
console.log(url2 + encode2)

const decode2 = decodeURIComponent(value)
console.log(url2 + decode2)