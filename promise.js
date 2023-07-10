var n=new Promise((a,b)=>{
    a("success");
    b("fail");
    })
    n.then(console.log)
    .catch(console.log)
    
    
    function a(){
     return new Promise ((e,f)=>{
    e("hi")
    })
    }
    a().then(console.log)
    .catch(console.log);

    