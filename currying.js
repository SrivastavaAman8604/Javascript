//Currying is perform using 2 methods bind and closure
//1.Bind
let multiply = function(x,y){
    console.log(x * y)
}

// let multiplyByTwo = multiply.bind(this, 2) //x is 2 
// multiplyByTwo(5) //we are  giving value of y as 5

let multiplyByTwo = multiply.bind(this, 2,3) //2 is x ,3 is y it will ignore 5 which is given below
multiplyByTwo(5) //we are  giving value of y as 5

// 2.closure
let multiplyClosure = function(x) {
    return function(y) {
        console.log(x * y);
    }
}

let multiplyByTwoClosure = multiplyClosure(2);
multiplyByTwoClosure(5); // Output: 10

let multiplyByThreeClosure = multiplyClosure(3);
multiplyByThreeClosure(5); // Output: 15

