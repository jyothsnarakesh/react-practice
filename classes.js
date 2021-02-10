var class_one = /** @class */ (function () {
    function class_one() {
        this.sub_one = "ReactJs";
        this.sub_two = "Node";
        this.sub_three = "MongoDB";
    }
    ;
    return class_one;
}());
;
var obj = new class_one();
console.log(obj.sub_one, obj.sub_two, obj.sub_three);
//**************************************************** */
var class_two = /** @class */ (function () {
    function class_two(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    ;
    return class_two;
}());
;
var obj1 = new class_two("Html", "CSS", "Bootstrap");
console.log(obj1.arg1, obj1.arg2, obj1.arg3);
//******************************************************** */
var clsss_3 = /** @class */ (function () {
    function clsss_3() {
        this.sub_one = "CO";
        this.sub_two = "OS";
    }
    clsss_3.prototype.getSubOne = function () {
        return this.sub_one;
    };
    clsss_3.prototype.getSubTwo = function () {
        return this.sub_two;
    };
    return clsss_3;
}());
;
var obj3 = new clsss_3();
console.log(obj3.getSubOne(), obj3.getSubTwo());
