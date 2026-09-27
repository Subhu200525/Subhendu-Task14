// Task 14: JavaScript Loops

// Given number
let number = 153;

console.log("Number :- " + number);


// 1. Sum of its digits
let digitNumber = 153;
let digitSum = 0;
let temp = digitNumber;

while (temp > 0) {
    let digit = temp % 10;
    digitSum = digitSum + digit;
    temp = Math.floor(temp / 10);
}

console.log("Sum of its digits: " + digitSum);


// 2. Check Armstrong number
let armstrongNumber = 153;
let armstrongSum = 0;
let armstrongTemp = armstrongNumber;

while (armstrongTemp > 0) {
    let digit = armstrongTemp % 10;
    armstrongSum = armstrongSum + (digit ** 3);
    armstrongTemp = Math.floor(armstrongTemp / 10);
}

if (armstrongSum === armstrongNumber) {
    console.log("Is it an Armstrong number? Yes");
} else {
    console.log("Is it an Armstrong number? No");
}


// 3. Check Prime number
let primeNumber = 153;
let isPrime = true;

if (primeNumber < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Is it a prime number? Yes");
} else {
    console.log("Is it a prime number? No");
}


// 4. Print all factors
let factorNumber = 153;
let factors = "";

for (let i = 1; i <= factorNumber; i++) {
    if (factorNumber % i === 0) {
        factors = factors + i + ", ";
    }
}

console.log("Factors: " + factors.slice(0, -2));