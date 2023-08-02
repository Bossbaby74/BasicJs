//calculating the volume of a box with values from the users
function jsVolume() {
  let width = prompt("Enter the with");
  let height = prompt("Enter the height");
  let length = prompt("Enter the length");
  width = Number(width);
  height = Number(height);
  length = Number(length);

  if (length || width || height == NaN || "String") {
    console.log("Please enter a valid number");
  }

  let answer = length * width * height;
  console.log(answer);
}
jsVolume();
