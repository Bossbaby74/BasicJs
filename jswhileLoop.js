/*we set the isOver to false, then we set counter to 1. we then test the condition in a 
while loop.*/

let isOver = false;
let counter = 1;
while (isOver != true) {
  let continueLoop = confirm(`[${counter}] Continue the loop?`);
  isOver = continueLoop === true ? false : true;
  counter = counter + 1;
  //the more you click on ok, the more the program continues until you click on cancel
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
