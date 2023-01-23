'use strict';

const fs = require('fs');

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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year) {
    // Write your code here
    if (year === 1800 || year === 1900 || year === 1700) return "12.09." + year;
    else if (year === 1918) return "26.09." + year;
    else {
        const date = new Date(year, 0, 256);
        let finalDate;
        let month = '0' + (Number(date.getMonth()) + 1);
        finalDate = date.getDate() + '.' + month + '.' + date.getFullYear();
        console.log(finalDate);
        return finalDate;
    };
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}