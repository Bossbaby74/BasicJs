

function userInfo(){
    let userName = prompt("Enter your name");
    let UserAddress = prompt("Enter your address");
    let userPhone = prompt("Enter phone numbber");

    alert("Welcome " + userName + ", your address is " + UserAddress + " and your phone number is " + userPhone);

}
userInfo();
console.log(userName);//(this will not work because it is a local variable and we are trying to access it like a global variable.)


//exercise:

let NoOfRoses = 70;
let NoOfLily = 50;
let NoOfTulip = 120;

let RosePrice = 8;
let LilyPrice = 10;
let TulipPrice = 2;

let RoseValue = RosePrice * NoOfRoses;
let LilyValue = LilyPrice * NoOfLily;
let TulipValue = TulipPrice * NoOfTulip;

let Total = RoseValue + LilyValue + TulipValue;

console.log("Rose - unit price: " + RosePrice + ", quantity: " + NoOfRoses + ", Value: " + RoseValue);
console.log("Lily - unit price: " + LilyPrice + ", quantity: " + NoOfLily + ", Value: " + LilyValue);
console.log("Tulip - unit price: " + TulipPrice + ", quantity: " + NoOfTulip + ", Value: " + TulipValue);
console.log("Total: " + Total );

//string functions
str = "Java script language tutorial";

console.log(str.slice(0, 4));
console.log(str.slice(0, 28));
console.log(str.slice(7));
console.log(str.slice(0, 4));
console.log(str.charAt());
console.log(str.length); 

//excercise1 on objects
const ticket = {
    from :  "Starting station",
    to : "Ending station",
    price : "$" + 50
};

console.log(`ticket info: departure: ${ticket.from}`);  console.log(`Destination: ${ticket.to}`); console.log(`price: ${ticket.price}`);


// excercise 2 on obj

let person = {

};

person.name = "Nzengang";
person.surName = "Gabriel";
console.log(`${person.name}`); console.log(`${person.surName}`);


//excercise 3

let books = [
  {
    tittle: "Speaking javascript",
    author: "Axel Rauschmayer",
    pages: 460,
  },

  {
    tittle: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254,
  },

  {
    tittle: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352,
  },
];

// adding a new book to the list
let newBook = {tittle : "Learning JavaScript Design Patterns", author : "Addy Osmani", pages : 254};
books.push(newBook);
//displating the length of the array
console.log(books.length);

//displaying the books 
console.log("book tittles are: ");
console.log(`${books[0].tittle}`); console.log(`${books[1].tittle}`);
console.log(`${books[2].tittle}`); console.log(`${books[3].tittle}`);

// selecting the last 2 books in the collection
let selectedBooks = books.slice(-2);
console.log(selectedBooks);

//removing the first book from the collection

let lostBook = books.shift();// removes the first book from the array.
console.log(lostBook);
console.log(books.length); //returns the length of the array.

//displaying the names of the books 
console.log(`${books[0].tittle}`);
console.log(`${books[1].tittle}`);
console.log(`${books[2].tittle}`);

//displaying the sum of the pages 

let sumOfPages = books[0].pages + books[1].pages
 + books[2].pages;
 console.log(`sum Of Pages : ${sumOfPages}`);

