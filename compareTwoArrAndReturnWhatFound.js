/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

#examples
[1,2,3,5],[1,2,3,4,5] => [4]
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
["diorite", "andesite", "grass", "dirt", "dead shrub"]               => ["pink wool"]
*/

function diffArray(arr1,arr2){
    let newArr=[];
   // arr1.sort((x,y)=>x-y);
    //arr2.sort();
    if(arr1.length>=arr2.length){
        for(let i=0; i<arr2.length; i++){
            if(arr2.indexOf(arr1[i])==-1){
                newArr.push(arr1[i]);
            }
        }
       /* for(let j=0; j<arr2.length; ++j){
            if(arr1.indexOf(arr2[j])==-1){
                newArr.push(arr2[j]);
             }
             }
    */} else if (arr1.length<=arr2.length){
        for(let i=0; i<arr1.length; i++){
            if(arr1.indexOf(arr2[i])==-1){
                newArr.push(arr2[i]);
            }
        }
       /* for(let i=0; i<arr2.length; i++){
            if(arr2.indexOf(arr1[i])==-1){
                newArr.push(arr1[i]);
            }
        }*/
    } 
    return newArr
}

let arr_1 = [];
let arr_2 =  ["snuffleupagus", "cookie monster", "elmo"];
console.log(diffArray(arr_1,arr_2));
