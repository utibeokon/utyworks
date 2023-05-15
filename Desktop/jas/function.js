// //  function declaration


function getUserDetails(name, hobby, career){
    console.log(`Hello there, my name is ${name}. i like ${hobby} alot and i want to be a ${career}.`)

}
getUserDetails("frank", "reading", "doctor")
getUserDetails("mary", "sky diving", "pilot")


function addNumbers(num1, num2){
    let sum = num1 + num2;
    return sum
}
let result = addNumbers(5,6);
if(result < 10){
    console.log("You win")
}else{
    console.log("You lose")
}



// Function expression
const getAge = function(age){
    console.log(age)
}
getAge(30)


// Arrow Function
const getAge1 = (age) => console.log(age)

getAge(20)

const getAge2 = (age, name) => age + 1;

const sum_age = getAge(20)
console.log(sum_age)


// IIFE

(function(name){
    console.log("call me now", name)
})("king")


function showUserDetails(name, age){
    console.log(name, age)
}
showUserDetails("GRACE")