function celciusTofahrenheit(celcius){
    return function() {
        let celcToFarhn = (celcius * 9/5) + 32;
        return celcToFarhn;
    }  
    
}

let celcius = 25;
let convrtCelcFahr = celciusTofahrenheit(celcius);
console.log(convrtCelcFahr())

//==========================================================

// function celciusTofahrenheit(celcius){
//     return function() {
//         let celcToFarhn = (celcius * 9/5) + 32;
//         return celcToFarhn;
//     }  
    
// }

// let celcius = 20;
// let convrtCelcFahr = celciusTofahrenheit(celcius);
// console.log(convrtCelcFahr())