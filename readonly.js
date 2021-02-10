//only we can read can't update
var readonly_ex = /** @class */ (function () {
    function readonly_ex(arg1) {
        this.var1 = arg1;
    }
    ;
    return readonly_ex;
}());
;
console.log(new readonly_ex("Readonly").var1);
