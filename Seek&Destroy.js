/*
Having an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.
*/

            //The arguments object
/*
arguments is an Array-like object accessible inside functions that contains 
the values of the arguments passed to that function.
*/
function destroyer(arr){
    let newArr=[];
    if(arguments.length<=1){
        newArr=[...arr];
    }else{
        let copyArr=arr.slice();
        for(let i=1; arguments.length>i;i++){
           for(let j=0; copyArr.length>j;j++){
               if(arr[j]==arguments[i]){
                   arr.splice(j,1);
                   j--; //Decrementing the index variable so it does not skip the next item in the array.
               }
           }
         }
    } 

    return newArr=[...arr];
}
let anArr=[3, 5, 1, 2, 2];
console.log(destroyer(anArr,2,3,5));