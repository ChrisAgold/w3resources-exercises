//w3Resources Exercises

//Write a JavaScript program that accept two integers and display the larger

// Exercise 1
var x = 1;
var y = 3;
function integer(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}
console.log(integer(1, 3));

// function max(x , y){
//
//     if( x >= y)
//         return x;
//     return y;
// }
// console.log(max(3,5));

// Exercise 2
// Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -
var num1 = -2;
var num2 = -3;
var num3 = -5;

if (num1 > 0 && num2 > 0 && num3 > 0) {
    alert("The sign is +");
} else if (num1 < 0 && num2 < 0 && num3 < 0) {
    alert("The sign is -");
} else if (num1 > 0 && num2 < 0 && num3 < 0) {
    alert("The sign is +");
} else if (num1 < 0 && num2 > 0 && num3 < 0) {
    alert("The sign is +");
} else if (num1 > 0 && num2 < 0 && num3 > 0) {
    alert("The sign is +");
} else if (num1 < 0 && num2 < 0 && num3 > 0) {
    alert("The sign is +");
} else {
    alert("The sign is -");
}

// Exercise 3
// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

var array = [0, -1, 4];
array.sort();
console.log(array);


// Exercise 4
// Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

var nums = [-5, 2, -6, 0, -1];
console.log((Math.max.apply(null, nums)));

// Exercise 5
// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even.")
    } else {
        console.log(i + " is odd.")
    }
}

// Exercise 6
// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz " + i);
    } else if (i % 5 === 0) {
        console.log("Buzz " + i);
    } else if (i % 3 === 0) {
        console.log("Fizz " + i);
    } else {
        console.log(i);
    }
}

// Exercise 7
// According to Wikipedia a happy number is defined by the following process :
//     "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
//         Write a JavaScript program to find and print the first 5 happy numbers








