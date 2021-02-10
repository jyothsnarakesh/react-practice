//we know only declareations,we don't know implementaions
//implementation done by Classes or JSON
var obj1 = {
    var_1: "ReactJS",
    var_2: "Angular11",
    var_3: "VueJS"
};
console.log(obj1.var_1, obj1.var_2, obj1.var_3);
var class_1 = /** @class */ (function () {
    function class_1() {
        this.var_1 = "Class1";
        this.var_2 = "class2";
        this.var_3 = "class_3";
    }
    class_1.prototype.getvar_1 = function () {
        return this.var_1;
    };
    ;
    return class_1;
}());
;
var obj2 = new class_1(); //creating object for class_1
console.log(obj2.var_1, obj2.var_2, obj2.var_3);
console.log(obj2.getvar_1()); //calling using function
