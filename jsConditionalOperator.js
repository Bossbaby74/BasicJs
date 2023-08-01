/*the conditonal operator makes the code shorter.
the first line before the "?" is the condition being tested and the first piece of 
code after the "?" will be returned if the condition is true. if the condition is false, the 
second statement which is after the ":" will be returned*/
export let price = prompt("Enter the price");
let shippingCost = price > 50 ? 0 : 5;

console.log(`price = ${price}, shipping = ${shippingCost}`); // -> price = 100, shipping = 0
