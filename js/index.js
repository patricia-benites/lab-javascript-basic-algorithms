// Iteration 1: Names and Input

let hacker1  = 'Patricia'
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'Marcelo'
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

driverLength = hacker1.length
navigatorLength = hacker2.length

if (driverLength > navigatorLength){
  console.log(`The driver has the longest name, it has ${driverLength} characters.`);
} else if (driverLength < navigatorLength){
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
} else{
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`)
}
// Iteration 3: Loops
// 3.1
let driversName = '';

for (let i = 0; i < driverLength; i++){

  if (i === driverLength - 1){
    driversName+= `${hacker1[i].toUpperCase()}`;
  } else {
    driversName+= `${hacker1[i].toUpperCase()} `;
  }

}
console.log(driversName);

// 3.2

let reverseName = '';

for (let i = driverLength-1; i>=0; i--){
  reverseName+= hacker1[i]
}

console.log(reverseName);

// 3.3

if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?");
    } else if (hacker1.localeCompare(hacker2) === -1) {
      console.log("The driver's name goes first.")
    } else if (hacker1.localeCompare(hacker2) === 1) {
      console.log("Yo, the navigator goes first definitely.")
    }
