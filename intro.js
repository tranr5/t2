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

// console.log(arrayifyString("they is it"))



function calculateCube(num) {
    return num*num*num
}

// console.log(calculateCube(5))

// function isaVowel(char) {
//     vowel = ["a","A","e","E","i","I","o","O","u","U"]
//     for (let i = 0; i<vowel.length; i++) {
//         if (char === vowel[i]) {
//         console.log("is a vowel")    
//         return 
//         }
        
//     }
// console.log("no")
// }

// isaVowel("e")

// function getTwo(one,two) {
//     return [one.length,two.length]
// }

// console.log(getTwo("here","thereerere"))






// function sumArray(arr) {
//     sum = 0
//     for (let i = 0; i<arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum;
// }
// console.log(sumArray([2, 3, 4, 5, 6]));

// sees if number is prime or not
// function checkPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i=2; i<=Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true;


// }

// function printPrimes(num) {
//     arrPrime = [];
//     for (let i = 0; i < num; i++) {
//         if (checkPrime(i)) {
//             arrPrime.push(i);
//         }
    
//     }
// return arrPrime
// }
// console.log(printPrimes(600))


// function printLongestWord(word) {
//     let longest = word[0]
//     for(let i = 1; i < word.length; i++) {
//         if (longest.length < word[i].length) {
//             longest = word[i]
//         }
//     }
//     return longest
// }




// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


