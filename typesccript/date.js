var promptest = require("prompt-sync")();
console.log("welcome HELLO IN DATE PROGRAM");
console.log("which method do you want to run in string method");
console.log("1.Date() Method  2. getDate() Method  3.getDAte() Method 4.getFullYear() Method 5.getHours() Method 6. getMilliseconds() Method 7. getUTCMonth() Method");
var y1 = parseInt(promptest("enter the no which method do you want to run"));
switch (y1) {
    case 1:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt = Date();
        console.log("Date and Time : " + dt);
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 2:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt2 = new Date("December 25, 1995 23:15:00");
        console.log("getDate() : " + dt2.getDate());
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 3:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt3 = new Date("December 25, 1995 23:15:00");
        console.log("getDay() : " + dt3.getDay());
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 4:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt4 = new Date("December 25, 1995 23:15:00");
        console.log("getFullYear() : " + dt4.getFullYear());
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 5:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt5 = new Date("December 25, 1995 23:15:00");
        console.log("getHours() : " + dt5.getHours());
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 6:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt6 = new Date();
        document.write("getMilliseconds() : " + dt6.getMilliseconds());
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    case 7:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        var dt7 = new Date();
        document.write("getUTCMonth() : " + dt7.getUTCMonth());
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
        break;
    default:
        console.log("Invalid input");
}
