class PC_ex{
    my_fun():any{
        return "Hello"
    };
    private constructor(){ };
    //we can't call out side of class

    static db_fun():any{
       return new PC_ex;
    }

}
console.log(PC_ex.db_fun().my_fun());
//we can call static db_fun directly but we can't call my_fun directly,
//PC_ex.db_fun() returning object for PC_ex so indirectly calling  obj.my_fun