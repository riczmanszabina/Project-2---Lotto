import { data } from './fileProcess.js'
import { readLottoStatics } from './fileProcess.js'

//A három legkisebb összegű számsorok

//otos.csv fájl beolvasása.
if (!data.isReaded) {
    readLottoStatics()
}

//Elkészítek egy classt. Ennek az objektumaiba mentem majd az eredményt.
class Lowest {
    constructor(sumResult, indexNum, lottoNumber) {
        this.sumResult = sumResult;
        this.indexNum = indexNum;
        this.lottoNumber = lottoNumber;
    }
}

//Létrehozok egy üres objektumot.
let lottoNumSums = {};

//Az üres objektumot feltöltöm az összes lottószámhúzás összegeivel.
for (let i = 0; i < data.lottoStatics.length; i++) {
    let tempNumber = 0
    for (let j = 11; j < 16; j++) {
        tempNumber += parseInt(data.lottoStatics[i][j])
        lottoNumSums[i] = tempNumber
    }
}

//Létrehozok három objektumot, amikben eltárolom az eredményeket.
let firstLowest = new Lowest(lottoNumSums[0], 0, []);
let secondLowest = new Lowest(lottoNumSums[0], 0, []);
let thirdLowest = new Lowest(lottoNumSums[0], 0, []);

//Első legkisebb összeg.
for (let prop in lottoNumSums) {
    if (firstLowest.sumResult > lottoNumSums[prop]) {
        firstLowest.sumResult = lottoNumSums[prop];
        firstLowest.indexNum = prop;
    }
}

//Második legkisebb összeg.
for (let prop in lottoNumSums) {
    if (secondLowest.sumResult > lottoNumSums[prop] && lottoNumSums[prop] > firstLowest.sumResult) {
        secondLowest.sumResult = lottoNumSums[prop];
        secondLowest.indexNum = prop;
    }
}

//Harmadik legkisebb összeg.
for (let prop in lottoNumSums) {
    if (thirdLowest.sumResult > lottoNumSums[prop] && lottoNumSums[prop] > secondLowest.sumResult) {
        thirdLowest.sumResult = lottoNumSums[prop];
        thirdLowest.indexNum = prop;
    }
}

//Az első, második, harmadik legkisebb összeghez tartozó számok.
for (let i = 11; i < 16; i++) {
    firstLowest.lottoNumber.push(data.lottoStatics[firstLowest.indexNum][i])
    secondLowest.lottoNumber.push(data.lottoStatics[secondLowest.indexNum][i])
    thirdLowest.lottoNumber.push(data.lottoStatics[thirdLowest.indexNum][i])
}


//Kiíratás
console.log(firstLowest.sumResult)
console.log(firstLowest.indexNum)
console.log(firstLowest.lottoNumber)

console.log(secondLowest.sumResult)
console.log(secondLowest.indexNum)
console.log(secondLowest.lottoNumber)

console.log(thirdLowest.sumResult)
console.log(thirdLowest.indexNum)
console.log(thirdLowest.lottoNumber)
