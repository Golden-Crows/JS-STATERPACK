class MathUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            throw new Error("Parameter harus diisi")
        }

        let total = 0
        for (const number of numbers) {
            total += number
        }
        return total
    }
}

const tambah = MathUtil.sum(10,10,10,10,10)
console.log(tambah)

const tambah2 = MathUtil.sum() //maka akan memunculkan pesan error parameter harus diisi
console.log(tambah2)
