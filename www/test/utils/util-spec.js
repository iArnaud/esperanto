define( [
    "jquery",
    "underscore",
    "src/js/utils/Util"    
], function (
    $,
    _,
    CMnUtil
){
    "use strict";

    describe("Util", function() {

        describe("Add", function() {
            var sum;
            var a;
            var b;
            beforeEach(function() {
                a = 1;
                b = 2;
                sum = CMnUtil.add(a, b);
            });

            afterEach(function() {
                sum = undefined;
                a = undefined;
                b = undefined;
            });

            it("should return the correct sum", function() {
                expect(sum).to.equal(a + b);
            });
        });
    }); 

});
