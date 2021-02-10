/// <reference path="file3.ts" />


let obj:namespace1.interface1={ //implementation by JSON
    var3: "interface"
};
console.log(namespace1.var1,
            namespace1.fun_1(),
            namespace1.obj.key1,
            new namespace1.class_1().var2,
            obj.var3)
