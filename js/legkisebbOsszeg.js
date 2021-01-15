import { data } from './fileProcess.js'
import { readLottoStatics } from './fileProcess.js'
import { LegkisebbOsszeg } from './class/LegkisebbOsszeg.js'

//A három legkisebb összegű számsorok

//otos.csv fájl beolvasása.
if (!data.isReaded) {
    readLottoStatics('../resources/data/otos.csv')
}

//Üres objektum létrehozása.
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
let firstLowest = new LegkisebbOsszeg(lottoNumSums[0], 0, []);
let secondLowest = new LegkisebbOsszeg(lottoNumSums[0], 0, []);
let thirdLowest = new LegkisebbOsszeg(lottoNumSums[0], 0, []);

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
$("#result-first-sum").html(firstLowest.sumResult)
$("#result-first-one").html(firstLowest.lottoNumber[0])
$("#result-first-two").html(firstLowest.lottoNumber[1])
$("#result-first-three").html(firstLowest.lottoNumber[2])
$("#result-first-four").html(firstLowest.lottoNumber[3])
$("#result-first-five").html(firstLowest.lottoNumber[4])

$("#result-second-sum").html(secondLowest.sumResult)
$("#result-second-one").html(secondLowest.lottoNumber[0])
$("#result-second-two").html(secondLowest.lottoNumber[1])
$("#result-second-three").html(secondLowest.lottoNumber[2])
$("#result-second-four").html(secondLowest.lottoNumber[3])
$("#result-second-five").html(secondLowest.lottoNumber[4])

$("#result-third-sum").html(thirdLowest.sumResult)
$("#result-third-one").html(thirdLowest.lottoNumber[0])
$("#result-third-two").html(thirdLowest.lottoNumber[1])
$("#result-third-three").html(thirdLowest.lottoNumber[2])
$("#result-third-four").html(thirdLowest.lottoNumber[3])
$("#result-third-five").html(thirdLowest.lottoNumber[4])