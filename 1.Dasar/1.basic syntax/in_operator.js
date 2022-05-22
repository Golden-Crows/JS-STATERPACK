const motor = {
    merek:"honda",
    warna:"biru",
    keluaran:1922
}

document.writeln(`merek : ${motor.merek} warna:${motor.warna} tahun:${motor.keluaran}`)
document.writeln("<br/>")
const result = "merek" in motor
document.writeln(`merek ${result}`)

/**
 * in operator hanya mengecek sebuah properti atau index ada atau tidak
 * jadi walaupun nilai properti atau index nya undifined / null maka tetap akan dianggap ada
 */

const contoh = {
    contohnye:undefined
}
const result2 = "contohnye" in motor
document.writeln(`hasil ${result}`) //ini akan menghasilkan nilai true karena ini cuma mengecek datanya ada atau tidak bukan nilai datanya
