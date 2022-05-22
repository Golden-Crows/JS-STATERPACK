const person = {}

Reflect.set(person,'firstName','Alfa')
Reflect.set(person,'lastName','Nori')

console.log(person)
console.log("==================")

console.log(Reflect.get(person,'firstName'))
console.log(Reflect.get(person,'lastName'))


console.log("==================")
console.log(Reflect.has(person,'firstName'))
console.log(Reflect.has(person,'middleName'))