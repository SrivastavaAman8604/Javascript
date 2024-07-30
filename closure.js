function x(){
    var a = 10
    function y(){
        console.log(a)
    }
    // y()
    return y
}
var z = x()
console.log(z) // return y function whole code
z() // 10

