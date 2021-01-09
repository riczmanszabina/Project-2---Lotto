/*

A beolvasott fájlból egy 2D Array-t készül "lottoStatics" néven.
Az első számmal a sorok közül lehet választani. (rögzített rekordok)
A második számmal az oszlopok közül lehet választani. (a rögzített rekord egy-egy tulajdonsága)

Az oszlopok számozása

1   Év
2   Hetek
3   A szám húzás dátuma
4   Ötös találatok száma
5   Ötös találat nyeremény
6   Négyes találatok száma
7   Négyes találatok nyeremény
8   Hármas találatok száma
9   Hármas találatok nyeremény
10  Kettes találkatok száma
11  Kettes találatok nyeremény
12  Nyerőszám #1
13  Nyerőszám #2
14  Nyerőszám #3
15  Nyerőszám #4
16  Nyerőszám #5
*/



lottoStatics = []

function readFile() {
    tempArray = []
    $.ajax({
        url: './resources/data/otos.csv',
        success: function (response) {
            tempArray = response.split("\r\n")
            for (i = 0; i < tempArray.length; i++) {
                lottoStatics.push(tempArray[i].split(";"))
            }

            console.log(lottoStatics[20][12])
        },
    });
}

export {readFile, lottoStatics};