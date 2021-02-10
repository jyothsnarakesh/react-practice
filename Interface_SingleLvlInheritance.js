;
var obj = {
    data1: "JASON 1",
    data2: "JASON 2"
};
console.log(obj.data1, obj.data2);
var class_1 = /** @class */ (function () {
    function class_1() {
        this.data1 = "class1";
        this.data2 = "class2";
    }
    return class_1;
}());
var obj2 = new class_1();
console.log(obj2.data1, obj2.data2);
