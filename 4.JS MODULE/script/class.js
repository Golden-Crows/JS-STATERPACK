export default class Person {
    constructor(name){
        this.name = name
    }

    sayNama(name){
        console.log(`Hello ${name} my name is:${this.name}`)
    }
}