// console.log("T");
// console.log("o");
// console.log("h");
// console.log("i");
// console.log("d");

function sayMyName()
{
    console.log("T");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("d"); 
}
//sayMyName()

// function addTwoNumber(num1,num2)
// {
//    console.log(num1 + num2);
// // }
// function addTwoNumber(num1,num2)
// {
// //   let result = num1+num2
// //   console.log("Tohid");
// //   return result
// //   console.log("Tohid");
// return num1+num2
  
// }
//  const result=addTwoNumber(3,5)
//  console.log("Result:", result);

function LoginUserMessage(username="sam")
{   if(username===undefined)
{
    console.log("please enter a valid user name");
    return
}
    return `${username} just logged in`
}
// console.log(LoginUserMessage("tohid"))
 //console.log(LoginUserMessage("tohid"))

 function calculateCartPrice(val1,val2, ...num1)
 {
    return num1
 }
 //console.log(calculateCartPrice(200,400,500,5000));
 
 const user =
 {
     username :"Tohid",
     price : 199
 }
 function handleObject(anyobject)
 {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
    
 }
 //handleObject(user)

 handleObject({
    username:"sam",
    price :299
 })

 const myNewArray = [200,400,100,800]
 function returnSecondValue(getArray)
 {
    return getArray[1]
 }
 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200,400,100,800]));