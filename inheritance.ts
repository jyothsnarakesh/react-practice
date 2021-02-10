class class_one{
    var:any ="Parent Class";
};
class class_two extends class_one{
    var2:any = "Child Class"
};
let obj1:class_one = new class_one();
console.log(obj1.var);//Parent Class

let obj2:class_two = new class_two();
console.log(obj2.var,obj2.var2); //Parent Class Child Class

//accessing constructor argument using inheritance

class class_three{
    constructor( public var1:any){ //if var1 is not public we can't access var1 while creating class object

    };
};
class class_four extends class_three{

};
let obj3:class_four =new class_four("Hello");
console.log(obj3.var1)


/********************************************* */

class class_1{
    arg1:any;
    constructor(param1:any){
        this.arg1=param1;
    }
    getArg1():any{
        return this.arg1;  //Hello_2
    }
};
class class_2 extends class_1{
    arg2:any; //if u take arg1 here overridding will happen
constructor(param1:any,param2:any){
    super(param2);//passing param2 to parent class 
this.arg2=param1;  //Hello_1
}
getArg2():any{
    return this.arg2;
};
};

let obj5:class_2 = new class_2("Hello_1","Hello_2");
console.log(obj5.getArg1(),obj5.getArg2());  //Hello_2 Hello_1 
