##A fájl célja, hogy a beolvasott fájlból megkeresse azz a három számsorozatot, amelyek a legkisebnb összeggel rendelkeznek.

####Importált elemek
1. data: (objektum) Tartalmazza a *lottoStatics* 2D Array-t és az isReaded booleant.
2. readLottoStatics: (funkció) Elindítja a fájlbeolvasást és a 2D Array generálást.
3. LegkisebbOsszeg: (osztály) Az osztályból példányosított objektumokba kerülnek bele a vizsgálati adatok és az eredmények

##Fájlbeolvasás (7. sor)
Ha a data.isReaded true értéket vett fel, akkor már nem olvassa be a fájl mégegyszer. Ellenkező esetben megkezdi a fájlbeolvasást.

##Objektum létrehozása (12. sor)
*lottoNumSums*: (Objektum) Az összes lottószámhúzás összege kerül bele.

##Objektum felöltése (17. sor)
Egy dubpla for ciklussal feltöltődik a *lottoSumNums* objektum.
1. Egy for ciklus végigmegy a *data.lottoStatics* összes során.
2. Létrehoz egy *tempNumber* ideiglenes változót és 0-a értéket kap.
3. Egy for loop végigmegy az épp aktuális sor a 11., 16. és az ezek közti oszlopokon. (az 5 húzott számot tartalmazza)
4. Az éppen aktuális számot hozzáadja a *tempNumber* változóhoz.
5. A *tempNumber* változó értékét átadja a *lottoSumNums*
6. A belső ciklusbl kilépve a *tempNumber* változó átadja az értékét az éppen aktuális objektum tulajdonságának.

##Objektumok létrehozása (24. sor)
Három objektum példányosítása a LegkisebbOsszeg osztályból. Ezekbe kerülnek eltárolásra az eredmények.

##A legkisebb összegek megtalálása (29. sor)
Egyszerűen összehasonlításra kerülnek a *lottoSumNums* object tulajdonságának értékei. A legkisebb érték, a hozzátartozó sorszám a beolvasott fájlból a first/second/thirdLowest objektumokba kerülnek tárolásra.

##A számsorozatok megtalálása (53. sor)
Az first/second/thirdLowest objektum *indexNum* tulajdonsága alapján megkeresem a beolvasott fájlban a sorszámot és egy for cuklussal feltöltöm a *lottoNumber* tulajdonságokat az adott sor a 11., 16. és az ezek közti oszlopaiból. (az 5 húzott számot tartalmazza)

##Eredmény kiíratása (61. sor)