import { array } from './fileProcess.js'
import { lottoStatics } from './fileProcess.js'

//A három leggyakrabban húzott számok és hányszor lettek húzva.

//otos.csv fájl beolvasása.
lottoStatics()

//Egy üres objektum létrehozása.
let lottoNum = {};

//Egy objektum létrehozása, amelybe az eredmények kerülnek.
let num = {
    first: 0,
    firstCounter: 0,
    second: 0,
    secondCounter: 0,
    third: 0,
    thirdCounter: 0
};

//Objektumba properties-ek generálása 1-től 90-ig, mindegyiket 0-a értékkel.
for (let i = 1; i <= 90; i++) {
    lottoNum[i] = 0;    
}

//Egy dupla for loop, az első része végigfut a beolvasott adatt összes során.
//A második része minden sor 11-16. oszlopán (az öt darabb húzott szám)
//Majd a lottoNum object properties értékeit 1-el növeli azok alapján, amiket a beolvasott adatban talál.
for (let i = 0; i < array.lottoStatics.length; i++) {
    for (let j = 11; j < 16; j++) {
        lottoNum[array.lottoStatics[i][j]] += 1
    }
}

//Az első legtöbbet húzott szám meghatározása és hogy hányszor húzták.
for (let prop in lottoNum) {
    if (num.firstCounter < lottoNum[prop]) {
        num.firstCounter = lottoNum[prop];
        num.first = prop;
    }
}

//A második legtöbbet húzott szám meghatározása és hogy hányszor húzták.
for (let prop in lottoNum) {
    if (num.secondCounter < lottoNum[prop] && lottoNum[prop] < num.firstCounter) {
        num.secondCounter = lottoNum[prop];
        num.second = prop;
    }
}

//A harmadik legtöbbet húzott szám meghatározása és hogy hányszor húzták.
for (let prop in lottoNum) {
    if (num.thirdCounter < lottoNum[prop] && lottoNum[prop] < num.secondCounter) {
        num.thirdCounter = lottoNum[prop];
        num.third = prop;
    }
}

//HTML elemek értékeinek fetöltése.
$('#first-num').html(num.first);
$('#first-counter').html(num.firstCounter);

$('#second-num').html(num.second);
$('#second-counter').html(num.secondCounter);

$('#third-num').html(num.third);
$('#third-counter').html(num.thirdCounter);