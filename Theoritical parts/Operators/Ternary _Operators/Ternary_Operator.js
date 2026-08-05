// Condition 1 : if age is less than 18 then not eligible for voting.

let age = 17;

// if (age >= 18) {
//     console.log("Eligible for voting");
// } else {
//     console.log("Not eligible for voting");
// }


// Syntax:-
// condition ? valueIfTrue : valueIfFalse;

// Example 1:-
// (age >= 18) ? console.log("Eligible for voting") : console.log("Not eligible for voting");

// Example:-2
let marks = 40;

// marks >= 90 ? console.log('Eligible to take admission in New class') : console.log('Not Eligible to take admission in New class');

// first Condition :- Marks should be greater than 95
// second condition :- caste should be 'ST'

let caste = "ST"

marks >= 40 && caste === "General" ? console.log('Eligible to take admission in New class') : console.log('Not Eligible to take admission in New class');
