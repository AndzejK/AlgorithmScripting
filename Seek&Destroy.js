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
    for(let i=1; arguments.length>i;i++){
        if(arguments.length<=1){
            newArr=[...arr];
        }else{
            newArr=arr.slice()
            for(let j=0;j<arr.length;j++){
                if(arr[j]==arguments[i]){
                    newArr.splice(arr[j],1)
                }
            }
        }
    }
   
    return newArr;
}
let anArr=[1,2,3,1,2,3];
console.log(destroyer(anArr,2,3));