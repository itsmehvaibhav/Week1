var promptest3 = require("prompt-sync")();
console.log(" there are program of variable ");
console.log("1.var datatype  2. let type 3.const type");
var t = parseInt(promptest3("enter the below no here "));
switch (t) {
    case 1:
        var a3 = promptest3("enter your name ");
        var b = promptest3("enter your age ");
        function check() {
            if (b > 20) {
                console.log(" your are eligible for a coding test ");
            }
            else {
                console.log("your are not eligible for a coding test");
            }
        }
        console.log("Name:" + a3 + " " + "Age:" + b);
        check();
        break;
    case 2:
        var ab_1 = promptest3("enter there are no find to its is even integer ya old integer");
        function check1() {
            if (ab_1 % 2 == 0) {
                console.log("its is even no " + " " + ab_1);
            }
            else {
                console.log("its is old no: " + " " + ab_1);
            }
        }
        check1();
        break;
    case 3:
        console.log("enter the input value for a constant value for calculation");
        var u_1 = 3.14;
        var g_1 = parseInt(promptest3("enter the no value for circle for radius"));
        function l() {
            var da = u_1 * g_1 * g_1;
            console.log("area of circle" + " " + da);
        }
        l();
        break;
    default:
        console.log("invalid input");
}
