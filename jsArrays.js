
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
  /*here we are creating an array of objects. this already tells you that arrays can have objects as their elements*/
  
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