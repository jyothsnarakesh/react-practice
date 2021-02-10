class class_one{
    sub_one:string;
    sub_two:string;
    sub_three:string;
    
    constructor(){
        this.sub_one="ReactJs";
        this.sub_two="Node";
        this.sub_three="MongoDB";
    };
};

let obj:class_one =new class_one();
console.log(obj.sub_one,obj.sub_two,obj.sub_three);
//**************************************************** */
class class_two{
    constructor(public arg1:string,
        public arg2:string,
        public arg3:string){

        };
};

let obj1:class_two =new class_two("Html","CSS","Bootstrap");
console.log(obj1.arg1,obj1.arg2,obj1.arg3)
//******************************************************** */
class clsss_3{
    sub_one:string;
    sub_two:string;
    constructor(){
        this.sub_one="CO";
        this.sub_two="OS";
    }
    public getSubOne():string{
        return this.sub_one;
    }
    public getSubTwo():string{
        return this.sub_two;
    }
};
let obj3:clsss_3 = new clsss_3();
console.log(obj3.getSubOne(),obj3.getSubTwo())

