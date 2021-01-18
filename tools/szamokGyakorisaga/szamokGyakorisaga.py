import numpy as np

lottoStatics = []
pulledNums = []
resultDict = {}

with open("otos.csv", 'r', encoding="utf-8") as data:
    for i in data.readlines():
        lottoStatics.append(i.split(";"))

for i in range(len(lottoStatics)):
    tempArray = []
    for j in range(11, 16):
        tempArray.append(lottoStatics[i][j])
    tempArray[4] = tempArray[4].replace("\n", "")
    pulledNums.append(tempArray)

for i in range(len(pulledNums)):
    for j in range(len(pulledNums[j])):
        if pulledNums[i][j] in resultDict:
            resultDict[pulledNums[i][j]] += 1
        else:
            resultDict[pulledNums[i][j]] = 1

tempList = list(resultDict.items())
resultArray = np.array(tempList)

with open("result.xls", "w", encoding="utf-8") as data:
    for i in resultArray:
        data.write(i[0] + "\t" + i[1] + "\n")