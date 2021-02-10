abstract class class_one{
    getfun1():any{
        return "hello";
    }
    abstract getfun2():any;//abstract method
};
class class_two extends class_one{  //implementation by subclass
    getfun2():any{
        return "Hello_2"
    }
};
//for class_one(abstract class), we can't create object
let obj:class_two =new class_two();
console.log(obj.getfun1(),obj.getfun2());

//multilevel inheritance
abstract class class_1{
    var1:any;
};
abstract class class_2 extends class_1{
    var1:any="ReactJs";
    var2:any;
}
// abstract class class_3 extends class_2{ //we can't create object for abstact class so..
class class_3 extends class_2{
    var2:any="NodeJs";
    var3:any="vueJs";
}
let obj1:class_3 =new class_3();
console.log(obj1.var1,obj1.var2,obj1.var3)