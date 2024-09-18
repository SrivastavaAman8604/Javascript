//In case of Array
//Rest Operator (Combining element)
function addNumber(x,y,z,...other){
    console.log(other)//ES6 it will print only those numbers that is not define above  
    // console.log(arguments)//ES5 it will all the number suring the function call
    return x+y+z
}

const add= addNumber(2,5,6,5,6,7,8)
console.log(add)

//Spread Operator (Expanding element)
var names = ["Aman","Ankit","Ajay"];

function getName(name1,name2,name3){
    console.log(name1,name2,name3)
}

getName(...names) //spread operator way
getName(names) //calling array directly
getName(names[0],names[1],names[2]) //native way to call arrray element

//In case of Object
//Rest
var students = {
    name: "Aman",
    age: "26",
    hobbies: ["Games","Music"],
}

// const age = students.age
const {...rest} = students
console.log(rest)

//Spread 
var newStudent = {
    ...students,
    age: "27"
}

console.log(newStudent) //age will become 27
