// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// const result = fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    // })
    // .catch(error => {
    //     console.log(error);
    // });
    // console.log(result) //  return on console fulfilled something

    // .then(response =>{
    //     console.log(response.ok)
    //     console.log(response.status)
    // })  
    // work correctly 

    // now workm with response.json
    // .then(response => {
    //     return response.json()
    // })
    // .then(data => {
    //     console.log(data)
    // })
    
    //without any extra then 

    // .then(response =>{
    //     const data= response.json()
    //     console.log(data)
    // })

    //for using foreach 

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });