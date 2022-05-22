//kasus array
const name = ["Alfa","Naoki","GG","Geming","Ea"]
const[firstName,middleName,lastName,...others] = name

console.log(firstName)
console.log(middleName)
console.log(lastName)
console.log(others)
console.log(others[1])

//kasus object

const person = {
    nama:"Nori",
    pacar:"Naoki",
    alamat:{
        jalan:"Jln Jayabaya",
        kecamatan:"Gurah",
        kabupaten:"Kediri"
    },
    hobi:"Bermain game",
    cita_cita:"programmer"
}

const{nama,pacar,alamat:{jalan,kecamatan,kabupaten},...dll} = person
console.log(nama)
console.log(pacar)
console.log(jalan)
console.log(kecamatan)
console.log(kabupaten)
console.log(dll)

//destructing parameter (1)
function desc1({firstName,lastName}) {
    console.log(`Halo ${firstName} ${lastName}`)
}
const descObject = {
    firstName:"Alfa",
    lastName:"Coeg"
}
desc1(descObject)

//desctructing parameter (2)
function sum([a,b]) {
    return a + b
}

console.log(sum([10,10]))

//kode default value destructing parameter
const list = ["ikan","babi"]
const[menu1,menu2,menu3="praditKNTL"] = list

console.log(menu1)
console.log(menu2)
console.log(menu3)

