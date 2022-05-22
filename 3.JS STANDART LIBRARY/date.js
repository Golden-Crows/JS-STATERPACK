const tanggal = new Date()
console.log(tanggal)
console.log("========================")

const timestap = Date.now()
console.log(timestap)
console.log("========================")

const tanggal2 = new Date()
console.log(tanggal2.getTime())
console.log("========================")

//parsing date
const time = Date.parse("2020-10-10T08:45:45.123+07:00")
console.log(time)
console.log("========================")

const date = new Date(time)
console.log(date)