//getter
const person = {
    firstName:"Alfa",
    lastName:"Primana",
    get fullName(){ //menggunakan fungsi biasa juga bisa tetapi nanti keluaran juga fungsi bukan properti
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const array = value.split(" ")
        this.firstName = array[0]
        this.lastName = array[1]
    } //mengubah nilai
}

person.fullName = "Nori Alfa"

console.table(person)

person.fullName = "Naoki Kigi"

console.table(person)

console.info(person.fullName)

