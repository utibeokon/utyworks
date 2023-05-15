// const arr = ['apple', 'straw berries', 'apple', 'pawpaw']

// map forEach  sort includes

// console.log(arr.indexOf('apple',1))

// console.log(arr.includes('app'))

// const Fruits = arr.forEach((item, index, array)=>{
//     console.log(item, index, array)
// })

// arr.forEach((item, index, array) => console.log(item))

// Array reverse
// let arr = [1,2,3,4,5];
// let newarr = []
// let count = arr.length
// for(let i = 0; i < arr.length; i++){
// newarr[i] = arr[--count]
// }
// console.log(newarr)
// console.log(arr.reverse())






// let arr = [1, 2, 3, 4, 5];
// let newArr = [];
// let count = arr.length
// for(let i = 0; i < arr.length; i++){
//     newArr[i] = arr[--count]
// }

// console.log(newArr)

// console.log(arr.reverse())

let data = [
    {
        name: 'Frank',
        age: 34,
        hobbies: ['singing', 'dancing', 'reading' ],
    },
    {
        name: 'Smith',
        age: 20,
        hobbies: ['singing', 'dancing', 'reading' ],
    },
    {
        name: 'Tommy',
        age: 13,
        hobbies: ['singing', 'dancing', 'reading' ],
    },
]  


// data.map((item) => console.log(item.age + 1))

let findAge = data.find((item) => item.age < 30)
let filterAge = data.filter((item) => item.age < 30)

// console.log(findAge)
// console.log(filterAge)


let nums = [12, 13, 5, 8, 9, 10]

let sum = nums.reduce((sum, acc) => sum + acc)

console.log(sum)
