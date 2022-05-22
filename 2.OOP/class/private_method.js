class Sapa{
    say(nama){
        if(nama){
            this.#sayName(nama)
        }
        else{
            this.#sayWithoutName()
        }
    }

    #sayName(nama){
        console.log(`hello ${nama}`)
    }

    #sayWithoutName(){
        console.log('Halo')
    }
}

const alfa = new Sapa()
alfa.say()
console.log("====================")
alfa.say("Naoki")
alfa.sayWithoutName()//ini tidak bisa diakses karena private