//for biasa
for (let counter = 1; counter <= 10; counter++) {
    document.writeln(`Counter ke ${counter}`)
    
}


//for in mengambil property object atau index
const object = { 
  nama: "Alfa", 
  pacar: 2, 
  alamat: "gurah" 
}

for (const property in object) {
  document.writeln(`<p>${property}: ${object[property]} </p>`);
}

//for of mengambil nilai value property atau index
const names = ["Alfa","Naoki","GG"]
for(const name of names){
  document.writeln(`${name}`)
}
