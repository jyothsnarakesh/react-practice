interface interface_1{
     data1:any;
};
interface interface_2 extends interface_1{ //single level inheritance
    // let data2:any;
    data2:any;
}
let obj:interface_2={  //Json implementation
    data1:"JASON 1",
    data2:"JASON 2"
};

console.log(obj.data1,obj.data2);

class class_1 implements interface_2{
    data1="class1";
    data2="class2";
}
let obj2:class_1 =new class_1();
console.log(obj2.data1,obj2.data2);
 