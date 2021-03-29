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
let getObjKey2ndArg=[];
let GetObjValue2ndArg=[]
for (const key of Object.keys(obj)){
    getObjKey2ndArg.push(key); //property name in an array
    GetObjValue2ndArg.push(obj[key]); //values in an array
}
console.log(`The keys of 2nd object ${getObjKey2ndArg}`)
console.log(`The values of 2nd object ${GetObjValue2ndArg}`)
let anArr=[];
arr.filter(function(x){
    for(let i=0;i<getObjKey2ndArg.length;i++){
        for(const key of Object.keys(x)){
            if(key==getObjKey2ndArg[i]&&GetObjValue2ndArg==x[key]){
                
             anArr.push({[key]:x[key]})// using square brackets for property name I can extract orinal name of an Object's property name.
            }
        }
    }
    
})
//FOR loop to iterate through the array
 /*for(let i=0;i<arr.length;i++){
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
 } */
 return anArr;
}

let collection=[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }];
let source={ "apple": 1 };
console.log(whatIsInANname(collection,source));
