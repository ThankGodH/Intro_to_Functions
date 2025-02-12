//Declaring and invoking functions

function greet(name = "Friend") {
    return "Hello, " + name + "!";
}
console.log(greet("ThankGod Hunyinbo"));
console.log(greet());

//Working withparameters and returning values

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(24, 20));

//Function scope
let x = 10;
function changeValue() {
    x = 20;
    console.log("Inside the function:", x);
}
console.log("Outside the function:", x);
changeValue();

console.log("Outside the function again:", x);


//Closures
function outerFunction() {
    let count = 0;

    return function innerFunction() {
        count++;
        console.log("Count:", count);
    };
}

const newFunction = outerFunction();

newFunction();
newFunction();
newFunction();