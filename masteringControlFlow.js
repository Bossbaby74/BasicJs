export let contacts = [
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

let options = prompt(
  "Enter options:(1(show first contact), 2(show last contact) or 3(add new contact))"
);
if (options) {
  switch (options) {
    case "1":
      console.log(contacts[0]);
      break;
    case "2":
      console.log(contacts[2]);
      break;
    case "3":
      contacts.push({
        name: prompt("Enter name: "),
        phone: prompt("Enter phone: "),
        email: prompt("Enter Email address: "),
      });
      console.log(contacts[3]);
  }
}
