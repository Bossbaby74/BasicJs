//we have an array of objects and we need to prompt the user to add one more contact to the list
let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk",
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com",
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu",
  },
];

//here is how we go about it
contacts.push(
  (newContact = {
    name: prompt("Enter name: "),
    phone: prompt("Enter phone: "),
    email: prompt("Enter Email address: "),
  })
);
