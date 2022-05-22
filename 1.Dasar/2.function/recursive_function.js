//contoh tanpa recursive
function factorial(value) {
    let total = 1
    for(let i = 1;i<=value;i++){
        total *= i
    }
    return total
}
console.log(factorial(5))

//anonymous function
let pangkat = function(value){
    let total = 1
    for(let i = 1;i<=value;i++){
        total *= i
    }
    return total
}
console.log(pangkat(5))

//recursive function
function recursive(value) {
    if(value == 1){
        return 1
    }
    else{
        return value*recursive(value - 1)
    }
}
console.log(recursive(6))
