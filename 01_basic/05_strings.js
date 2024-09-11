const name = "Tohid"
const repoCount= 3
console.log(name + " Reza" + " has"+ repoCount);
//console.log(name+ repoCount+ " Reza"); This is outdated format to add string using(+ or ,) sign
// we use backtex to add stings in modern day

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// this is known as string interpolation
// `` is below of esc key
// Another method to declare sting is 

 const gameName = new String('Tohid-reza')
 console.log(gameName[0])
 // [0] is not an array,[0] ma T aauxa jo ki keyvalue pair ho T ko

 console.log(gameName.__proto__)
 // this for to see prototype which is syntax

 console.log(gameName.length);
 // this is to find the length 

 console.log(gameName.toLocaleUpperCase());
 // this is for to conver case from one to another

 console.log(gameName.charAt(0));
 console.log(gameName.charAt(1));
 // this is to find the position of character

 console.log(gameName.indexOf('T'));
 // this is to find at what position does the charecter is placed

 const newString = gameName.substring(0,4);
 console.log(newString)
 // this to display the charecter form 0 to 4 but the charcter of last digit i.e 4 not included

 const anotherString = gameName.slice(-4,4)
 console.log(anotherString)
 // in this we can use -ve value

 const newStringOne = "   Tohid     "
 console.log(newStringOne);
 console.log(newStringOne.trim());
 // this is used to remove extra space 

 const url = "https://tohid.com/harishalone%20reza"
 console.log(url.replace('%20','-'))
 console.log(url.includes('najrana'));
 console.log(gameName.split('-'))
 // this is for replace  and to check the data is include od not 


