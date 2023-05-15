
// // let student1 = 'Sixtus'
// // let student2 = 'Uty'
// // let student3 = 'Imo'
// // let student4 = 'Grace'

// let student_names = ['Sixtus',  'Uty',  'Imo',  'Grace']
// console.table(student_names)

// // to add a new item to an array
student_names[4] = "frank"

student_names[student_names.length] = "emem"
student_names[0] = "tommy"
console.log(student_names[2])

let lastEle = student_names[student_names.length - 1]
console.log(lastEle)


// let newArray = new Array('s' 'a')






// // let student_names2 = new Array(4)

// // console.log(student_names2.length)







let fruits = ["mango", "apple", "pineapple", ]
let fruits2 = ["cherries", "mango", "watermelon",  "mango" ]

let allFruits = fruits.concat(fruits2)

// console.log(fruits)

// console.log("Array length : ", fruits.length)

// // //  INSERTION
// fruits.push('apple')
// fruits.unshift('orange')



// // REMOVAL
// fruits.pop()
// fruits.shift()


// // Other Arrays method
// let indexofElement = fruits.indexOf('mango')
// console.log('The index of mango is', indexofElement)
// console.log('The last index of mango is', lastindexofElement)


//  To change a name to an array
const full_name = 'Mr,Sixtus,Utibe';

let strArray = full_name.split(",")

console.log(strArray)

// from a string to an array 
const arr = 'abcdefghi'
let alphabets = arr.split('')

console.log(alphabets)

const arr = ['a', 'b', 'c', 'd', 'e', 'f',];
let sliceArr = arr.slice(1, -1)
let spliceArr = arr.slice(2,1)

console.log(spliceArr)

console.log(sliceArr)
console.log(arr)






const arr = [];

arr.push("favour", "Grace", "sixtus");

console.log(arr); 
let sliceArr = arr.slice(1,)