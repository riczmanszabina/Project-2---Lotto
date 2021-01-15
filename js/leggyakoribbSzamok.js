import { data } from './fileProcess.js'
import { readLottoStatics } from './fileProcess.js'

//A három leggyakrabban húzott számok és hányszor lettek húzva.

//otos.csv fájl beolvasása.
if (!data.isReaded) {
    readLottoStatics('../resources/data/otos.csv')
}

//Egy üres objektum létrehozása.
let pulledNums = {};

//Objektumba properties-ek generálása 1-től 90-ig, mindegyiket 0-a értékkel.
for (let i = 1; i <= 90; i++) {
    pulledNums[i] = 0;    
}

//LottoNum object properties értékeit 1-el növeli azok alapján, amiket a beolvasott adatban talál.
for (let i = 0; i < data.lottoStatics.length; i++) {
    for (let j = 11; j < 16; j++) {
        pulledNums[data.lottoStatics[i][j]] += 1
    }
}

//Egy objektum létrehozása, amelybe az eredmények kerülnek.
let result = {
    firstNumber: 0,
    firstCounter: 0,
    secondNumber: 0,
    secondCounter: 0,
    thirdNumber: 0,
    thirdCounter: 0
};

//Az első legtöbbet húzott szám meghatározása és hogy hányszor húzták.
for (let prop in pulledNums) {
    if (result.firstCounter < pulledNums[prop]) {
        result.firstCounter = pulledNums[prop];
        result.firstNumber = prop;
    }
}

//A második legtöbbet húzott szám meghatározása és hogy hányszor húzták.
for (let prop in pulledNums) {
    if (result.secondCounter < pulledNums[prop] && pulledNums[prop] < result.firstCounter) {
        result.secondCounter = pulledNums[prop];
        result.secondNumber = prop;
    }
}

//A harmadik legtöbbet húzott szám meghatározása és hogy hányszor húzták.
for (let prop in pulledNums) {
    if (result.thirdCounter < pulledNums[prop] && pulledNums[prop] < result.secondCounter) {
        result.thirdCounter = pulledNums[prop];
        result.thirdNumber = prop;
    }
}

//HTML elemek értékeinek fetöltése.
$('#result-first-number').html(result.firstNumber);
$('#result-first-counter').html(result.firstCounter);

$('#result-second-number').html(result.secondNumber);
$('#result-second-counter').html(result.secondCounter);

$('#result-third-number').html(result.thirdNumber);
$('#result-third-counter').html(result.thirdCounter);