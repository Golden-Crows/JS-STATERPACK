class Person{
    constructor (nama){
        console.log(`Halo ${nama}`)
    }

    sayUmur(umur){
        console.log(umur)
    }
}

const alfa = new Person("Alfa")
alfa.sayUmur(17)