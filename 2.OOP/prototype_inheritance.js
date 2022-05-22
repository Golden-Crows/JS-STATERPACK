function Employee(nama) {
    this.nama = nama
}

function Manager(nama){
    this.nama = nama
}

Manager.prototype = Object.create(Employee.prototype)


Manager.prototype.sayHello = function (name) {
    console.log(`Hello ${name} , my name is manager ${this.nama}`)
}

Employee.prototype.sayHello = function(name) {
    console.log(`Hello ${name} , my name is employee ${this.nama}`)
}

const alfa = new Manager("alfa")
const budi = new Employee("budi")

alfa.sayHello("budi")