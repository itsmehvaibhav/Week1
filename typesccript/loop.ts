const promptest4 = require("prompt-sync")();
console.log("welcome HELLO IN loop PROGRAM");
console.log("which loop do you want to run");
console.log("1.for loop  2.for in  3.for of 4.do while loop 5.while loop ");
let y = parseInt(promptest4("enter the no which loop do you want to run"));
switch (y) {
  case 1:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var count;
    console.log("Starting Loop" + "<br />");

    for (count = 0; count < 10; count++) {
      console.log("Current Count : " + count);
      console.log("<br />");
    }
    console.log("Loop stopped!");
    //-->

    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  case 2:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    const person = { fname: "John", lname: "Doe", age: 25 };

    let txt = "";
    for (let x in person) {
      txt += person[x] + " ";
    }

    console.log(txt);

    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  case 3:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    const cars = ["BMW", "Volvo", "Mini"];

    let text = "";
    for (let x of cars) {
      text += x + "<br>";
    }

    console.log(text);

    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  case 4:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    let t1 = "";
    let i = 0;

    do {
      t1 += "The number is " + " " + i;
      i++;
    } while (i < 10);

    console.log(t1);

    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");

    break;
  case 5:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    let t2 = "";
    let i1 = 0;
    while (i1 < 10) {
      t2 += "<br>The number is " + i1;
      i1++;
    }
    console.log(t2);

    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  default:
    console.log("Invalid input");
}
