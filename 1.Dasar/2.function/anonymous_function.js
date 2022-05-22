//anonymous function pada varible
const say = function(name){
    console.log(`halo ${name}`)
}

say("budi")

function  giveMeName(callback) {
    callback("eko genderuwo")
}

giveMeName(say)
//anonymous function pada paremeter
giveMeName(function(name){
  console.log(`hi ${name}`)
})


