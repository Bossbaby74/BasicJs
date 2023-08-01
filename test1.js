let Students = [
  {
    fName: "Paul",
    lName: "Jones",
    hobbies: ["food", "foot"],
    courses: {
      maths: 16,
      ict: 14,
    },
  },
  {
    fName: "Jonas",
    hobbies: ["meat", "food"],
    courses: {
      gei: 8,
      ict: 10,
    },
  },
];
let sum = Students[0].courses.maths;
let avg = sum / Students.length;
console.log(avg);
