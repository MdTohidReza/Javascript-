// this keyword refers current contest
const user =
{
    username : "MTR",
    price:999,

    welcomeMessage : function()
    {
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai()
// {   let username = "Tohid"
//     console.log(this.username);
    
// }
// chai()

// const chai = function()
// {
//     let username = "Tohid"
//     console.log(this.username);   
// }

const chai = ()=>
{
    let username = "Tohid"
    console.log(this);   
}
//chai()

//  const addtwo =(num1,num2)=>
// {
//     return num1+num2
// }

// const addtwo =(num1,num2)=> num1+num2
//const addtwo =(num1,num2)=> (num1+num2)
const addtwo =(num1,num2)=>( {username:"Tohid"})
    
console.log(addtwo(3,4));


// const myArray = [1,2,3,4,5]
// myArray.forEach()