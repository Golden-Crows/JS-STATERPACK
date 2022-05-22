//kode tanpa with
const person = {
    firstName:"Alfa",
    lastName:"Naoki"
}

console.log(person.firstName)
console.log(person.lastName)

//kode dengan with
const person2 = {
    firstName:"Naoki",
    lastName:"Kigi"
}

with(person2){
    console.info(firstName)
    console.info(lastName)
}