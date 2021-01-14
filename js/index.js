import { data } from './fileProcess.js'
import { readLottoStatics} from './fileProcess.js'

//A két legutolsó heti lottószámok kiírása.

//otos.csv fájl beolvasása.
if (!data.isReaded) {
    readLottoStatics()
}

//Objektum létrehozása kér Array-el.
let result = {
    recent: new Array(),
    lastWeek: new Array()
}

//Array-ok feltöltése a meghatározott értékekkel a beolvasott fájlból.
for (let i = 11; i < 16; i++) {
    result.recent.push(data.lottoStatics[0][i])
    result.lastWeek.push(data.lottoStatics[1][i])
}

//HTML elemek értékeinek feltöltése.
$('#recent-one').html(result.recent[0]);
$('#recent-two').html(result.recent[1]);
$('#recent-three').html(result.recent[2]);
$('#recent-four').html(result.recent[3]);
$('#recent-five').html(result.recent[4]);


$('#last-one').html(result.lastWeek[0]);
$('#last-two').html(result.lastWeek[1]);
$('#last-three').html(result.lastWeek[2]);
$('#last-four').html(result.lastWeek[3]);
$('#last-five').html(result.lastWeek[4]);