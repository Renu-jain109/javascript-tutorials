// Condition 1:- if your pin no. is correct then amount will be asked.
// Condition 2:- if amount is less than 5k then you can withdraw

let pinNumber = 12345;
let amount = 6000;

if (pinNumber === 12345) {
    console.log('Your pin number is sucessfully accepted')
    if (amount === 5000) {
        console.log('Yes, your amount has been sucessfully credited. Thank you.')
    } else {
        console.log('Sorry, you can withdraw only 5000');
    }
} else {
    console.log('Sorry, enter a valid pin number');
}