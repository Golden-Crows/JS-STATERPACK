const name = "Nori Alafa Naoki Kigi".split(" ")
console.log(name.map(name=>name.toUpperCase()))

console.log("=============================")
const number = [1,2,3,4,5,6,7,8,9,10]
console.log(number.reduce((value,result)=>value+result)) //menjumlahkan dari index pertama ke index terakhir
console.log(number.reduceRight((value,result)=>value+result)) //menjumlahkan dari index terakhir ke index pertama

console.log("=============================")
const name2 = ["Naoki","Kigi","Alfa"]
console.log(name2.reduce((value,result)=>value+" "+result)) //menjumlahkan dari index pertama ke index terakhir
console.log(name2.reduceRight((value,result)=>value+" "+ result)) //menjumlahkan dari index terakhir ke index pertama


//=================contoh olshop===========
// const keranjangBelanja = []
// for(index barang penjualan){
//     const PilihanUser = keranjangBelanja.push('berdasakaran index barang')
// }

// keranjangBelanja.reduce((value,result) =>value+result)