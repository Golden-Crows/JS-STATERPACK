function Employee(firstName){
    this.nama = firstName
    this.gaji = {
        junior:1000000,
        senior:4000000
    }
    this.gajiKar = (value) =>{
        if(value >= this.gaji.senior){
            console.log(`Halo ${this.nama} Kamu Senior`)
        }
        else{
            console.log(`Halo ${this.nama} Kamu Junior`)
        }
    }
}

function Boss(firstName,lastName){
    this.lastName = lastName
    Employee.call(this, firstName)

    console.log(`Halo ${firstName} ${this.lastName}`)
}

const alfa = new Employee("Alfa")
alfa.gajiKar(1000000)

const naoki = new Boss("Naoki" , "Gepeng")
