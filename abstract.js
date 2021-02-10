var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.prototype.getfun1 = function () {
        return "hello";
    };
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.getfun2 = function () {
        return "Hello_2";
    };
    return class_two;
}(class_one));
;
//for class_one(abstract class), we can't create object
var obj = new class_two();
console.log(obj.getfun1(), obj.getfun2());
//multilevel inheritance
var class_1 = /** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
;
var class_2 = /** @class */ (function (_super) {
    __extends(class_2, _super);
    function class_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var1 = "ReactJs";
        return _this;
    }
    return class_2;
}(class_1));
// abstract class class_3 extends class_2{ //we can't create object for abstact class so..
var class_3 = /** @class */ (function (_super) {
    __extends(class_3, _super);
    function class_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var2 = "NodeJs";
        _this.var3 = "vueJs";
        return _this;
    }
    return class_3;
}(class_2));
var obj1 = new class_3();
console.log(obj1.var1, obj1.var2, obj1.var3);
