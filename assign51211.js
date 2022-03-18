// let number = 123456;
// let number = 345237;
let number = 10007;

let sum = 0;

while (number > 0){
    let lastDigit = number % 10;   // Step 2
    sum = sum + lastDigit;         // Step 2

    number = parseInt(number / 10);  // Step 3
}

console.log('Sum of all digits of a number = ' + sum);

// Yet to understand fully; 