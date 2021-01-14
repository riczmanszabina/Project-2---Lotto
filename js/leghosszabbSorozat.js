import { data } from './fileProcess.js'
import { readLottoStatics } from './fileProcess.js'

//A leghoszabb számsorozatok

//otos.csv fájl beolvasása.
if (!data.isReaded) {
    readLottoStatics()
}

class LongestSeries {
    constructor(numSeries, followingNumbers, id) {
        this.numSeries = numSeries;
        this.followingNumbers = followingNumbers;
        this.id = id 
    }
}

let objectsArray = []

for (let i = 0; i < data.lottoStatics.length; i++) {
    objectsArray.push(new LongestSeries([], 0, i))
    for (let j = 11; j < 16; j++) {
        objectsArray[i].numSeries.push(parseInt(data.lottoStatics[i][j]))
    }
}


for (let i = 0; i < objectsArray.length; i++) {
    if ((objectsArray[i].numSeries[0] + 1) == (objectsArray[i].numSeries[1]) &&
        (objectsArray[i].numSeries[1] + 1) == (objectsArray[i].numSeries[2]) &&
        (objectsArray[i].numSeries[2] + 1) == (objectsArray[i].numSeries[3]) &&
        (objectsArray[i].numSeries[3] + 1) == (objectsArray[i].numSeries[4])) {
        if (objectsArray[i].followingNumbers == 0) {
                objectsArray[i].followingNumbers = 5;
            }
    }

    for (let j = 0; j < 2; j++) {
        if ((objectsArray[i].numSeries[0 + j] + 1) == (objectsArray[i].numSeries[1 + j]) &&
            (objectsArray[i].numSeries[1 + j] + 1) == (objectsArray[i].numSeries[2 + j]) &&
            (objectsArray[i].numSeries[2 + j] + 1) == (objectsArray[i].numSeries[3 + j])) {
            if (objectsArray[i].followingNumbers == 0) {
                objectsArray[i].followingNumbers = 4;
            }
        }
    }

    for (let j = 0; j < 3; j++) {
        if ((objectsArray[i].numSeries[0 + j] + 1) == (objectsArray[i].numSeries[1 + j]) &&
            (objectsArray[i].numSeries[1 + j] + 1) == (objectsArray[i].numSeries[2 + j])) {
            if (objectsArray[i].followingNumbers == 0) {
                objectsArray[i].followingNumbers = 3;
            }
        }
    }

    for (let j = 0; j < 4; j++) {
        if ((objectsArray[i].numSeries[0 + j] + 1) == (objectsArray[i].numSeries[1 + j])) {
            if (objectsArray[i].followingNumbers == 0) {
                objectsArray[i].followingNumbers = 2;
            }
        }
    }
}



let result = new Array()
for (let i = 0; i < 3; i++) {
    result.push(new LongestSeries(0, 0, 0))
}

for (let i = 0; i < objectsArray.length; i++) {
    if (result[0].followingNumbers < objectsArray[i].followingNumbers) {
        result[0] = {...objectsArray[i]}
    }
}

for (let i = 0; i < objectsArray.length; i++) {
    if (objectsArray[i].id != result[0].id) {
        if (result[1].followingNumbers < objectsArray[i].followingNumbers && objectsArray[i].followingNumbers <= result[0].followingNumbers) {
            result[1] = {...objectsArray[i] }
        } 
    } 
}

for (let i = 0; i < objectsArray.length; i++) {
    if(objectsArray[i].id != result[0].id && objectsArray[i].id != result[1].id) {
        if(result[2].followingNumbers < objectsArray[i].followingNumbers && objectsArray[i].followingNumbers <= result[1].followingNumbers) {
            result[2] = {...objectsArray[i]}
        }
    }
}



console.log(result)
