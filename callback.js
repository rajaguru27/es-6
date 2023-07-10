var rev=0;
var rem;
function reverse(n){
while(n>0){
rem =n%10;
rev=(rev*10)+rem;
n=parseInt(n/10);
}
return rev;
}

function check(x){
y=reverse(x);
if (x==y){
console.log("reverse number");
}
else{
console.log(" not reverse number");
}
}
check(121);
