const sayHello = (name) => {
    const say = `Hello ${name}`
    console.log(say)
}

for(let i=1;i<=5;i++){
    sayHello([i])
}

const orang = {
    nama:"Naoki",
    vital:"cEWEk"
}

const oke = function(test = " "){
    for (const naoki in orang) {
        console.log(`${test} Bio ${orang[naoki]} `)
    }
}

//jika isinya sederhana cuma satu baris hilangkan block
const info = (info , ...data) =>console.log(`Infone mazzeh ${info} ${data}`)

info("Lagi ngopi" , oke())

//jika parameter satu dan nilainya tidak default
const ngopi = ngopi => console.log(ngopi)
ngopi("dancow")

//memasukkan arrow function ke parameter
function pret(value) {
    value("Alfa")
}

pret((value)=>console.log(`hello ${value}`))