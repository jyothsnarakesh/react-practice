interface interface_1{
    var1:any;
};
abstract  class class_one implements interface_1{
    var1:any="Hello_1";
    abstract var2:any;
};
class class_two extends class_one{
    var2:any="Hello_2";
    var3:any="Hello_3";
};
let obj:class_two = new class_two();
console.log(obj.var1,obj.var2,obj.var3);