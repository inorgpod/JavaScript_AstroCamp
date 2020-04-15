
// function getMax(x, h, c, b, j){
//   let result = Math.min(x, h, c,b,j);
//   console.log(result)
// }


// getMax(200, -3, 10000,-5,0)

// ---
// function add(x, y){
//   return x + y ;
// }

// console.log(add(100, 200))

// function greeting(userName , number){
//   let greeting  = `Hello, ${userName}! ,I receive ${number}.`
//   return greeting
// }

// let sth = greeting('Tai', 20)
// console.log(sth)

// ---下列方法結果會同上但無回傳值 console.log是給使用者看,對電腦無效
// let userName = 'abc'
// let number = '123'

// let greeting  = `Hello, ${userName}! ,I receive ${number}.`

// console.log(greeting)


// function cal(amount) {
//   if (amount >= 1000) {
//     return amount * 0.8
//   } else if (amount >= 100) {
//     return amount * 0.85
//   } else {
//     return amount * 0.9

//   }

// }

// console.log(cal(1000))

// function clac(num) {
//   let discount = 1  預設參數初始值做運算 一般來說看到初始設定值數字1或[]空陣列 可以猜到接下來可能是要做乘法
//   if(num > 1000) {
//     discount = 0.8
//   } else if(num > 100) {
//     discount = 0.9
//   } 
//   return num * discount
// }

// console.log(clac(99))

function getDiscountRate(num) {
  if (num > 1000) {
    return 0.8;
  } else if (num > 100) {
    return 0.85;
  } else {
    return 1;
  }
}
function getTaxRate() {
  return 1.05
}
function clac(num) {
  return num * getDiscountRate(num) * getTaxRate();
}

console.log(clac(2000));