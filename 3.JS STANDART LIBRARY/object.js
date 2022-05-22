const person = {
    nama:"Alfa",
    alamat:"Kediri"
}

//freeze ini memiliki fungsi object tidak bisa diubah dalam hal semuanya
Object.freeze(person)
person.nama="angga" // ini tidak bisa karena sudah di freeze
delete person.alamat // ini juga tidak bisa karena sudah di freeze
console.log(person)

const person2 = {
    nama:"Naoki",
    alamat:"Kediri"
}

//seal ini memiliki fungsi object hanya bisa diubah , contoh tidak bisa dihapus atau ditambah
Object.seal(person2)
person2.alamat = "isekai" 
person2.namaLain = "OP"
delete person2.nama
console.log(person2)


//==============OBJECT ASSIGN==============
const target={firstName:"Alfa"}
const source={
    lastName:"Naoki",
    umur:18,
    cita_cita:"Programmer"
}

Object.assign(target,source) //menambahkan source ke target
console.log(target)


//object properti dan name
console.log(Object.getOwnPropertyNames(target))
console.log(Object.values(target))