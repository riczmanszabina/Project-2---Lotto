/*

A beolvasott fájlból egy 2D Array-t készül "lottoStatics" néven az array objectben.
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

let array = {
    lottoStatics: new Array,
    temp: new Array
}

function lottoStatics() {
     $.ajax({      
        url: './resources/data/otos.csv',
        async: false,
        success: function (response) {
            array.temp = response.split("\r\n")
            for (let i = 0; i < array.temp.length; i++) {
                if (array.temp[i]) {
                    array.lottoStatics.push(array.temp[i].split(";"))
                }
            }
        },
    });
}

export { lottoStatics, array }
