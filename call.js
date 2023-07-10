var person={
    name:"guru",
    age:22
}
var person1={
    use:function(a,b){
        console.log(this.age);
    }
}

person1.use.apply(person);
