var namespace1;
(function (namespace1) {
    namespace1.var1 = "variable";
    function fun_1() {
        return "function";
    }
    namespace1.fun_1 = fun_1;
    ;
    namespace1.obj = {
        key1: "JSON"
    };
    class class_1 {
        constructor() {
            this.var2 = "Class";
        }
    }
    namespace1.class_1 = class_1;
})(namespace1 || (namespace1 = {}));
/// <reference path="file3.ts" />
let obj = {
    var3: "interface"
};
console.log(namespace1.var1, namespace1.fun_1(), namespace1.obj.key1, new namespace1.class_1().var2, obj.var3);
