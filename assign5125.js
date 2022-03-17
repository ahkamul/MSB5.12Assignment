// Way 1: 

// Solution with for loop:

// let sumEven = 0;

// for (let index = 0; index <= 100; index++){
//     if (index % 2 === 0){
//         sumEven = sumEven + index;
//     }
// }

// console.log('Sum of Even Numbers btwn 1 & 100 = ' + sumEven); 

// let sumOdd = 0;

// for (let index = 0; index <= 100; index++){
//     if (index % 2 === 1){
//         sumOdd = sumOdd + index;
//     }
// }

// console.log('Sum of Odd Numbers btwn 1 & 100 = '+ sumOdd);


// Solution with while loop: 

// let sumEven = 0;

// let indexEven = 0;

// while (indexEven <= 100){
//     if (indexEven % 2 === 0){
//         sumEven = sumEven + indexEven;
//     }
//     indexEven++;
// }
// console.log('Sum of Even Numbers btwn 1 & 100(using while) = ' + sumEven);

// let sumOdd = 0;

// let indexOdd = 0;

// while (indexOdd <= 100){
//     if (indexOdd % 2 === 1){
//         sumOdd = sumOdd + indexOdd;
//     }
//     indexOdd++;
// }
// console.log('Sum of Odd Numbers btwn 1 & 100(using while) = ' + sumOdd);


// Solution with do-while:

// let sumOdd = 0;
// let indexOdd = 0;

// do {
//     if (indexOdd % 2 === 1){
//         sumOdd = sumOdd + indexOdd;
//     }
//     indexOdd ++;
// } while (indexOdd <= 100);

// console.log('Sum of Odd Numbers btwn 1 & 100(using do-while) = ' + sumOdd);

// let sumEven = 0;
// let indexEven = 0;

// do {
//     if (indexEven % 2 === 0){
//         sumEven = sumEven + indexEven;
//     }
//     indexEven ++;
// } while (indexEven <= 100); 

// console.log('Sum of Even Numbers btwn 1 & 100(using do-while) = ' + sumEven);

// Solution At a Time:

let sumEven = 0;
let sumOdd = 0;

for (let index = 0; index <= 100; index){
    if (index === 2){
        sumEven = sumEven + index;
    } else{
        sumOdd = sumOdd + index;
    }
}

console.log('SumEven = ' + sumEven);
console.log('SumOdd = ' + sumOdd);

