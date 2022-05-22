class Person{
    constructor(firstName,Lastname){
        this.depan = firstName
        this.belakang = Lastname
    }

    get fullName(){
        return `${this.depan} ${this.belakang}`
    }

    set fullName(value){
        const result = value.split(" ")
        this.depan = result[0]
        this.belakang = result[1]
    }
}

const alfa = new Person("nori","alafa")
console.log(alfa)
console.log(alfa.fullName)