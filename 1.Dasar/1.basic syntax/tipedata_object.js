const objek = {} //kalau array menggunakan tanda kurung [] , kalau objek {}

//menambah atau mengubah
objek["nama"]  = "Alfa" //ini jika di array akan terjadi error , array harus menggunakan number
objek["umur"]  = 17
objek["alamat"]="Gurah"


//menghapus
delete objek["alamat"]
console.table(objek)
document.writeln(objek["nama"])
document.writeln(objek["umur"])

//cara lain membuat objek
const bioPacar = {
    nama:"Erin",
    umur:18,
    alamat:"Kediri"
}

//akses dengan cara yang lain
document.writeln(`Halo ${bioPacar.nama}`) //rekomendasi pakai ini
document.writeln("<br/>")


//cara lain
const bioSekolah = {
    "nama sekolah": "SMK TI",
    "Tahun Ajaran":2022,
    "alamat":"Balowerti"
}

//khusus ini harus menggunakan
document.writeln(`Sekolah ${bioSekolah["nama sekolah"]}`)

/**perbedaan array dan objek adalah dengan pemanggilannya
 * kalau array harus menggunakan number untuk pemanggilan 
 * tetapi kalau objek bisa menggunakan string
 */


