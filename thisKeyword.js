"use strict"

console.log(this) // In global space it will have global object

//this keyword value depends on how the function is called.
function x(){
    //values depends on strict and non-strict mode
    console.log(this)
}
x() //it will give undefine in strict mode and in non-strict mode it will give window
window.x() //in strict mode also it will return window

//this keyword inside a object's method

const obj = {
    a:10,
    x: function (){  //x is method of object obj
        console.log(this) //(refers to the whole object obj)
        console.log(this.a) //10(this referes to obj and dot a is inside it)
    }
}

obj.x();


//call, apply, bind methods(sharing method)

const student = {
    name: "Aman",
    printName: function (){  //x is method of object obj
        console.log(this.name) //(refers to the whole object obj)
    },
};

student.printName();

const student2 = {
    name: "Deepika",
};

student.printName.call(student2); //value of this is student2

//this inside arrow function

const obj2 = {
    a: 10,
    x: () => {
        console.log(this)
    },
}

obj2.x() //window object

//this inside nested arrow
const obj3 = {
    a: 10,
    x: function() {
        //below code behave like arrow function is not there and console.log(this) is in x:function(){console.log(this)}.
        //enclosing lexical context
        const y = () => {
            console.log(this)
        }
        y()
    },
}

obj3.x()

//this inside DOM => reference to HTML element


obj3.x()
