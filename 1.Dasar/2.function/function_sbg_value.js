function sayHello(nama) {
    return console.log(`halo ${nama}`)
}
//pemanggilan biasa
sayHello("budi normal")

let nama = sayHello;
nama("budi sbg value")

//fitur gg mengirim function ke function parameter
function sedia(callback) {
    callback("budi abnormal") //sayHello budi abnormal
}

sedia(nama);