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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let newString;
    let hours;
    
    if(Number(s[0] + s[1]) >= 12 && s.includes('AM')){
        newString = s.replace('AM','');
        hours = Number(s[0] + s[1]) - 12;
        hours === 0
            ? newString = "0" + hours + newString.slice(2) 
            : newString = hours + newString.slice(2); 
    }else{
        newString = s.replace('AM','');
    } 
    
    if(s.includes('PM')){
        newString = s.replace('PM','');
        
        if(Number(s[0] + s[1]) !== 12){    
            hours = Number(s[0] + s[1]) + 12;
            newString = hours + newString.slice(2);
        }   
    }   
    
    return newString;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
