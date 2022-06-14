const promptest3 = require("prompt-sync")();
console.log(" there are program of variable ");
console.log("1.var datatype  2. let type 3.const type");
let t = parseInt(promptest3("enter the below no here "));
switch (t) {
  case 1:
    var a3 = promptest3("enter your name ");
    var b = promptest3("enter your age ");
    function check() {
      if (b > 20) {
        console.log(" your are eligible for a coding test ");
      } else {
        console.log("your are not eligible for a coding test");
      }
    }

    console.log("Name:" + a3 + " " + "Age:" + b);
    check();
    break;
  case 2:
    let ab = promptest3(
      "enter there are no find to its is even integer ya old integer"
    );
    function check1() {
      if (ab % 2 == 0) {
        console.log("its is even no " + " " + ab);
      } else {
        console.log("its is old no: " + " " + ab);
      }
    }
    check1();
    break;
  case 3:
    console.log("enter the input value for a constant value for calculation");
    const u = 3.14;
    const g = parseInt(promptest3("enter the no value for circle for radius"));
    function l() {
      let da = u * g * g;
      console.log("area of circle" + " " + da);
    }
    l();
    break;
  default:
    console.log("invalid input");
}
