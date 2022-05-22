//or operator mengambil nilai truthy
document.writeln("hello" || '')
document.writeln("<br/>")
document.writeln("0" || "NOL")
document.writeln("<br/>")
document.writeln(0 || "NOL")
document.writeln("<br/>")
document.writeln(0 || false)
document.writeln("<br/>")

const person = {
    firstName:"Alfa",
    lastName:"Naoki"
}

const person2 = {
    firstName:"",
    lastName:"Naoki"
}

const nama = person.firstName || person.lastName
const nama2 = person2.firstName || person2.lastName

document.writeln(nama)
document.writeln(nama2)

//and operator mengambil nilai false
document.writeln("ALFA" && '')
document.writeln("ALFA" && 'OKE')
document.writeln(0 && 'OKE')