/*array loop*/
const array = ["Alfa","Naoki","Njay"]

array.forEach(function(value,index){
    console.log(`${index} : ${value} `)
})

console.log("=================")
//atau cara lain menggunakan arrow function 2 parameter
array.forEach((value,index) => console.log(`${index} : ${value} `)) 

console.log("=================")
//cara lain
array.forEach(value => console.log(`${value}`))

console.log("=================")

/*array queue */
const queue = []
queue.push("Alfa") //menambah data ke array
queue.push("Naoki")

console.log(queue.shift()) //mengambil data array dari index pertama
console.log(queue.shift())
console.log(queue.shift()) //undefinied karena array sdah kosong

console.log("=================")

const stack = []
stack.push("Alfa") //menambah data ke array
stack.push("Naoki")

console.log(stack.pop()) //mengambil data array dari index terkahir
console.log(stack.pop())
console.log(stack.pop()) //undefinied karena array sdah kosong

console.log("=================")

/*array search */
const orangHilang = ["pradit","indra","kurniawan","ilham","kurniawan"]
console.info(orangHilang.find(value => value == "pradit")) //mencari pradit di oranghilang
console.info(orangHilang.findIndex(value => value == "indra")) //mencari index indra
console.info(orangHilang.includes("ilham")) //mengecek apakah ada ilham di orang hilang
console.info(orangHilang.indexOf("ilham")) //engembalikan nilai index ilham 
console.info(orangHilang.lastIndexOf("kurniawan")) //mencari index terakhir dari kurniawan , walaupun kurniawan ada 2

console.log("=================")

/*array filter */
const togel = [1,2,3,4,5,6,7,8,9,10]
console.log(togel.filter(value => value%2 == 1))
console.log(togel.filter(value => value%2 == 0))
console.log("=================")
