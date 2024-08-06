// function x(){ // callback function
//     console.log("Hello")
// }

// function y(){ // high order function
//     x()
// }

const radius = [3,2,1,4]

//Normal Code for area and circumference
const calculateArea = function(radius){
    const output = []
    for(let i=0; i<radius.length ;i++){
        output.push(Math.PI * radius[i] * radius[i])
    }
    return output
}
const calculateCircumference = function(radius){
    const output = []
    for(let i=0; i<radius.length ;i++){
        output.push(2 * Math.PI * radius[i])
    }
    return output
}

//High Order function : in below code we have extracted the logic part 
const area = function (radius){
    return Math.PI * radius * radius
}

const circumference = function(radius){
    return 2 * Math.PI * radius
}

const calculate = function(radius, logic){
    const output = []
    for(let i=0; i<radius.length ;i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius, area))
console.log(calculate(radius, circumference))