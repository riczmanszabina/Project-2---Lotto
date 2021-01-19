import { data } from './components/fileProcess.js'
import { readLottoStatics } from './components/fileProcess.js'
import { LeghasonlobbSzamok } from './class/LeghasonlobbSzamok.js'

$(document).ready(function () {
    //A leghasonlóbb számsorozatok

    //otos.csv fájl beolvasása.
    if (!data.isReaded) {
        readLottoStatics('../resources/data/otos.csv')
    }

    //Üres array készítése 2D arraynak a számsorokhoz.
    let pulledNums = new Array()

    //2D Array készítése a húzott számokból.
    for (let i = 0; i < data.lottoStatics.length; i++) {
        pulledNums[i] = new Array()
        for (let j = 11; j < 16; j++) {
            pulledNums[i].push(parseInt(data.lottoStatics[i][j]))
        }
    }

    //Ideiglenes segédváltozók deklarálása.
    let tempFirstNumSeries;
    let tempSecondNumSeries;

    //Üres array létrehozása objektumoknak.
    let similarNumbersArray = new Array()

    //Array feltöltése objektumokkal.
    for (let i = 0; i < pulledNums.length; i++) {
        tempFirstNumSeries = pulledNums[i];
        for (let j = 0; j < pulledNums.length; j++) {
            tempSecondNumSeries = pulledNums[j];
            if (tempFirstNumSeries != tempSecondNumSeries) {
                for (let k = 0; k < tempFirstNumSeries.length; k++) {
                    for (let l = 0; l < tempSecondNumSeries.length; l++) {
                        if (tempFirstNumSeries[k] == tempSecondNumSeries[l]) {
                            similarNumbersArray.push(new LeghasonlobbSzamok(tempFirstNumSeries, tempSecondNumSeries, i, j, '', '', 0));
                        }
                    }
                }
            }
        }
    }

    //Hasonlóság számának a megállapítása objektumon belül.
    for (let i = 0; i < similarNumbersArray.length; i++) {
        for (let j = 0; j < similarNumbersArray[i].firstNumSeries.length; j++) {
            for (let k = 0; k < similarNumbersArray[i].secondNumSeries.length; k++) {
                if (similarNumbersArray[i].firstNumSeries[j] == similarNumbersArray[i].secondNumSeries[k]) {
                    similarNumbersArray[i].matchingNumbers++;
                }
            }
        }
    }

    //Objektum deklarálása az eredmény tárolására.
    let result = new LeghasonlobbSzamok([], [], 0, 0, '', '', 0);

    //Objektum feltöltése az eredménnyel.
    for (let i = 0; i < similarNumbersArray.length; i++) {
        if (result.matchingNumbers < similarNumbersArray[i].matchingNumbers) {
            result = { ...similarNumbersArray[i] }
        }
    }

    //Dátumok hozzárendelése az objecthez.
    if (data.lottoStatics[result.firstNumSeriesLine][2]) {
        result.firstNumSeriesDate = data.lottoStatics[result.firstNumSeriesLine][2]
        result.firstNumSeriesDate = result.firstNumSeriesDate.replaceAll(".", "-")
        result.firstNumSeriesDate = result.firstNumSeriesDate.substring(0, (result.firstNumSeriesDate.length - 1))
    } else {
        result.firstNumSeriesDate = "Pontos dátum nem található\n" + data.lottoStatics[result.firstNumSeriesLine][0] + " " + data.lottoStatics[result.firstNumSeriesLine][1] + ". hét"
    }

    if (data.lottoStatics[result.secondNumSeriesLine][2]) {
        result.secondNumSeriesDate = data.lottoStatics[result.secondNumSeriesLine][2]
        result.secondNumSeriesDate = result.secondNumSeriesDate.replaceAll(".", "-")
        result.secondNumSeriesDate = result.secondNumSeriesDate.substring(0, (result.secondNumSeriesDate.length - 1))
    } else {
        result.secondNumSeriesDate = "Pontos dátum nem található<br>" + data.lottoStatics[result.secondNumSeriesLine][0] + "." + data.lottoStatics[result.secondNumSeriesLine][1] + ".hét"
    }

    //HTML elemek értékeinek feltöltése.
    $("#result-first-date").html(result.firstNumSeriesDate);
    $("#result-first-one").html(result.firstNumSeries[0]);
    $("#result-first-two").html(result.firstNumSeries[1]);
    $("#result-first-three").html(result.firstNumSeries[2]);
    $("#result-first-four").html(result.firstNumSeries[3]);
    $("#result-first-five").html(result.firstNumSeries[4]);

    $("#result-second-date").html(result.secondNumSeriesDate);
    $("#result-second-one").html(result.secondNumSeries[0]);
    $("#result-second-two").html(result.secondNumSeries[1]);
    $("#result-second-three").html(result.secondNumSeries[2]);
    $("#result-second-four").html(result.secondNumSeries[3]);
    $("#result-second-five").html(result.secondNumSeries[4]);
});