let num1 = 10;
let num2 = 5;
let sum = num1 + num2; 
console.log("The sum of", num1, "and", num2, "is", sum); 

let resultElement = document.getElementById('result'); 
resultElement.innerHTML = "The sum of " + num1 + " and " + num2 + " is: " + sum;

let age = 16;
const birthYear = 2008;

if (age >= 18 && birthYear <= 2007) {
    console.log('You are an adult and born before 2007');
} else {
    console.log('Either you are not an adult or you were born after 2007');
}

