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
        this["var"] = "Parent Class";
    }
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.var2 = "Child Class";
        return _this;
    }
    return class_two;
}(class_one));
;
var obj1 = new class_one();
console.log(obj1["var"]); //Parent Class
var obj2 = new class_two();
console.log(obj2["var"], obj2.var2); //Parent Class Child Class
//accessing constructor argument using inheritance
var class_three = /** @class */ (function () {
    function class_three(var1) {
        this.var1 = var1;
    }
    ;
    return class_three;
}());
;
var class_four = /** @class */ (function (_super) {
    __extends(class_four, _super);
    function class_four() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return class_four;
}(class_three));
;
var obj3 = new class_four("Hello");
console.log(obj3.var1);
/********************************************* */
var class_1 = /** @class */ (function () {
    function class_1(param1) {
        this.arg1 = param1;
    }
    class_1.prototype.getArg1 = function () {
        return this.arg1; //Hello_2
    };
    return class_1;
}());
;
var class_2 = /** @class */ (function (_super) {
    __extends(class_2, _super);
    function class_2(param1, param2) {
        var _this = _super.call(this, param2) || this;
        _this.arg2 = param1; //Hello_1
        return _this;
    }
    class_2.prototype.getArg2 = function () {
        return this.arg2;
    };
    ;
    return class_2;
}(class_1));
;
var obj5 = new class_2("Hello_1", "Hello_2");
console.log(obj5.getArg1(), obj5.getArg2()); //Hello_2 Hello_1 
