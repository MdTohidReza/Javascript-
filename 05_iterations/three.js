// for of

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) 
{
//     console.log(num);
    
 }

const greetings = "Hello world"
for (const greet of greetings) 
{
    //console.log(`each char is ${greet}`);
       
}

// maps

const map = new Map()
map.set('NPL',"NEPAL");
map.set('USA',"united state of america");
map.set('UAE',"united arab emirates");
map.set('NPL',"NEPAL");

//console.log(map);

for (const [key,value] of map) {
   // console.log(key,':-',value);
    
}

const myObject ={ 
    'game1':'NFS',
   ' game2':'snake'
}

// for (const  [key, value] of myObject) {
//     console.log(key,':-',value);
// }
