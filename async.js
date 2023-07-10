function a(){
    return new Promise ((c,d)=>{
    setTimeout(()=>{
    c("one");
    },3000)
    })
    }
    
    function b(){
    return new Promise ((e,f)=>{
    setTimeout(()=>{
    e("two");
    },4000)
    })
    }
    
    
    async function x(){
    try{
    let g=await a();
    let h=await b();
    console.log(g,h);

    }
    catch{
    console.log("fail");
    }
    }

    x();