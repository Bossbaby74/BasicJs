export function userInfo() {
  let userName = prompt("Enter your name");
  let UserAddress = prompt("Enter your address");
  let userPhone = prompt("Enter phone numbber");

  alert(
    "Welcome " +
      userName +
      ", your address is " +
      UserAddress +
      " and your phone number is " +
      userPhone
  );
}
userInfo(); //this is the function call which will execute the piece of code that we put in our program
console.log(userName); //(this will not work because it is a local variable and we are trying to access it like a global variable.)
