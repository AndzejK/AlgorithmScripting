/*
I have an array of two numbers. Return the sum of those two numbers plus 
the sum of all the numbers between them. The lowest number will not always come first.

#Examples:
[4,1]
1. 4+1=5
2. 4...1 => 1...4 => 2+3=5
3. sumAll([4,1]) should return 10 (5+5);
----
[5,10]
1. 5+10=15
2. 5...10 => 6+7+8+9=30
3. sumAll([4,1]) should return 45 (15+30);
*/
let simpleArr=[5,10];

function sumAll(arr){
    arr.sort((x,y)=>x-y);
    let sumRange=0;
    for(i=arr[0]+1;i<arr[arr.length-1];i++){
        sumRange+=i;
    }
    return (arr.reduce((x,y)=>x+y)+sumRange);
}

console.log(sumAll(simpleArr));