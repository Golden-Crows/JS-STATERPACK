//rest atau vararg di kotlin 
//rest cuma boleh ada 1 di function dan harus di posisi akhir

function sum(name,...angka) {
    let total = 0
    for(const item of angka){
        total += item
    }
    console.log(`Total ${name} yaitu ${total}`)
}

sum("Naoki",2,3,4,5,55,66,55)

//mengirim data array menggunakan syntax spread
const value = [8,55,3,12,99,65]
sum("Alfa",...value)

sum("Siap",...[7,3,22,777,88])