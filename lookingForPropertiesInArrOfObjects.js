/*
Make a function that looks through an array of objects (first argument) and returns an array of 
all objects that have matching name and value pairs (second argument). Each name and value pair of 
the source object has to be present in the object from the collection if it is to be included in 
the returned array.
*/

function whatIsInANname(arr,obj){
/*
 1# To iterate through an object I can use "for...in" loop;
*/
let anArr=[];
//FOR loop to iterate through the array
 for(let i=0;i<arr.length;i++){
     //the 2nd argument consist of object and that object can have as much as it possible properties and each of them needs to be check too
     for (const ArrObjKey in arr[i]) {
         for(const ObjKey in obj){
             console.log(`ObjKey in obj(2nd arg) ${obj.ObjKey}`)
            if(arr[i][ArrObjKey]==obj.ObjKey){
                console.log(`${ArrObjKey}:${arr[i][ArrObjKey]}`)
                //anArr.push({ first:arr[i].first, last:obj.last})
            }
         }
     }
 } 
 return anArr;
}

let collection=[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
let source={ last: "Capulet" };
console.log(whatIsInANname(collection,source));
