for(let i = 0;i<=30;i++){

    if(i % 2 === 0){
        continue
    }else if(i >= 20){
        break
    }
    document.writeln(`Ganjil ${i}`)
}