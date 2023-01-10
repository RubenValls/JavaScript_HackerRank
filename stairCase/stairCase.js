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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    let stairArray = Array(n).fill(' ');
    
    while(n>0){
        stairArray[n-1] = '#';
        const chairString = stairArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        );
        console.log(chairString);
        n--;
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
