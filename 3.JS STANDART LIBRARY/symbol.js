const firstName = Symbol("firstName")
const lastName = Symbol("lastName")

const person={}
person[firstName] = "Alfa"
person[lastName]  = "Oke"

console.log(firstName)
console.log(person)

console.log("=============================================")

//membuat symbol tanpa variable
const orang = {}
orang[Symbol.for("Nama")] = "Naoki"
orang[Symbol.for("Umur")] = 17

console.log(orang)
console.log(orang[Symbol.for("Nama")])