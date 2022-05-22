const person = {
    firstName:"Nori",
    lastName:"Alafa",
    address:{
        city:"Kediri",
        country:"Indonesia"
    },
    hobbi:[
        "coding","game","traveling"
    ]
}

const json = JSON.stringify(person) //menjadikan object person menjadi json dalam bentuk string
console.log(json)

const personAgain = JSON.parse(json) //mengembalikan dari data json ke object
console.log(personAgain)