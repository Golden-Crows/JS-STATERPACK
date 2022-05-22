class PrivateField{
    #balance = 0

    increment(){
        this.#balance++
    }

    decrement(){
        this.#balance--
    }

    get(){
        return this.#balance
    }
}

const angka = new PrivateField()
angka.increment()
angka.increment()
angka.decrement()
angka.balance = 100 //ini tidak bisa karena balance disini sifatnya private
console.log(angka.get())
console.log(angka)