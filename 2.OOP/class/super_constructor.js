class Person{
    constructor (firstName){
       this.name = firstName
    }

    sayHello(say){
        console.log(`Hello ${say} my name is ${this.name}`)
    }
}

class Bocil extends Person{
    constructor(firstName,lastName){
        super(firstName)
        this.lastName = lastName
    }
    sayHello(say){
        console.log(`Hello ${say} my name is ${this.name} ${this.lastName}`)  
    }
}

const Alfa = new Person("Alfa")
Alfa.sayHello("Naoki")

const BocilEpEp = new Bocil("BocilEpEp" , "Goblok") //walaupun kita tidak menambahkan constructor , dia akan tertambah sendiri
BocilEpEp.sayHello("Mamang")