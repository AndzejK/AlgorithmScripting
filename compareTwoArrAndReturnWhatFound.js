
function printDash(){
    let dash="-";
    for (let i=0;i<20;i++){
        dash+="-"
    }
    console.log(dash);
}
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

    //Check if two arrays completly different
    if(arr1.length!=arr2.length){
        //Find which is bigger
        if(arr1.length>arr2.length){
            let arrWithTheSameValues=[];
            let arrDiffValues=[];
            if(arr2.length==0){
                arrDiffValues=[...arr1];
            }
            for(let i=0;i<arr2.length;i++){
                if(arr1.indexOf(arr2[i])==-1){
                    arrDiffValues.push(arr2[i]);
                }else{
                    arrWithTheSameValues.push(arr2[i]);
                }
            } if(arrDiffValues.length==0){
                for(let i=0;i<arr1.length;i++){
                    if(arr2.indexOf(arr1[i])==-1){
                        arrDiffValues.push(arr1[i]);
                    }
                } newArr=[...arrDiffValues];
            }
             else if(arrWithTheSameValues.length==0){
               newArr=[...arrDiffValues,...arr1];
            } else if(arrDiffValues.length==0){
                for(let j=0;j<arr1.length;j++){
                    if(arr2.indexOf(arr1[j])==-1){
                        arrDiffValues.push(arr1[j])
                    }
                }
            } newArr;
   
        }else{
            let arrWithTheSameValues=[];
            let arrDiffValues=[];
            if(arr1.length==0){
                arrDiffValues=[...arr2];
            }
            for(let i=0;i<arr1.length;i++){
                if(arr2.indexOf(arr1[i])==-1){
                    arrDiffValues.push(arr1[i]);
                }else{
                    arrWithTheSameValues.push(arr1[i]);
                }
            }
            if((arrWithTheSameValues.length==0)){
               newArr=[...arrDiffValues,...arr2];
            }else if(arrDiffValues.length==0){
                for(let j=0;j<arr2.length;j++){
                    if(arr1.indexOf(arr2[j])==-1){
                        arrDiffValues.push(arr2[j])
                    }
                }
            }
            newArr=[...arrDiffValues];
        }
    } else {
        let arrWithTheSameValues=[];
        let arrDiffValues=[]; 
        for(let i=0;i<arr1.length;i++){
            if(arr2.indexOf(arr1[i])==-1){
                arrDiffValues.push(arr1[i]);
            }else {
                arrWithTheSameValues.push(arr1[i])
            }
        } arrDiffValues;
        for(let i=0;i<arr2.length;i++){
            if(arr1.indexOf(arr2[i])==-1){
                arrDiffValues.push(arr2[i]);
            }else {
                arrWithTheSameValues.push(arr1[i])
            }
        } newArr=[...arrDiffValues];
    }

return newArr
}


//["andesite", "grass", "dirt", "dead shrub"]

let arr_1 = ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"];
let arr_2 =  ["diorite", "andesite", "grass", "dirt", "dead shrub"];
console.log(diffArray(arr_1,arr_2));
printDash();
function diffArraySolutionFromFreecodecamp(arr1,arr2){
    let newArr=[];
    //create another function in the current function to compare two arrays
    function findSthIn1stArr(ar1,ar2){
        for(let i=0;i<ar1.length;i++){
            if(ar2.indexOf(ar1[i])==-1){
                newArr.push(ar1[i]);
            }
        }
    }
    findSthIn1stArr(arr1,arr2);
    findSthIn1stArr(arr2,arr1);
    return newArr;
}

console.log(diffArraySolutionFromFreecodecamp(arr_1,arr_2));
printDash();