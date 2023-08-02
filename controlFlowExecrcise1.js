/*display a "bingo" when number >90 && <110 otherwise 
display "Hiss" */

let message1 = "Bingo!";
let message2 = "Hiss";

let num = prompt("Enter a number");

if (num >= 90 && num <= 110) {
  console.log(message1);
} else {
  console.log(message2);
}

// using a ternary operator

let number = prompt("enter a number");
let message = number >= 90 && number <= 110 ? "Bingo!" : "Hiss!";
alert(message);
