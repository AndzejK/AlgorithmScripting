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
console.log(`-----Debugging-----`);
if(getObjKey2ndArg<=1){
arr.filter(function(x){
    console.log(`applying filter() method on the arr of objects and START my CALLBACK fn`);
    for(let i=0;i<getObjKey2ndArg.length;i++){
    console.log(`FOR iteration to compare my 2nd argument of main fn to 1st argument my getObjKey2ndArg ${getObjKey2ndArg[i]} and my GetObjValue2ndArg ${GetObjValue2ndArg[i]}`)
        for(const key of Object.keys(x)){
    console.log(`FOR...OF iteration the array of obj: ${Object.keys(x)}`)
            if(key==getObjKey2ndArg[i]&&GetObjValue2ndArg[i]==x[key]){
    console.log(`when data passess IF statement, key: ${key} == ${getObjKey2ndArg[i]} && ${GetObjValue2ndArg[i]}== ${x[key]}`)
                //anArr.push({[key]:x[key]})// using square brackets for property name I can extract orinal name of an Object's property name.
    console.log(`I'm pushing whole obj to new array each time when my IF statement is TRUE ${x}`)
                anArr.push(x)
            }
        }
    }
    
})
} else{
   arr.map(function(x){
    let someArr=[];
       for(const key of Object.keys(x)){
          
           if((getObjKey2ndArg.filter(y=>y==key))){
               if(GetObjValue2ndArg.filter(function(z){
                    if(z==x[key]){
                        console.log(z);
                    }
               })
                  
            
                } 
            }
        })
    }
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

let collection=[{"a": 1, "b": 2, "c": 3}];
let source={ "a": 1, "b": 9999, "c": 3};
console.log(whatIsInANname(collection,source));
