const person = {
    name:"Alfa",
    sayHello:function(name){
        console.log(`Hello ${this.name} this is ${name}`)
        /**jika tidak menggunakan this maka nama tidak bisa dikenali jika kita memasukkan ke parameter
         * yang terbaca akan tetap alfa
         * ${this.name} kenapa kok outputnya alfa , karena this disini merujuk kepada objek person
         * jadi nama yang ada di objek person bukan di fungsi yang kita deklarasikan di bawah
         * jika digunakan di fungsi maka dia akan terdefinisi sebagai desktop yang kita pakai
         */
    }
}

person.sayHello("Naoki")