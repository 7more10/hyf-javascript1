console.log("Hello, world!", "Hallo, wereld!", "Privet, mir!");
console.log("I'm awesome!");


let x;
console.log("The value of variable x is undefined");
console.log(x);
x = 17;
console.log("The value x is 17");
console.log(x);


let y = "Hack me baby";
console.log("The value of my string will be: Hack me baby");
console.log(y);
y = "Merci";
console.log("The value of my string will be: Merci");
console.log(y);


let z = 7.25;
console.log(z);
let a = 7;
console.log(a);
let the3rdone = [z, a];
console.log(Math.max(...the3rdone));


let burgers = [];
console.log("The value of the array is undefined");
console.log(burgers);
let myFavoriteAnimals = ["cat", "tiger", "dog"];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push("baby pig");
console.log(myFavoriteAnimals);


let myString = "this is a test";
console.log(myString);
let myNewString = myString.length;
console.log(myNewString);


let myStringer = "JS is challenging";
let myNumber = 17;
let myArray = ["1", "2", "3"];
let myObject = {name: "Alek", gender: "male"};

console.log('The value of my variable myString is: ' + myStringer);
console.log('The value of my variable myNumber is: ' + myNumber);
console.log('The value of my variable myArray is: ' + myArray);
console.log('The value of my variable myObject is: ', myObject);

console.log("The type of myStringer is a string, the type of myNumber is a number, the type of myArray is an array, the type of myObject is an object");

console.log(typeof myStringer);
console.log(typeof myNumber);
console.log(typeof myArray);
console.log(typeof myObject);


if (typeof myStringer === typeof myNumber) {
    console.log("The SAME TYPE");
}
else {
    console.log("NOT the SAME TYPE")
}


if (typeof myStringer === typeof myArray) {
    console.log("The SAME TYPE");
}
else {
    console.log("NOT the SAME TYPE");
}


if (typeof myStringer === typeof myObject) {
    console.log("The SAME TYPE");
}
else {
    console.log("NOT the SAME TYPE");
}

// 9
x = 1

console.log("7 % 3 = 1, because 7 = 3*2+1");
console.log("10 % 4 = 2, because 10 = 4*2+2");
console.log("39 % 6 = 3, because 39 = 6*6+3");


//10
let myFinalArray = ["Alek", 30];

if (6/0 === 10/0) {
    console.log("I can compare");
}
else {
    console.log("I cannot compare");
}
