//we know only declareations,we don't know implementaions
//implementation done by Classes or JSON

interface interface_1{  //Interface Declaration
    var_1:any;
    var_2:any;
    var_3:any;
}
let obj1:interface_1 ={ // implementation using JSON
   var_1:"ReactJS",
    var_2:"Angular11",
    var_3: "VueJS"
};
console.log(obj1.var_1,obj1.var_2,obj1.var_3);

class class_1 implements interface_1{  // implementation using class
    var_1="Class1";
    var_2="class2";
    var_3="class_3";
    getvar_1():any{
        return this.var_1;
    };
};
let obj2:class_1 = new class_1();  //creating object for class_1
console.log(obj2.var_1,obj2.var_2,obj2.var_3);
console.log(obj2.getvar_1());//calling using function