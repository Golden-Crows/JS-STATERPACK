const nama = "Nori&Alafa=kigi"

const encode = btoa(nama)
console.log(encode)

const decode = atob(encode)
console.log(decode)