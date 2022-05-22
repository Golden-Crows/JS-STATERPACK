function Person(nama , namaakhir){
    this.firstName = nama
    this.lastName  = namaakhir
}

const alfa = new Person("Alfa","Naoki")

console.log(alfa)

Person.prototype.sayBanyak = function(){
    for (let i = 0; i <= 10; i++) {
        console.log(`${this.firstName} ${this.lastName}`)
        
    }
} //ini otomatis menambah data ke fungsi person walaupun kita tidak mendefinisikan

alfa.sayBanyak() //maka kita bisa mengaksesnya