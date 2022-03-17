// Solution with for loop:

// for (let year = 1801; year <= 2000; year++){
//     if (year % 400 === 0){
//         console.log(year + ' is a leap year.')
//     } else if (year % 4 === 0 && year % 100 !== 0){
//         console.log(year + ' is a leap year.')
//     }
// }

// Solution with for loop in other way:

for (let year = 1801; year <= 2000; year ++){
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0){
        console.log(year + ' should be a leap year.')
    }
}