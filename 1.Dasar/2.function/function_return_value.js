function tambah(a,b) {
    return a + b
}

console.log(tambah(5 , 8))

function p(b,c){
    const oke = `Woi ${b} elu kek ${c}`
    return oke
}
const result = p("Indra" , "ASU")
console.log(result)

function grade(e) {
    if(e>=90){
        return "A+"
    }else if(e>=80){
        return "A"
    }else if(e>=70){
        return "B"
    }else{
        return "Gagal"
    }
}
const nilai = grade(85)
console.log(nilai)

function isContains(array , searchValue){
    for(const arrays of array){
        if(arrays === searchValue){
            return true
        }
    }
    return false
}
console.log(isContains([1,2,3,4,5,6,7],5)) //mencari 5 dalam array

