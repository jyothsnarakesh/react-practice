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
    class_one.prototype.dbfun = function () {
        return "MongoDB";
    };
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.dbfun = function () {
        return "CasandraDB Soon..";
    };
    return class_two;
}(class_one));
;
var obj = new class_two();
console.log(obj.dbfun());
function add(arg1, arg2) {
    return arg1 + arg2;
}
;
console.log(add(10, 10));
console.log(add("Hell0_1", "Hello_2"));
console.log(add("Hello", 10));
console.log(add(10, 10, 10));
