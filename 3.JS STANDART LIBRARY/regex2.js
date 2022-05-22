const nama = "alsu alfa alfo alfi alfe alfu" 
console.log(nama.match(/alf[aiueo]/ig))
console.log("==========================")
console.log(nama.search(/alf[aiueo]/ig))
console.log("==========================")
console.log(nama.replace(/alf[aiueo]/ig,"keren"))
console.log("==========================")
console.log(nama.split(/a/ig))

