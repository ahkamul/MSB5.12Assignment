// Solution with for loop:

// for (let number = 100; number <= 200; number =number + 2){
//     console.log(number);
// }

// Solution with while loop:

// let number = 100;

// while (number <= 200){
//     console.log('The even number is ' + number);
//     number = number + 2;
// }


// Solution with do-while loop: 

// let number = 100;

// do{
//     console.log('Even Number = ' + number);
//     number = number + 2;
// } while (number <= 200);


// Way 2 to solve: 

// with for loop: 

// for (let number = 100; number <= 200; number++){
//     if (number % 2 === 0){
//         console.log ('Even Number : ' + number);
//     }
// }

// with while loop:

// let number = 100;

// while (number <= 200){
//     if (number % 2 === 0){
//         console.log('Even Number = ' + number);
//     }
//     number++;
// }


// with do-while loop: 

let number = 101;

do{
    if (number % 2 === 0){
        console.log('Even Number is ' + number);
    }
    number++;
} while (number <= 200);

