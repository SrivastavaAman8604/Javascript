{
    var a = 10
    let b = 20
    const c = 30
    console.log(a)
    console.log(b)
    console.log(c)
}

console.log(a)
console.log(b)
console.log(c)

//let and const are block scope and var is global scope.
// output:
// inside block: 10, 20, 30, outside block: 10, referenceerror for b and c;

// shadowing
var a=100
{
    var a = 10
    let b = 20
    const c = 30
    console.log(a) //10
    console.log(b) //20
    console.log(c) //30
}

console.log(a) //10

// in above program a shadows and replace value of a from 100 to 10.

let b=100
{
    var a = 10
    let b = 20
    const c = 30
    console.log(a) //10
    console.log(b) //20
    console.log(c) //30
}

console.log(b) //100

// because let is  block scope. b is in script (neither in block nor in global)

const a =10
{
    const a =20
    {
        const a =30
        console.log(a) //30
    }
    console.log(a) // 20
}
console.log(a) // 10
