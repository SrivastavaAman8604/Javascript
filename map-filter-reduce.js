// Map
const arr = [5,1,3,2,6]

//Double - [10,2,6,4,12]
function double(x){
    return x*2
}

//Triple - [15,3,9,6,18]
function triple(x){
    return x*3
}

//Binary - ["101","1","11","10","110"]
function binary(x){
    return x.toString(2)
}

const outputDouble = arr.map(double);
const outputTriple = arr.map(triple);
const outputBinary = arr.map(binary);

console.log(outputDouble)
console.log(outputTriple)
console.log(outputBinary)


//Filter
const array = [5,1,3,2,6]

//filter odd values
function isOdd(x){
    return x % 2
}
function isEven(x){
    return x % 2 === 0
}
const filterOdd = array.filter(isOdd)
const filterEven = array.filter(isEven)
const filterEvenarrow = array.filter((x)=> x%2===0)

console.log(filterOdd)
console.log(filterEven)
console.log(filterEvenarrow)

//Reduce
const reducearr = [5,1,3,2,6]

//sum or max
const output = reducearr.reduce(function (acc, currentval){
    acc = acc + currentval;
    return acc
}, 0) //reduce take  second value as a initial value of accumulater(acc)

console.log(output)

const max = reducearr.reduce(function (acc,currentval){
    if(currentval>acc) acc=currentval
    return acc
}, 0) //0 is the initaial value
console.log(max)

//Example-2
const users = [
    {firstName: "aman",lastName: "Srivastava" , age: 26},
    {firstName: "Donald",lastName: "trump" , age: 75},
    {firstName: "Suray",lastName: "Kumar" , age: 50},
]

const otput = users.map((x)=> x.firstName + " " + x.lastName)
console.log(otput)
//output : ["aman Srivastava"]

const userage = users.reduce(function(acc,currentval){
    if(acc[currentval.age]){
        acc[currentval.age] = ++acc[currentval.age]
    }else{
        acc[currentval.age] = 1
    } 

    return acc
}, {})
console.log(userage)
//output : {26: 1 , 75: 1, 50: 1}

//first name of people whose age is less than 30
const nameFilter = users.filter((x)=> x.age<30).map((x)=> x.firstName)
console.log(nameFilter) // ['aman']

//Above code using reduce
const namereduce = users.reduce(function(acc,currentval){
    if(currentval.age < 30){
        acc.push(currentval.firstName)
    }
    return acc
}, [])
console.log(namereduce) // ['aman']