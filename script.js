//Part A
console.log(`Part A: `);
var mass = 78;
var height = 1.69
var LucasBMI = mass/(height * height);

mass = 92;
height = 1.95;
var PeterBMI = mass/(height * height);

var LucasHeigherBMI = PeterBMI > LucasBMI;

var Summary = `The BMI of Peter is ${PeterBMI}, The BMI of Lucas is ${LucasBMI}, Petter’s BMI is higher than Lucas’s BMI that is ${LucasHeigherBMI};`
console.log(Summary);


//Part B
console.log(`Part B: `);
var celsius = 30;
var fahrenheit = (celsius * 9/5 + 32);
Summary = `${celsius}°C is ${fahrenheit}°F";`
console.log(Summary);

fahrenheit = 95;
celsius = (fahrenheit - 32) * 5/9;
Summary = `${fahrenheit}°F is ${celsius}°C";`
console.log(Summary);


//Part C
console.log(`Part C: `);
var result;
if (LucasBMI > PeterBMI) {
    result = `Lucas' BMI (${LucasBMI}) is higher than Peter's (${PeterBMI})!`
} else if (LucasBMI == PeterBMI){
    result =  `Petter and Lucas’s BMI is the same`
} else {
    result = `Peter's BMI (${PeterBMI}) is higher than Lucas' (${LucasBMI})!`
}
console.log(result);


//Part D
console.log(`Part D: `);
function  CovertCelsiusToFahrenheit(celsius){
    var fahrenheit = (celsius * 9/5 + 32);
    console.log(`${celsius}°C is ${fahrenheit}°F";`);
    return celsius;
}

function CovertFahrenheitToCelsius(fahrenheit){
    var celsius = (fahrenheit - 32) * 5/9;
    console.log(`${fahrenheit}°F is ${celsius}°C";`);
    return fahrenheit;
}

CovertCelsiusToFahrenheit(100);
CovertCelsiusToFahrenheit(0);
CovertCelsiusToFahrenheit(10);
CovertFahrenheitToCelsius(32);
CovertFahrenheitToCelsius(10);
CovertFahrenheitToCelsius(102);