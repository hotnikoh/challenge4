let input1 = 10
let input2 = 5
let operation = "/"

let calculator = (input1, input2, operation) => {
    if (typeof input1 !== "number" || typeof input2 !== "number") {
        return "Invalid input, input must be a number";
    }

    if (operation =="+"){
        return input1 + input2;
    } 
    else if (operation == "-") {
        return input1 - input2;
    }
    else if (operation == "*") {
        return input1 * input2;
    }
    else if (operation == "/") {
        return input1 / input2;
    }
}

let result = calculator (input1, input2, operation);
console.log (result);

//==================================================

// let input1 = 10
// let input2 = 5
// let operation = "/"

// let calculator = (input1, input2, operation) => {
//     if (typeof input1 !== "number" || typeof input2 !== "number") {
//         return "Invalid input, input must be a number";
//     }

//     if (operation =="+"){
//         return input1 + input2;
//     } 
//     else if (operation == "-") {
//         return input1 - input2;
//     }
//     else if (operation == "*") {
//         return input1 * input2;
//     }
//     else if (operation == "/") {
//         return input1 / input2;
//     }
// }

// let result = calculator (input1, input2, operation);
// console.log (result);