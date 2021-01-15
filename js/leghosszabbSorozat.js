import { data } from './components/fileProcess.js'
import { readLottoStatics } from './components/fileProcess.js'
import { LeghosszabbSorozat } from './class/LeghosszabbSorozat.js'



//A leghoszabb számsorozatok

//otos.csv fájl beolvasása.
if (!data.isReaded) {
    readLottoStatics('../resources/data/otos.csv')
}

//Üres Array létrehozása objecteknek.
let pulledNums = new Array()

//Array feltöltése objectekkel.
for (let i = 0; i < data.lottoStatics.length; i++) {
    pulledNums.push(new LeghosszabbSorozat([], 0, i))
    for (let j = 11; j < 16; j++) {
        pulledNums[i].numSeries.push(parseInt(data.lottoStatics[i][j]))
    }
}

//Egymást követő számok megtalálása.
for (let i = 0; i < pulledNums.length; i++) {
    if ((pulledNums[i].numSeries[0] + 1) == (pulledNums[i].numSeries[1]) &&
        (pulledNums[i].numSeries[1] + 1) == (pulledNums[i].numSeries[2]) &&
        (pulledNums[i].numSeries[2] + 1) == (pulledNums[i].numSeries[3]) &&
        (pulledNums[i].numSeries[3] + 1) == (pulledNums[i].numSeries[4])) {
        if (pulledNums[i].followingNumbers == 0) {
                pulledNums[i].followingNumbers = 5;
            }
    }

    for (let j = 0; j < 2; j++) {
        if ((pulledNums[i].numSeries[0 + j] + 1) == (pulledNums[i].numSeries[1 + j]) &&
            (pulledNums[i].numSeries[1 + j] + 1) == (pulledNums[i].numSeries[2 + j]) &&
            (pulledNums[i].numSeries[2 + j] + 1) == (pulledNums[i].numSeries[3 + j])) {
            if (pulledNums[i].followingNumbers == 0) {
                pulledNums[i].followingNumbers = 4;
            }
        }
    }

    for (let j = 0; j < 3; j++) {
        if ((pulledNums[i].numSeries[0 + j] + 1) == (pulledNums[i].numSeries[1 + j]) &&
            (pulledNums[i].numSeries[1 + j] + 1) == (pulledNums[i].numSeries[2 + j])) {
            if (pulledNums[i].followingNumbers == 0) {
                pulledNums[i].followingNumbers = 3;
            }
        }
    }

    for (let j = 0; j < 4; j++) {
        if ((pulledNums[i].numSeries[0 + j] + 1) == (pulledNums[i].numSeries[1 + j])) {
            if (pulledNums[i].followingNumbers == 0) {
                pulledNums[i].followingNumbers = 2;
            }
        }
    }
}

//Üres array létrehozása az eredményeknek.
let result = new Array()

//Üres array feltöltése három "üres" objektummal.
for (let i = 0; i < 3; i++) {
    result.push(new LeghosszabbSorozat(0, 0, 0))
}

//Objektumok tulajdonséágainak feltöltése a követelmények szerint.
for (let i = 0; i < pulledNums.length; i++) {
    if (result[0].followingNumbers < pulledNums[i].followingNumbers) {
        result[0] = {...pulledNums[i]}
    }
}

for (let i = 0; i < pulledNums.length; i++) {
    if (pulledNums[i].id != result[0].id) {
        if (result[1].followingNumbers < pulledNums[i].followingNumbers && pulledNums[i].followingNumbers <= result[0].followingNumbers) {
            result[1] = {...pulledNums[i] }
        } 
    } 
}

for (let i = 0; i < pulledNums.length; i++) {
    if(pulledNums[i].id != result[0].id && pulledNums[i].id != result[1].id) {
        if(result[2].followingNumbers < pulledNums[i].followingNumbers && pulledNums[i].followingNumbers <= result[1].followingNumbers) {
            result[2] = {...pulledNums[i]}
        }
    }
}

$("#result-first-followingnumbers").html(result[0].followingNumbers)
$("#result-first-one").html(result[0].numSeries[0])
$("#result-first-two").html(result[0].numSeries[1])
$("#result-first-three").html(result[0].numSeries[2])
$("#result-first-four").html(result[0].numSeries[3])
$("#result-first-five").html(result[0].numSeries[4])

$("#result-second-followingnumbers").html(result[1].followingNumbers)
$("#result-second-one").html(result[1].numSeries[0])
$("#result-second-two").html(result[1].numSeries[1])
$("#result-second-three").html(result[1].numSeries[2])
$("#result-second-four").html(result[1].numSeries[3])
$("#result-second-five").html(result[1].numSeries[4])

$("#result-third-followingnumbers").html(result[2].followingNumbers)
$("#result-third-one").html(result[2].numSeries[0])
$("#result-third-two").html(result[2].numSeries[1])
$("#result-third-three").html(result[2].numSeries[2])
$("#result-third-four").html(result[2].numSeries[3])
$("#result-third-five").html(result[2].numSeries[4])