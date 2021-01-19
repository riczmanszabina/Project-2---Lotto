tempArry = []
resultArry = []

with open ("otos.csv", 'r', encoding="utf-8") as data:
    for i in data.readlines():
        tempArry.append(i.split(";"))


for i in range(len(tempArry)):
    if (tempArry[i][4] != '0 Ft'):
        wonPrice = tempArry[i][4].replace("Ft", "").replace(" ", "")
        wonDate = tempArry[i][0] + " " + tempArry[i][1]
        resultArry.append(wonPrice + "\t" + wonDate)


with open ("result.xls", "a", encoding="utf-8") as data:
    for i in range (len(resultArry)):
        data.write(resultArry[i] + "\n")
