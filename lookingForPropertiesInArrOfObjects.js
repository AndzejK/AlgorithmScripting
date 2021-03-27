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
     for (const prop in arr[i]) {
        if(arr[i][prop]==obj.last){
            anArr.push({last:obj.last})
        }
     }
 } return anArr

}

let collection=[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
let source={last: "Capulet" };
whatIsInANname(collection,source)
