// There are two types of datatypes 
// 1.Primptive
// 2.Non-primptive

// Javascript is dynamic language because we do not need to declare a variables types

// 1.primitive(These are call by value)
// There are 7 types of datatypes in primitive

// String,Number,NUll,Undefined,Boolean,symbol,BigInt
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)
// const bigNumber = 45636326646354n

//Reference (Non_primitive)
// Array,objects,functions
// Return Type of Non-primitive datatype is function

const heros = ["Ali","khalid bin waleed","hajrat Umar"];
  let myObj={
    name:"Tohid",
    age: 21,

}

const myFunction = function()
{
    console.log("Hello world");
}
console.log(typeof anotherId);