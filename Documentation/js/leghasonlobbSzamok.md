##A fájl célja, hogy a beolvasott fájlból megkeresse a három leggyakrabban húzott számot és hogy hányszor lettek húzva.

####Importált elemek
1. data: (objektum) Tartalmazza a *lottoStatics* 2D Array-t és az isReaded booleant.
2. readLottoStatics: (funkció) Elindítja a fájlbeolvasást és a 2D Array generálást.
3. LeghasonlobbSzamok: (osztály) Az osztályból példányosított objektumokba kerülnek bele a vizsgálati adatok és az eredmények

##Fájlbeolvasás (7. sor)
Ha a data.isReaded true értéket vett fel, akkor már nem olvassa be a fájl mégegyszer. Ellenkező esetben megkezdi a fájlbeolvasást.

##Array készítése (12. sor)
*pulledNums* (Array) A húzott számok kerülnek bele 2D Array formában.

##2D Array elkészítése a húzott számokból (15. sor)
Egy dupla egymásba ágyazott for loop.
1. Az első réteg loop végigmegy a beolvasott fájlból készül 2D Array összes során.
2. A második réteg végigmegy az épp aktuális sor a 11., 16. és az ezek közti oszlopokon. (az 5 húzott számot tartalmazza)
3. A *pulledNums* array éppen aktuális eleme fel lesz töltve a húzott számokkal array-ok formájában. Közben Int-é konvertálás is megtörténik.

##Ideiglenes segédávltozók létrehozása (23. sor)
*tempFirstNumSeries*: (Array) Ideiglenes segédváltozó. Az éppen aktuális első számsorozat kerül bele
*tempSecondNumSeries*: (Array) Ideiglenes segédváltozó. Az éppen aktuális második számsorozat kerül bele.

##Array létrehozása (27. sor)
*similarNumbersArray* (Array) LeghasonlobbSzamok osztályból példányosított objektumok kerülnek bele.

##Számok közti egysezőségek kiszámítása (30. sor)
1. Egy for loop végigmegy a *pulledNums* Array összes elemén.
2. A *tempFirstNumSeries* felveszi az éppen aktuális *pulledNums* elemének értékét.
3. Egy másik for loop szintén végigmegy a *pulledNums* Array összes elemét.
4. A *tempSecondNumSeries* felveszi az éppen aktuális *pulledNums* Array elemének értékét.
5. Ha a *tempFirstNumber* és *tempSecondNumber* nem egyenlő (felesleges erőforrás pazarlás két ugyanolyan elem összehasonlítása)
6. Egy for loop végigmegy a *tempFirstNumSeries* összes elemén.
7. Egy for loop végigmegy a *tempSecondNumSeries* összes elemén.
8. Ha talál bármilyen hasonlóságot az éppen aktuális tempFirstNumSeries elem és tempSecondNumSeries eleme közt, akkor példányosít egy objektumot a LeghasonlobbSzamok osztályból.
9. A létrehozott objektumot hozzáadja a *similarNumbersArray* array-hoz.

Az objektum tulajdonságai:

*firstNumSeries*: (Array) Az első összehasonlítandó számsorozat.
*secondNumSeries*: (Array) A második összehasolítandó számsorozat.
*firstNumSeriesLine*: (Int) Az első számsorozat a táblázat hanyadik sorában található.
*secondNumSeriesLine*: (Int) A második számsorozat a táblázat hanyadik sorában található.

##A hasonlóságok számának megállapítása (47. sor)
1. Egy for loop végigmegy a *similarNumbersArray*-on
2. Egy for loop végigmegy a *similarNumbersArray* épp aktuális objektumának a *firstNumSeries* tulajdonságán.
3. Egy for loop végigmegy a *similarNumbersArray* épp aktuális objektumának a *secondNumSeries* tulajdonságán.
4. Ha a *similarNumbersArray* aktuális objektumának a firstNumSeries tulajdonság aktuális eleme megegyezik a *similarNumbersArray* aktuális objektumának a *secondNumSeries* tulajdonság aktuális elemével, akkor a *firstNumSeries* arra aktuális elemének a *matchingNumbers* tulajdonságának értékét 1-el megnöveli.

##Objektum létrehozása (58. sor)
*result* (objektum) Az eredmény kerül benne tárolásra.

##A legtöbb egyezőség megtalálása (61. sor)
Ez a rész a *similarNumbersArray* objektumainak a *matchingNumbers* értékei közül megkeresi a legnagyobbat, majd pedig az objektum tulajdonságait átmásolja a *result* objektumba.

##Dátumok hozzárendelése az objektum tulajdonságaihoz. (68. sor)
Itt egy if statement egy else elágazással található mind a két számsorozatra. Az if statement megkeresi a dáumot, ha nem talál, akkor tovább megy az else ágon.

Ha a *data.lottoStatics* 2D array.ben az adott 2-es oszlopában található tartalom, akkor:
* *result.firstNumSeriesDate* -hez (vagy result.secondNumSeriesDate-hez) hozzárendeli a 2D array adott sorának kettes oszlopát.
* A dátumokban lévő pontokat átalakítja kötőjellé.
* A dátumokban utolsó kötőjelet eltünteti.

Ha nem található tartalom az adott oszlopban, akkor:
* *result.firstNumSeriesDate* -hez (vagy result.secondNumSeriesDate-hez) hozzárendeli a "Pontos dátum nem található" szöveget, majd pedig hozzárendeli még a 0. és első oszlop tartalmát, ami a húzás éve és hete.

##Eredmények kiíratása (85. sor)