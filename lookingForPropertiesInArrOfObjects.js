/*
Make a function that looks through an array of objects (first argument) and returns an array of 
all objects that have matching name and value pairs (second argument). Each name and value pair of 
the source object has to be present in the object from the collection if it is to be included in 
the returned array.
*/

function whatIsInANname(arr,obj){
/*
 1# To iterate through an object I can use "for...in" loop;

let getObjKey2ndArg=[];
let GetObjValue2ndArg=[];
let anArr=[];
if(getObjKey2ndArg>=1){
for (const key of Object.keys(obj)){
    getObjKey2ndArg.push(key); //property name in an array
    GetObjValue2ndArg.push(obj[key]); //values in an array
}
console.log(`The keys of 2nd object ${getObjKey2ndArg}`)
console.log(`The values of 2nd object ${GetObjValue2ndArg}`)

console.log(`-----Debugging-----`);

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
} 
else {
    arr.filter(function(x){
        console.log(x.hasOwnProperty(obj.this))
    })
}
*/
// ##### above code was written a week ago and now I came back and saw some solution on freecodecamp.oou
let sourceKey=Object.keys(obj);
console.log(sourceKey);
let newArr=[];
arr.filter(function(obj){
    for(let i=0;i<sourceKey.length;i++){
        //check if Collection object has same VALUE as given obj
        
        if(obj[sourceKey]==sourceKey){
            console.log('I\'m true');
            newArr.push(obj[sourceKey]);
        } else{
            console.log('I\'m false :(');
        }
        return newArr;
    }
})

}
let collection=[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
let source={ last: "Capulet" };
console.log(whatIsInANname(collection,source));
