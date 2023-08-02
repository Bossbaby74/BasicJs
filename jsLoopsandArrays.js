let names = [];
let isOver = false;
while (!isOver) {
  let name = prompt("Enter a name");
  if (name != null) {
    names.push(name);
  } else {
    isOver = true;
  }
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}
/* an array is created (names) then we initialize the isOver which is used as the condition. 
while that condition exists, let create a variable called name and then
prompt the user to enter names, after which we insert the name into the names array
with the push() function. if the name is empty, the loop breaks.
after which we use a for loop to display the elements of the array.*/
