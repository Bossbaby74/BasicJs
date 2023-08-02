// 1st scenario. the console displays "true"
let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
  alert("User ready!");
}

// scenario 2, the console displays "user ready".

export let isUserReady2 = confirm("Are you ready?");

if (isUserReady2) {
  console.log("User 2 ready!");

  alert("User 2 ready!");
}
