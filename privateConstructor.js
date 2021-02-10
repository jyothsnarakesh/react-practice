var PC_ex = /** @class */ (function () {
    function PC_ex() {
    }
    PC_ex.prototype.my_fun = function () {
        return "Hello";
    };
    ;
    ;
    //we can't call out side of class
    PC_ex.db_fun = function () {
        return new PC_ex;
    };
    return PC_ex;
}());
console.log(PC_ex.db_fun().my_fun());
