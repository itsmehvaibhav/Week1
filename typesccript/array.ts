const prompttest = require("prompt-sync")();
console.log("welcome HELLO IN Array PROGRAM");
console.log("which method do you want to run in string method");
console.log(
  "1.concat() Method  2. every() Method  3.filter() Method 4.forEach () Method 5. map() Method 6. pop() Method 7. push() Method 8. reduce() Method 9. reduceRight() Method 10. reverse() Method 11. sliced() Method 12. toSource() Method "
);

let y2 = parseInt(prompttest("enter the no which method do you want to run"));
switch (y2) {
  case 1:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var myinputarr: string[] = [];
    var size = 5; // Array size

    for (var a1 = 0; a1 < size; a1++) {
      myinputarr.push(prompttest("Enter array Element " + (a1 + 1)));
    }
    var arr2 = ["Java", "JavaScript", "Android"];
    var result = myinputarr.concat(arr2);
    console.log("concat Array" + " " + result);
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  case 2:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var myinputarr: string[] = [];
    var size = 5; // Array size

    for (var a1 = 0; a1 < size; a1++) {
      myinputarr.push(prompttest("Enter array Element " + (a1 + 1)));
    }

    console.log(myinputarr.every(check));
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  case 3:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var marks = [50, 40, 45, 37, 20];

    function check3(value) {
      return value > 30;
    }

    console.log(marks.filter(check3));
    break;

  case 4:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var sum = 0;
    var arr = [10, 18, 12, 20];

    arr.forEach(function myFunction(element) {
      sum = sum + element;
      console.log(sum);
    });

    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");

    break;
  case 5:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt);
    console.log("roots is : " + roots);

    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  case 6:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var numbers = [1, 4, 9];

    var element = numbers.pop();
    console.log("element is : " + element);

    var element = numbers.pop();
    console.log("element is : " + element);
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  case 7:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var numbers = [1, 4, 9];
    numbers.push(10);

    console.log("element is : " + numbers[3]);
    //numbers.pop(15);
    //element = 15;
    //console.log("element is : " + element );
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  case 8:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var arr = [2, 3, 1, 5];
    var a = arr.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    console.log("The sum of the array elements is: " + a);
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;
  case 9:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    const arrtest: string[] = [
      "t",
      "p",
      "i",
      "r",
      "c",
      "s",
      "a",
      "v",
      "a",
      "j",
    ];
    var res = arrtest.reduceRight(function (right, left) {
      return right + left;
    });
    console.log(" Output is: " + res);
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    break;

  case 10:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var arr = [0, 1, 2, 3].reverse();
    console.log("Reversed array is : " + arr);
    break;

  case 11:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''");
    var arrtest2: string[] = ["orange", "mango", "banana", "sugar", "tea"];
    var removed = arrtest2.splice(2, 0, "water");
    console.log("After adding 1: " + arrtest2);
    console.log("removed is: " + removed);

    removed = arrtest2.splice(3, 1);
    console.log("After adding 1: " + arrtest2);
    console.log("removed is: " + removed);
    break;
  case 12:
    var arrtext3 = new Array("orange", "mango", "banana", "sugar");
    var str = arrtext3.toString();
    console.log("Returned string is : " + str);
    break;

  default:
    console.log("Invalid input");
}
