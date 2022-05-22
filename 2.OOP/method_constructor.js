function Person(nama , namaakhir){
    this.firstName = nama
    this.lastName  = namaakhir
    this.sayHello  = () =>{
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }
}

const alfa = new Person("Alfa","Naoki")
const naoki = new Person("Naoki","Alfa")

console.log(alfa)
console.log(naoki)

alfa.sayHello()