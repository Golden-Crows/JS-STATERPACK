//object yang memiliki fungsi di datanya
const pacarAlfa = name => console.log(name)
const person = {
    name:"Alfa",
    sayHello:function(name){
        console.log(name)
    },
    pacar:pacarAlfa("Naoki")
}


person.sayHello("Nande")
person.pacarAlfa