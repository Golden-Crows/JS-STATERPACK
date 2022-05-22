class MathUtil{
    static sum(...numbers){
        let total = 0
        for (const number of numbers) {
            total += number
        }
        return total
    }
}

const tambah = MathUtil.sum(10,10,10,10,10)
console.log(tambah)