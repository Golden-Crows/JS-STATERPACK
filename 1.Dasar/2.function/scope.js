function global() { //global scope
    siap() //bisa karena global
    ea() //tidak bisa karena ini local scopenya siap
}

function siap(){ //global scope
    global()
    const bopo = "ea" 

    function ea(){ //local
        console.log(bopo) //bisa diakses karena di local yg sama , tapi contoh yg bawah kok gk bisa?
        //karena siap merupakan induknya , jika kasus localea maka induknya adalah ea siap adalah mbahnya
        //jadi tidak bisa , yang bisa diakses cuma induk dan anak , sesepuh nyimak saja
        const localea = "ini local nya ea"

    }

    console.log(localea) //maka ini akan error karena itu variable nya ea

    ea()
}