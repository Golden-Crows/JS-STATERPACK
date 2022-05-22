class ValidationError extends Error{
    constructor(message,field){
        super(message)
        this.field = field
    }
}

class MathUtil{
    static sum(...numbers){
        if(numbers.length === 0){
            throw new ValidationError("Parameter harus diisi","paremeter ")
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
    if(error instanceof ValidationError){
        console.error(`oops terjadi error di field ${error.field} dengan error ${error.message}`) //mengatasi error
    }else{
        console.error(`terjadi error ${error.message}`)
    }
}
finally{ //entah error atau tidak block ini tetap akan dieksekusi
    console.log("kode program selesai")
}