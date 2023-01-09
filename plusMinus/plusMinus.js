'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let possitiveNumbers = 0;
    let negativeNumbers = 0;
    let nillNumbers = 0;
    
    arr.forEach(number =>{
        number > 0
            ? possitiveNumbers++
            : number < 0
                ? negativeNumbers++
                : nillNumbers++
    })

    console.log(possitiveNumbers/arr.length);
    console.log(negativeNumbers/arr.length);
    console.log(nillNumbers/arr.length);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}