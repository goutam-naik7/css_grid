(function () {
    "use strict";

    function warmUp() {
        
        console.log(x);
        console.log(foo());

        var x = "variable hosting!";

        function foo() {
            return "function hoisting";
        }
    }
    warmUp();
})();
