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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let maxSum = 0;
    let minSum = 0;
    
    let minValue = Math.max(...arr);
    let maxValue = Math.min(...arr);
    
    if(minValue === maxValue){
        arr.pop();
        
        let sum = arr.reduce(
            (accumulator, currentValue) => accumulator + currentValue);
        
        console.log(sum + ' ' + sum);
        
    }else{
        let minArray = arr.filter(item => item !== minValue);
        minSum = minArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue);
            
        let maxArray = arr.filter(item => item !== maxValue);
        maxSum = maxArray.reduce(
            (accumulator, currentValue) => accumulator + currentValue);
        
        console.log(minSum + ' ' + maxSum);  
    }
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}