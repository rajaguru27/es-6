function a(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
    res("one")
    },3000)
    })
    } 
    
    function b(){
    return new Promise((c,d)=>{
    setTimeout(()=>{
    c("two")
    },4000)
    })
    } 
    
    Promise.all([a(),b()])
    .then(console.log)
    .catch(console.log);