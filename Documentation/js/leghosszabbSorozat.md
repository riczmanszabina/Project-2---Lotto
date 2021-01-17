##A fájl célja, hogy a beolvasott fájlból megkeresse a három leghosszabb egymást követő számsorozatot tartalmazó számsorozatot.

####Importált elemek
1. data: (objektum) Tartalmazza a *lottoStatics* 2D Array-t és az isReaded booleant.
2. readLottoStatics: (funkció) Elindítja a fájlbeolvasást és a 2D Array generálást.
3. LeghosszabSorozat: (osztály) Az osztályból példányosított objektumokba kerülnek bele a vizsgálati adatok és az eredmények

##Fájlbeolvasás (7. sor)
Ha a data.isReaded true értéket vett fel, akkor már nem olvassa be a fájl mégegyszer. Ellenkező esetben megkezdi a fájlbeolvasást.

##Üres array létrehozása (12. sor)
pulledNums: (Array) A LeghosszabSorozat osztályból példányosított objektumok kerülnek bele.

##Array feltöltése (15. sor)
Egymásba ágyazott for loop.
1. Egy for loop végigmegy a *data.Lottostatics* összes során
2. Minden sor után egy objektumot példányosít a *LeghosszabSorozat* osztályból és hozzáadja a *pulledNums* Array-hez.
2. Egy for loop végigmegy az épp aktuális sor a 11., 16. és az ezek közti oszlopokon. (az 5 húzott számot tartalmazza)
3. Az oszlopok értékeivel feltölti az *pulledNums* aktuális elemének a *numSeries* tulajdonságát. (szintén array)

##Egymást követő sorok megtalálása.
Ennek a kódnak az a célja, hogy megkeresse, van e 5, 4, 3, 2 egymást követő szám a *pulledNums* objektumainak *numSeries* tulajdonságaiban.

A kód úgy működik, hogy kijelöl:
Amikor 5-ös sorozatot keres 4,
amikor 4-es sorozatot keres, akkor 4
.
.
.
számot a *pulledNums* aktuális objektum *numSeries tulajdonságában*, majd megvizsgálja, hogy ezek a kijelöklt számok egymást követőek-e.
A vizsgálat után a kijelölések mindig egyet előrébb lépnek és megismétlik a vizsgálatot, amíg a számsorozat végéhez érnek. (Az 5-ös sorozat vizsgálata nem lép előre egyet sem, a 2-es sorozat vizsgálata viszont 4-et is)

Az eredmény az objektum *followingNumbers* tulajdonságban kerül eltárolásra.

##Array létrehozása (62. sor)
**result: (Array) A három eredményt tartalmazó objektum kerül bele.

##Array feltöltése (65. sor)
Az üres array feltöltésre kerül három objektummal.

##Eredmény objektumok feltöltése (70. sor)
Egy for ciklus végiglép a *pulledNums* array teljes hosszán és összehasonlítja a *followingNums* tulajdonságokat. Majkd a három legmagasabb számmal rendelkező objektum tulajdonságait átmásolja a *result* Array-ben lévő 3 objektumba.

##Eredmény kiíratása (93. sor)