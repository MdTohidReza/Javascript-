const myNums = [1,2,3]

//  const myTotal = myNums.reduce( function(acc,currval) {
//     console.log(`acc: ${acc} and currval:${currval}`);
//   return acc+currval
//  },0)

const myTotal = myNums.reduce((acc,currval) => acc+currval,0)
//  console.log(myTotal);


 const shoppingCart = [
      {
        itemName: "js course",
        price:299
      },

      {
        itemName: "python course",
        price:599
      },

      {
        itemName: "MAD",
        price:999
      },

      {
        itemName: "data science",
        price:1299
      },

 ]
//  const shop = shoppingCart.reduce((acc,item) => acc + item.price,0)
const shop = shoppingCart.filter((SC) => {
    return SC.price>=999 && SC.itemName === "MAD"
})
  console.log(shop);


  