var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.getfun = function () {
        return this.var1;
    };
    class_one.var1 = "Hello";
    return class_one;
}());
;
console.log(class_one.var1, class_one.getfun());
