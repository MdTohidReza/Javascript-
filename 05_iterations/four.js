const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}
for (const key in myObject) {
  //console.log(`${key} is shortcut for ${myObject[key]}`);
     
}

const programming = ["js","cpp","rb","java","py"]
for (const key in programming) {
    //console.log(programming[key]);
    
}

const map = new Map()
map.set('NPL',"NEPAL")
map.set('USA',"united state of america")
map.set('UAE',"united arab emirates")
map.set('NPL',"NEPAL")
for (const key in map) {
   console.log(key);
   
}