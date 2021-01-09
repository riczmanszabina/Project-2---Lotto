import {array} from './fileProcess.js'
import {lottoStatics} from './fileProcess.js'

/*
A két legutolsó heti lottószámok.
*/

lottoStatics()


let recentNumbers = new Array();
let lastWeekNumbers = new Array();

for (let i = 11; i < 16; i++) {
    recentNumbers.push(array.lottoStatics[0][i])
    lastWeekNumbers.push(array.lottoStatics[1][i])
}

console.log(recentNumbers)
console.log(lastWeekNumbers)
