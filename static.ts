class class_one{
    static var1:string="Hello"
static getfun():string{
        return this.var1;
    }
};
console.log(class_one.var1, class_one.getfun());

//try to create object for static variable and intitialize in constructor level

class class_two{
    static var2:string;
    constructor(){
        this.var2="Assingn Dynamically"
        //Property 'var2' is a static member of type 'class_two'.
    }
}
new class_two().var2
//Property 'var2' does not exist on type 'class_two'