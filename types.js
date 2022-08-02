 var price = 100;
 console.log(typeof price); // print number

var price = '100';
console.log(typeof price);  // print string

var isHappy = true;
console.log(typeof isHappy); // print boolean

var romantic;
console.log(typeof romantic); //print undefined

// advanced
var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
console.log(sum); // print 0.3