function a(){
    setTimeout( ()=>{
    console.log("a");
    },2000)
    b();
    }
    
    function b(){
    setTimeout( ()=>{
    console.log("b");
    },4000)
    c();
    }
    
    function c(){
    setTimeout( ()=>{
    console.log("c");
    },5000)
    }
    
    a();
    
    function a(){
    setTimeout( ()=>{
    console.log("a");
    b();
    },8000)
    
    }
    
    function b(){
    setTimeout( ()=>{
    console.log("b");
    c();
    },4000)
    
    }
    
    function c(){
    setTimeout( ()=>{
    console.log("c");
    },5000)
    }
    
    a();

    