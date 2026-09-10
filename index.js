console.log("Hello world");

//let, var, const
var a = 1;
var a = 5; //can be redeclared, reassigned, function scoped

// function s(){
//     var b = 10;
// }
// console.log(b); //error - b is not defined as var is block scoped

if(true){
    var c = 10;
}
console.log(c); //exception to being block scoped

let d = 10; //can be reassigned, cannot be redeclared, block scoped
d = 11;
console.log(d);
// if(true){
//     let z = 20;
// }
// console.log(z);  //error - z is not defined

const y = 7; //cannot reassign, not redeclare, black scoped

//hoisting - var

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,6));


// const sum = function name(a,b){
//     return a+b;
// }
// console.log(sum(12,6));


function sum(){
    console.log(arguments); //arguments is an object type
    return arguments[0] + arguments[1];
}
console.log(sum(12, 8));