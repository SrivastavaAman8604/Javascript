var x = 10
function b(){
    var x = 10
}

//'window === this' in browser it will give true means both are equal
console.log(window.x); //10
console.log(this.x); //10
console.log(x) // 10