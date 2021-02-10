interface interface_1{
    data1:any;
   
};
interface interface_2 extends interface_1{
    data2:any;
   
};
interface interface_3 extends interface_2{
    data3:any;
  
};
// implementation using JSON
let obj1:interface_3={
    data1:"MLI1",
    data2:"MUI2",
    data3:"MUI3"
    
};
console.log(obj1.data1,obj1.data2,obj1.data3);

//implementation by class
class class_1 implements interface_3{
    data1="cls1";
    data2="cls2";
    data3="cls3";
    getdata1():any{
        return this.data1+" Hello1";
    };
    getdata2():any{
        return this.data2+" Hello2";
    }
    getdata3():any{
        return this.data3+" Hello3";
    }
};
let obj2:class_1 = new class_1();
console.log(obj2.getdata1(),obj2.getdata2(),obj2.getdata3())

