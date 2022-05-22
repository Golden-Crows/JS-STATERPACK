class Shape{
    paint(){
        console.log("paint a shape")
    }
}

class Circle extends Shape{
    paint(){
        super.paint() 
        /*ini memanggil parent method yaitu shape jika kita tidak menggunakan super maka fungsi paint di circle
        dan di shape memiliki fungsi yang berbeda walaupun circle sudah mewarisi*/ 
        console.log("paint a cirlce")
    }
}

const bentuk = new Shape()
bentuk.paint()
console.log("=====================")
const bundar = new Circle()
bundar.paint()