let number = 123456;

let lastDigit = number % 10;

console.log(lastDigit);

while (number >= 10){
    number = parseInt(number / 10);
}

let firstDigit = number;

console.log(firstDigit);

// Yet to understand fully. 