const promiseOne = new Promise(function(reslove, reject)
{
    // do an async task
    // DB calls,cryptography,network
    setTimeout(function(){
        console.log('Async task is compelet');
        reslove()
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
    
})



///////
new Promise(function(reslove, reject){
    setTimeout(function(){
        console.log("Async task two");
        reslove();
        
    },1000)
}).then(function(){
    console.log("Async two resolved"); 
})



///////
const promiseThree = new Promise(function(reslove, reject){
    setTimeout( function(){
        reslove({username:"Reza", email:"reza@gmial.com"})
    },1000)
})

promiseThree.then(function(user){

    console.log(user);
})



////

const promiseFour = new Promise(function(resolve , reject){
    setTimeout( function(){
        let error = false
        if(!error)
        {
            resolve({username:"Tohid" , password:"1234"})
        }
        else
        {
            reject('ERROR: Something went wrong')
        }
    },1000)
})
// Note: we do not store the output what is return from line no.63
//  i.e const username = promiseFour.then((user)=>{
//   console.log(user);
//   return user.username
// })

promiseFour.
then((user)=>{
  console.log(user);
  return user.username
}).
then((username)=>{
    console.log(username);
    
}).
catch(function(error){
    console.log(error); 
}).finally(()=>{
    console.log("The promise is either resolve or rejected");
})


///////

const promiseFive = new Promise(function(reslove, reject){
    setInterval(function(){
        let error = true
        if(!error)
        {
            reslove({username: "Javascript", password:"123456"})
            
        }
        else
        {
            reject('ERROE: JS went error')
        }
    },1000)
})
///  it is same time of then and catch which is wait for a task done or not 
// if task done it move ahead other it will give error there at insnt

 async function consumePromiseFive(){
try 
{
    const response= await promiseFive
    console.log(response);
} catch (error) 
{
    console.log(error);
    
}
 }
 consumePromiseFive()




 ///
//  async function getAllUser() {
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log(error);
    
//    }
     
//  }
//  getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')

.then((response) => {
  return response.json()
})
.then((data)=>{
    console.log(data); 
})
.catch((error)=>
    console.log(error)
)

         

    
 