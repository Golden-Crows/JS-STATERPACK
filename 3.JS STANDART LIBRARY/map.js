const map = new Map()
map.set("Nama","Alfa")
map.set("Address","Gurah")

console.log(map)
console.log(map.get("Nama"))
console.log(map.get("Hobi"))
console.log("====================")

for (const element of map) {
    console.log(element)
}
console.log("====================")

//cara yang dianjurkan untuk menampilkan data map
map.forEach((key,value) => {
    console.log(`${value}: ${key}`)
});