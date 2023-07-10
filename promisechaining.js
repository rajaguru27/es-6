

function a(){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
    res("one")
    },3000)
    })
    } 
    
    function b(){
    return new Promise((d,f)=>{
    setTimeout(()=>{
    d("two")
    },4000)
    })
    } 

  function c(){
    return new Promise((e,g)=>{
    setTimeout(()=>{
    e("three")
    },5000)
    })
    } 

a().then((x)=>{
console.log(x);
return b();
})

.then((y)=>{
console.log(y);
return c();
})

.then((z)=>{
console.log(z);
})
.catch((n)=>{
console.log(n);
})
