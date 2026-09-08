const arr = [1, 2, 3, 4, 5, 6]
const result= arr.filter((num) => num > 2)
console.log(result);

//USING ARROW FUNCTION

// const result2=arr.filter((num)=>{
//     return num>4
// })
//console.log(result2);

//FILTER WITH IF ELSE
const newarr=[]
const result2=arr.filter((num)=>{
    if(num>4)
    {
        return newarr.push(num)
    }
})
console.log("new array created:--",result2);

// map() is used to transform 
// every element and returns a new array, while 
// filter() is used to select elements based on a
//  condition and returns a new array 
// containing only the matching elements.

const result3=arr.map((num)=>{
    return num
 })

console.log("Map Implemantation:--",result3);
