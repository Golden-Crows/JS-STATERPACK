const target = {}

//membuat handler
const handler = {
    get: function(target,properti){
        return target[properti]
    },

    set:function(target,properti,value){
        if(value == null){
            //throw new Error("Nama harus diisi")
            target[properti] = "Doe"
        }else{
            target[properti] = value
        }
    }
}

const proxy = new Proxy(target,handler)
proxy.firstName = "Nori"
proxy.lastName = "Alafa"
console.log(proxy.firstName)
console.log(proxy.lastName)

console.log(target)