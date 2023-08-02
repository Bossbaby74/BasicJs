/*if the first consdition isn't true, then a second condition could be used
that is where the "else" clause comes in*/

let userReady = confirm("Are you ready");
console.log(userReady);
if (userReady) {
  console.log("user is ready");
} else {
  console.log("user not ready");
}
