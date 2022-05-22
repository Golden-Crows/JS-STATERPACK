const set = new Set()

set.add("Alfa")
set.add("Alfa")
set.add("Kurniawan")
set.add("Ilham")

console.log(set) //ini akan mendapat nilai 3 , karena set menghapus data duplikasi

set.forEach(value => {
    console.log(`${value}`)
});