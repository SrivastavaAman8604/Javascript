/*
const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolve Value!");
    },10000);
})
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolve Value2!");
    },5000);
})
*/
//Async always return a promise.If you return any other value then it will wrap that value in promise and returns promise. 
// async function getData(){
//     // return "Hello async"
//     return promise
// }

// const dataPromise = getData() 
// console.log(data) //Promise {<fulfilled: 'Hello async'>}
// dataPromise.then(res => console.log(res)) 
/*
//Same function as above but data is handle without promise 
function getData(){
// Js engine wall not wait for promise to resolved.It will print hello then after 10sec print Promise is resolved.
    promise.then((res)=> console.log(res));
    console.log("hello")
}
getData() //Promise Resolve Value
*/
/*
//Using async/await . await can only be used inside async function.
async function handlePromise(){
    //It will print Hello then after 10sec.print Hello Javascript then Promise Resolve.  
    console.log("Hello")
    //Js engine wall wait promise to resolved.after that after 10sec print Hello Javascript then Promise Resolve.
    const val1 = await promise
    console.log("Hello Javascript1")
    console.log(val1)
    
    const val2 = await promise
    console.log("Hello Javascript2")
    console.log(val2)
}

handlePromise(); //Promise Resolve Value
*/
/*
async function handlePromise(){
    //It will print Hello then after 10sec.print Hello Javascript then Promise Resolve.  
    console.log("Hello")
    
    //during below reolving promises our call stack will be empty.
    const val1 = await promise
    console.log("Hello Javascript1")
    console.log(val1)
    
    const val2 = await promise2
    console.log("Hello Javascript2")
    console.log(val2)
}

handlePromise();
*/
//Init: call stack empty;
//then: handlePromise() in call stack.
//then: after seeing for await handlePromise() will suspend so that it will not block our page.
//then: after resolving await it will call handlePromise() again but it will start from where it left.it will directly print Hello Javascript1.then it will move next line and check promise2 is resolve or not if promise2 is not resolve it will again suspend the handlePromise().
//then:  after resolving await promise2 it will call handlePromise() again but it will start from where it left.it will directly print Hello Javascript2.

const API_URL = "https://api.github.com/users/SrivastavaAman8604" 
async function handlePromise(){
    try {
        const data = await fetch(API_URL) 
        //fetch() => Response.json() ("json() is also a promise") =>result(value)
        const jsonval = await data.json()
        console.log(jsonval)    
    } catch (error) {
        console.error(error)
    }
    
}
handlePromise().catch(err=>console.log(err)); //code works becose handlepromise() will return promise becoz of async and .catch() for handling error
