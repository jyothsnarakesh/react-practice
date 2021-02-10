//only we can read can't update
class readonly_ex{
    readonly var1:any;
    constructor(arg1:any){
        this.var1=arg1;
    };
};
console.log(new readonly_ex("Readonly").var1);
//try to update 
new readonly_ex("Readonly").var1="TRying update";
//Cannot assign to 'var1' because it is a read-only property