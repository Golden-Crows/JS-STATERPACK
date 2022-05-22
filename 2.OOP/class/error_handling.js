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

try{
    const tambah2 = MathUtil.sum()
    console.log(tambah2)
    console.log("Alfa") //ini tidak akan dieksekusi karena di atas error  
}
catch(error){
    console.error("oops terjadi error di fungsi penambahan") //mengatasi error
}
finally{ //entah error atau tidak block ini tetap akan dieksekusi
    console.log("kode program selesai")
}

console.log("Naoki") //ini tetap akan dieksekusi walaupun fungsi diatas error karena ini diluar error handling try

//atau kita ingin menggunakan try dan finally saja
class Counter{
    #counter = 0

    next(){
        try{
            return this.#counter
        }finally{
            this.#counter++
        }
    }
}


