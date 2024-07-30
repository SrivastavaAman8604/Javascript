function a(){
    var x = 10
    b()
    function b(){
        c()
        function c(){
            console.log(x)
        }
    }
}
a()

//In execution context memory also have refernce to the outer execution content that reference is called  scope chaining. In case of global execution context that reference is null which is the end of scope chaining. 