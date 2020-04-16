let res34 = 
   [1, 2, 3, 4, 5].map(i => i + 1)
                  .filter(function(i) { return i % 2 === 0})
                  .reduce(function(accu, i) { return accu + i}, 0)

let res34 = 
  [1, 2, 3, 4, 5].map(i => i + 1)
                 .filter(i => i % 2 === 0)
                 .reduce((accu, i) => accu + i, 0 )



let res28 = [1, 2, 3, 4, 5].map(i => i * 2)
 /* filter */
let res33 = [4, 5, 6, 7, 8].filter(i => i % 3 === 0)

 /* reduce */
let x36 = [1, 2, 3, 4, 5].reduce((accu, i) => accu + i, 0)

let x41 = [1, 2, 3, 4, 5].reduce(
  function(accu, i) {},
   0  //init值 如果沒有預設0 就會把陣列裡的1當作init, 從2開始做reduce的運算,（）reduce在ruby叫做fold?
)
console.log(x36)


//費波那契數列


// function foo(x, y, z) {
//   return x + y + z
// }
// curry => Haskell Curry
// function foo(x) {
//   return function(y) {
//     return function(z) {
//       return x + y + z
//     }
//   }
// }
let foo = x => y => z => x + y + z


// let result15 = foo(1)
// console.log(result15)
// let result16 = result15(2)
// console.log(result16)
// let result17 = result16(3)
// console.log(result17)
let result21 = foo(1)(2)(3)

// map, filter <- reduce 推導

// 遞迴
// recursive

// 費波那契數列
// [0, 1, 1, 2, 3, 5, 8, 13, 21]

let ary = [1, 2, 3, 4, 5]
function sum(array) {
  let result = 0
  for(let i = 0; i < array.length; i++) {
    result = result + array[i]
  }
  return result
}
console.log(sum(ary))

function recSum(ary) {
  if(ary.length === 0) { return 0 }
  let [head, ...tails] = ary
  return head + recSum(tails)
}

// function argF(x, ...ys) {
//   console.log(x)
//   console.log(ys)
// }

// let [a, ...b] = [1, 2, 3, 4, 5]