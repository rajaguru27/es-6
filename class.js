class Details{

    constructor(name,age,id){
      this.a=name;
      this.b=age;
     this.c=id;
    
    }
    }
    var x=new Details("raja",22,1);
    console.log(x);
    
    
    class Data extends Details{
    constructor(name,age,id,batch){
    super(name,age,id)
    this.d=batch;
    }
    }
    var y=new Data("guru",23,2,7);
    console.log(y);
    