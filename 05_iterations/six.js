// const coding = ["js","python","ruby","cpp"]

//   const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
    
// })
// console.log(values);


const myNumbers =[1,2,3,4,5,6,7,8,9,10]

//  const newNums=myNumbers.filter((num)=> {
//      return num > 4
//  })



const newNums = []
myNumbers.forEach((num) =>{
    if(num>4)
    {
        newNums.push(num)
    }
})
 console.log(newNums);
 
