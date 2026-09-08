//It takes all elements of an array, processes them one by one, and produces one final result.
const arr=[1,2,3,4,5]

const result= arr.reduce((acc,sum)=>{
    return  acc+sum
},0);

console.log(result)