
function check(a){
    return new Promise((resolve, reject) => {
        if(a%2==0){
            resolve(a);
        }
        else{
            reject(a);
        }
    })
}
check(2).then((s)=>{
    console.log(`${s}is even`)
}
    
)
.catch((s)=>{
    console.log(`${s}is odd`)
}
);