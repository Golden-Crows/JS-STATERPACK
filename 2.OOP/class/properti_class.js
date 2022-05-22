class Person{
    constructor (namaAlfa){
        this.nama = namaAlfa
        this.teman = {
            nama_teman:"Banyak",
            umur:"Panjang Umur",
            tinggi:170
        }

        console.log(`Halo ${this.nama}`)

        for (const tmn in this.teman) {
            if (Object.hasOwnProperty.call(this.teman, tmn)) {
                this.teman[tmn]
               console.log(`Nama : ${this.teman.nama_teman} Umur : ${this.teman.umur} Tinggi:${this.teman.tinggi}`)
            }
        }


    }
}

const Alfa = new Person("Alfa")
console.log(Alfa.nama)