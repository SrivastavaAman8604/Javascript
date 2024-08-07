const cart = ["shoes", "pants", "kurta"];

//Callback Hell
api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })
})

//Inversion of control:: We  give the power to function the calls our function,maybe that function will never be called ,or something in their function make our function be called twice.