 class class_one{
     dbfun():any{
         return "MongoDB";
     }
 };
 class class_two extends class_one{
     dbfun():any{
         return "CasandraDB Soon.."
     }
 };
 let obj:class_two = new class_two();
 console.log(obj.dbfun());

 //overloading

 function add(arg1:number,arg2:number):number;
 function add(arg1:string,arg2:string):string;

 function add(arg1:any,arg2:any):any{
    return arg1+arg2;
 };
 console.log(add(10,10));
 console.log(add("Hell0_1","Hello_2"));
 console.log(add("Hello",10));
 console.log(add(10,10,10))
