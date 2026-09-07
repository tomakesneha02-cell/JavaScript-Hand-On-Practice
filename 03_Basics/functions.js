// function add(a,b){
//     return a+b;

// }

// const result=add(10,10);

// console.log(result);

// // function with object and array in javascript

// function loggedin(username)
// {
//     return `${username} just logged in`
// }
// let a=loggedin("sneha")
// console.log(a)

// spread Operator:  used to  expand the element of array or properties of object 

let spread1 = [1, 2, 3]
let spread2 = [...spread1]
console.log(spread1)
console.log(spread2)


function test(val1,val2,...add)
{
    return add
}

console.log(test(10,20,30))
