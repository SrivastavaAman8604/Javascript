const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("P1 success"), 3000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("P2 fail"), 1000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve("P3 sucess"), 2000)
})

//promise.all give all sucess or give rejected if any one is rejected.
Promise.all([p1,p2,p3]).then(res => {
    console.log(res)
}).catch(error => console.error(error))

//promise.allSettled gives all settled promise i.e. array of all value[].
Promise.allSettled([p1,p2,p3]).then(res => {
    console.log(res)
}).catch(error => console.error(error))

//promise.race gives first settled promise 
Promise.race([p1,p2,p3]).then(res => {
    console.log(res)
}).catch(error => console.error(error))

//promise.any wait for first settled success
Promise.any([p1,p2,p3]).then(res => {
    console.log(res)
}).catch((error) => {
    console.error(error)
    console.log(error.errors) //to see the array of errors.
})