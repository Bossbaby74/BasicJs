//calculating the volume of a box with values from the users
export function jsVolume(){
    let width = prompt("Enter the with");
    let height = prompt("Enter the height");
    let length = prompt("Enter the length");
    width = number(width);
    height = number(height);
    length = number(length);

    if(length || width || height == NaN){
        console.log("Please enter a valid number");
    }

    let answer = length * width * height;
    console.log(answer);

}
jsVolume();