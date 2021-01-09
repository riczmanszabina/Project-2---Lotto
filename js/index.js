import {array} from './fileProcess.js'
import {lottoStatics} from './fileProcess.js'

//A két legutolsó heti lottószámok.

//otos.csv fájl beolvasása.
lottoStatics()

//Array-ok definiálása.
let recentNumbers = new Array();
let lastWeekNumbers = new Array();

//Array-ok feltöltése a meghatározott értékekkel a beolvasott fájlból.
for (let i = 11; i < 16; i++) {
    recentNumbers.push(array.lottoStatics[0][i])
    lastWeekNumbers.push(array.lottoStatics[1][i])
}

//HTML elemek értékeinek feltöltése.
$('#recent-one').html(recentNumbers[0]);
$('#recent-two').html(recentNumbers[1]);
$('#recent-three').html(recentNumbers[2]);
$('#recent-four').html(recentNumbers[3]);
$('#recent-five').html(recentNumbers[4]);


$('#last-one').html(lastWeekNumbers[0]);
$('#last-two').html(lastWeekNumbers[1]);
$('#last-three').html(lastWeekNumbers[2]);
$('#last-four').html(lastWeekNumbers[3]);
$('#last-five').html(lastWeekNumbers[4]);