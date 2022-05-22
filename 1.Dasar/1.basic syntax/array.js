let arrayKosong = []
let arrayNama = ["Alfa","Naoki","Yes",20,"ea",88]


arrayKosong.push("halo")
for (let i = 0; i < arrayNama.length; i++) {
    document.writeln(arrayNama[i])
    
}
document.writeln("<br>")
document.writeln("Panjang Array")
document.writeln(arrayNama.length)

document.writeln("<br>")

document.writeln("index ke 1")
document.writeln(arrayNama[0])

document.writeln("<br>")

document.writeln("index ke 2")
document.writeln(arrayNama[1])

document.writeln("<br>")

arrayNama[2] = "Rabi"
document.writeln("udah dirubah nilainya")
document.writeln("index ke 3")
document.writeln(arrayNama[2])

