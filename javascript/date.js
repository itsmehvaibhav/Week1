const prompt = require("prompt-sync")();
console.log("welcome HELLO IN DATE PROGRAM");
console.log("which method do you want to run in string method");
console.log(
    "1.Date() Method  2. getDate() Method  3.getDAte() Method 4.getFullYear() Method 5.getHours() Method 6. getMilliseconds() Method 7. getUTCMonth() Method"
);
let y = parseInt(prompt("enter the no which method do you want to run"));
switch (y) {
    case 1:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt = Date();
        console.log("Date and Time : " + dt);
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 2:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt = new Date("December 25, 1995 23:15:00");
        console.log("getDate() : " + dt.getDate());

        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 3:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt = new Date("December 25, 1995 23:15:00");
        console.log("getDay() : " + dt.getDay());

        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 4:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt = new Date("December 25, 1995 23:15:00");
        console.log("getFullYear() : " + dt.getFullYear());

        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");

        break;
    case 5:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");

        var dt = new Date("December 25, 1995 23:15:00");
        console.log("getHours() : " + dt.getHours());

        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 6:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt = new Date();
        document.write("getMilliseconds() : " + dt.getMilliseconds());

        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 7:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt = new Date();
        document.write("getUTCMonth() : " + dt.getUTCMonth());

        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    default:
        console.log("Invalid input");
}