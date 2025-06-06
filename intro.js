// hello 

let x = 25
 x = 100
// console.log(x)

let name = "Randy"
// console.log(name)

function checkSquare(x) {
    const sqrt = Math.sqrt(x);
    if (sqrt % 1 === 0) {
        // console.log("good")
    } else {
        // console.log("not good")
    }
}

function checkSquares(x) {
    return Math.sqrt(x) % 1 === 0
}


// console.log(checkSquares(9))

function checkLimit(x) { //can put checkSqure in
    let perfectSquares = [];
    for (let i = 0; i <= x; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            perfectSquares.push(i)
        }
    }
    return perfectSquares
}

function checkLimits(x) { //can put checkSqure in
    let perfectSquares = [];
    for (let i = 0; i <= x; i++) {
        if (checkSquares(i)) {
            perfectSquares.push(i)
        }
    }
    return perfectSquares
}


// console.log(checkLimit(100))

// function reverseMessage(message) {
//     return message.split("").reverse()
// }

// console.log(reverseMessage("hi dog"))


// function multiplyTogether(a,b=2) {
//     return a*b
// }

// console.log(multiplyTogether(2))

// function getArray(array) {
//     let sum = 0
//     for(let i=0; i<array.length; i++) {
//         sum = array[i] + sum
//     }
//     return sum
// }

// console.log(getArray([2,4,3]))

function arrayifyString(string) {
  let x = string.replace(/[^A-Za-z0-9]+/g, " ");
    let newArr = x.trim().split(" ")
    return newArr;
  //  your code here!
  //  Want an additional challenge? - don't use the built in JS string method Array.split(). 
}

console.log(arrayifyString("they is it"))