let y = 10;
for (let x = 1; x <= 10; x++){
    let result = x * y;
    console.log(`${y} * ${x} = ${x * y}`)
}
    



question1
let av1 = average(5,10)
function average(a,b){
  return (a+b)/2;
}

console.log(av1)

question2
const arr = [5, 10, 2, 8, 3];
function largest(a){
  let num = 0;
  for (let i = 0; i < a.length; i++){
    if (a[i] >= num){
      num = a[i];
    }
  }
  return num;
}
console.log(largest(arr));

question 3
 function reverseString(str){
   console.log(str.split("").reverse().join(""));
 }
reverseString("hello")

question8
const arr = [3, 4, 6, 8];
let sum = 0;
for (let number of arr) {
    sum += number;
}
average = sum / arr.length;
console.log(average);


question10
let namesOfIndividuals = [{name: 'John'}, {name: 'Alice'}, {name: 'Bob'}];

let filterByName = namesOfIndividuals.filter((item) => item.name == 'Bob')

console.log(filterByName);

question9
let fruits = ['apple', 'banana', 'pear', 'orange'];

let findFruits = fruits.find((item) => item.length > 5);

console.log(findFruits);

// question4
let fruits = ['apple', 'banana', 'pear', 'orange'];

let filterOfFruits = fruits.filter((item) => item.length > 5);

console.log(filterOfFruits);

// queston6
function checkPrime(a){
    if (a===1){
        return false;
    }else if(a === 2){
        return true;
    }else{
        for(let i = 2; i < a; i++){
            if(a % i === 0){
                return false;
            }
        }
        return true;
    }
}

console.log(checkPrime(19));

question7
function isPalindrome(string){
    let palindrome = string.split('').reverse().join('');
    if(string === palindrome){
        console.log(`true`);
    }else{
        console.log(` false`);
    }
}
isPalindrome('racecar');



