//membuat regex
const regex1 = /alfa/
const regex2 = new RegExp("alfa")
const regex3 = new RegExp(/alfa/)
const nama = "naoki alfa kigi ea ea"

let result = regex1.exec(nama)
console.log(result)

let test = regex1.test(nama)
console.log(test)
console.log("============================")

//regex modifier
const name = "Nori Alafa\nNaoki kigi\nMantap Jiwa"
const regexName = /alafa/g
const regexName2 = /kigi/ig

let result2
while((result2 = regexName.exec(name))!==null){
    console.log(result2)
    console.log("========================")
}

while((result2 = regexName2.exec(name))!==null){
    console.log(result2)
    console.log("========================")
}


const al = /alf[aiueo]/ig
const namaAl = "alfa alfo alfi alfe alfu" 
let result3
while((result3 = al.exec(namaAl))!==null){
    console.log(result3)
    console.log("========================")
}
