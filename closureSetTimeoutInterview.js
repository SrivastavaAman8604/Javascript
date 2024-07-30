//Q1

// function x(){
//     var i = 1
//     setTimeout(function(){
//         console.log(i)
//     },1000)
//     console.log('Hello')
// }

// x()

//Output : first it will print Hello then after 1 sec it will print 1

//Q2

// function x(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
// }

// x()

//With var the above code

function x(){
    for(var i=1;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i)
            },i*1000)
        }
        close(i)
    }
}

x()

//Output :  1 after 1 sec , 2 after 2 sec, 3 after 3sec,4 after 4sec and 5 after 5 sec

function outest(){
    var c = 20
    function outer(b){
        function inner(){
            console.log(a,b,c)
        }
        let a = 10
        return inner
    }    
    return outer
}

const close = outest()("Hello World")   // outest()() is equal to outer function and close = outest()() means close represent inner function and that "hello world" is the parameter that we have pass
close()

// Output : 10 "Hello World" 20
//edge case : if we don't have a define, it will give reference error and also if there is a global variable outside outest with same variable name for e.g. let a = 100 then also a in outer will overwrite it and we will get same output

// Closure are use in data hiding and encapsulation example below

// function counter(){
//     var count = 0

//     return function incrementCounter(){
//         count++
//         console.log(count)
//     }
// }

// var counter1 = counter()
// counter1() //1
// counter1() //2
// counter1() //3 and so on...

// //below code will become a new counterand start with one 
// var counter2 = counter()
// counter2() //1

// Constructor function
function Counter(){
    var count = 0

    this.incrementCounter = function (){
        count++
        console.log(count)
    }
    this.decrementCounter = function (){
        count--
        console.log(count)
    }
}

var counter3 = new Counter()
counter3.incrementCounter()
counter3.incrementCounter()
counter3.decrementCounter()