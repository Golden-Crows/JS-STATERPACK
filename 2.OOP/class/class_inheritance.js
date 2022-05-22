class Employee{
    sayHello(name){
        console.log(name)
    }
}

class Manager extends Employee{
    
} //karena ini mewarisi employee makan sayhello juga masuk kesini

const alfa = new Manager()
const naoki = new Employee()

alfa.sayHello("Alfa")
naoki.sayHello("Naoki")

