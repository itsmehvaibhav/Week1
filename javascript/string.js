const prompt = require('prompt-sync')();
console.log("welcome HELLO IN STRING PROGRAM")
console.log("which method do you want to run in string method")
console.log("1.charAt() Method  2. charCodeAt() Method  3.concat() Method 4.indexOf () Method 5.lastIndexOf() Method 6. localeCompare() Method 7. match() Method 8. replace() Method 9. search() Method 10. sliced() Method 11. splitted() Method 12. valueof() Method ");

let y=parseInt(prompt("enter the no which method do you want to run"))
switch(y)
{
case 1 :
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
    let a = prompt("enter the string heere at charAt method")
    let b= parseInt(prompt("no here at idex"))
    console.log(" index value"+" " + a.charAt(b));  
    console.log(" No index value"+" " +a.charAt());//print first character  
    console.log(" last value"+" " +a.charAt(a.length-1)); 
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
break;
case 2:
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
    let aa = prompt("enter the string heere at charCodeAt method")
    let bb= parseInt(prompt("no here at idex"))
    console.log(" index value"+" " + aa.charCodeAt(bb));  
    console.log(" No index value"+" " +aa.charCodeAt());//print first character  
    console.log(" last value"+" " +aa.charCodeAt(aa.length-1)); 
    console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
    break;
    case 3:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
        var r1=prompt("enter the 1 string here for a concat")
        var r2=prompt("enter the 2 string here for a concat")
        console.log(r1.concat(r2))
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
        break;
    case 4:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
        var str1 = new String( "This is string one" );
         var index = str1.indexOf( "string" );
         console.log("indexOf found String :" + index );        
         console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
        
         break;
       case 5 :
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
        var str1 = new String( "This is string one and again string" );
         var index = str1.lastIndexOf( "string" );
        console.log("lastIndexOf found String :" + index ); 

        
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
        break;
        case 6 :
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
        var str1 = new String( "This is beautiful string" );
         var index = str1.localeCompare( "XYZ" );
         console.log("localeCompare first :" + index ); 
         
        //  console.log("<br />" );          
         var index = str1.localeCompare( "AbCD ?" );
         console.log("localeCompare second :" + index );
        
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
        break;
        case 7:
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
        var str = "For more information, see Chapter 3.4.5.1";
         var re = /(chapter \d+(\.\d)*)/i;
         var found = str.match( re );         
         console.log(found ); 
        console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
       break;
        case 8:
            console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
            var re = /(\w+)\s(\w+)/;
            var str = prompt("enter the 1 string here")
            var newstr = str.replace(re, "$2, $1");
            console.log(newstr);
            console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
            break;
            case 9:
            console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
            var re = /apples/gi;
         var str = "Apples are round, and apples are juicy.";
         
         if ( str.search(re) == -1 ) {
            console.log("Does not contain Apples" );
         } else {
            console.log("Contains Apples" );
         }
            console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
            break;

            case 10:
            console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
            var str = "Apples are round, and apples are juicy.";
            var sliced = str.slice(3, -2);         
            console.log( sliced );
            break;

            case 11:
            console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
            var str = "Apples are round, and apples are juicy.";
         var splitted = str.split(" ", 3);
        console.log( splitted );
            
            break;
            case 12:
            console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''")
            var str = new String("Hello world");
         console.log(str.valueOf( ));
            break;

            


         default: console.log("Invalid input")
}