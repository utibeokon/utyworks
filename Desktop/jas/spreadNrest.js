

// function sumOfNumbers(...otherNums){
//     let arrSum = 0, sumOtherNums = 0

//     const arr = [1, 2, 3, 4, 5];
//     for(let i = 0; i < arr.length; i++){
//         arrSum += arr[i]
//     }
//     for(let i = 0; i < otherNums.length; i++){
//         sumOfNumbers += otherNums[i]
//     }
//     let output = `The sum of ${[...arr, ...otherNums]} is `
//     console.log([...arr, ...otherNums].length)
//     return arrSum
// }

// let result = sumOfNumbers(10,2,0)
// console.log(result)










// let fruits = ['apple', 'orange', 'pawpaw', 'berries'];

// const [ item2, item1, ...rest  ] = fruits

// // console.log(item2 )

// const prof = {
//     name: 'Grace',
//     laptop: 'Acer'
// }

// const { gender:g = "Female", ...obj } = prof

// console.log(g)


// function sum(a, ...arr){
//    console.log(arr)
//     return arr.reduce((sum, acc) => sum + acc)
// }


// console.log(sum(1,2,4,10,1))
const nums1 = [1, 2, 10, 1000, 5]
const nums2 = [1, 7, 1, 2000, 5]
const newArr = [...nums1, ...nums2]

const max = Math.max(...newArr)

// console.log(max)







