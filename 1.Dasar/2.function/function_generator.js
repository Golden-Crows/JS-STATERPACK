function* createName() {
    yield "Alfa"
    yield "Naoki"
    yield "GG"
}

const nama = createName()
for (const namaNya of nama) {
    console.log(namaNya)
}

//komplek

function* buatArray(value) {
    for(let i=1;i<value;i++){
        if(i % 2 === 1){
            yield i
        }
    }
}

const array = buatArray(20)
for (const arrays of array) {
    console.log(arrays)
}