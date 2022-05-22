
class Employee{

}

class Manager extends Employee{

}

class Boss{

}


const Alfa = new Boss()
console.log("Apakah Alfa seorang boss")
console.log(Alfa instanceof Boss)
console.log("Apakah Alfa seorang manager")
console.log(Alfa instanceof Manager)

console.log("======================")

const Naoki = new Manager()
console.log("Apakah Naoki seorang boss")
console.log(Naoki instanceof Boss)
console.log("Apakah Naoki seorang manager")
console.log(Naoki instanceof Manager)

console.log("======================")

//instance off di inheritance
const Naoka = new Manager()
console.log("Apakah Naoka mewarisi seorang boss")
console.log(Naoka instanceof Boss)
console.log("Apakah Naoka mewarisi seorang Employee")
console.log(Naoka instanceof Employee)