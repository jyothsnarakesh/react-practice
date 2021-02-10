;
;
;
// implementation using JSON
var obj1 = {
    data1: "MLI1",
    data2: "MUI2",
    data3: "MUI3"
};
console.log(obj1.data1, obj1.data2, obj1.data3);
//implementation by class
var class_1 = /** @class */ (function () {
    function class_1() {
        this.data1 = "cls1";
        this.data2 = "cls2";
        this.data3 = "cls3";
    }
    class_1.prototype.getdata1 = function () {
        return this.data1 + " Hello1";
    };
    ;
    class_1.prototype.getdata2 = function () {
        return this.data2 + " Hello2";
    };
    class_1.prototype.getdata3 = function () {
        return this.data3 + " Hello3";
    };
    return class_1;
}());
;
var obj2 = new class_1();
console.log(obj2.getdata1(), obj2.getdata2(), obj2.getdata3());
