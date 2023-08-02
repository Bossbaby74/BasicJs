let cities = [
  { name: "New York", population: 18.65e6 },
  { name: "Cairo", population: 18.82e6 },
  { name: "Mumbai", population: 19.32e6 },
  { name: "São Paulo", population: 20.88e6 },
  { name: "Mexico City", population: 21.34e6 },
  { name: "Shanghai", population: 23.48e6 },
  { name: "Delhi", population: 25.87e6 },
  { name: "Tokyo", population: 37.26e6 },
];

for (let city of cities) {
  if (city.population > 20e6 && city.population < 25e6) {
    console.log(`${city.name} (${city.population})`);
  }
}

let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
  case "a": {
    let message = "Gate A";
    console.log(message);
    break;
  }
  case "b": {
    let message = "Gate B";
    console.log(message);
    break;
  }
  case "c": {
    let message = "Gate C";
    console.log(message);
    break;
  }
  default:
    alert("No gate " + String(gate));
}

if (win) {
  alert("Winner!");
}
