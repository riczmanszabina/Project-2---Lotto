##A fájl célja, hogy a beolvasott fájlból megkeresse a legutolsó két hét lottószámait.

####Importált elemek
1. data: (objektum) Tartalmazza a *lottoStatics* 2D Array-t és az isReaded booleant.
2. readLottoStatics: (funkció) Elindítja a fájlbeolvasást és a 2D Array generálást.

##Fájlbeolvasás (6. sor)
Ha a data.isReaded true értéket vett fel, akkor már nem olvassa be a fájl mégegyszer. Ellenkező esetben megkezdi a fájlbeolvasást.

##Eredmény objektum (*result*) létrehozás (11. sor)
*recent*: (Array) A legutolsó lottószám húzás számsorozata.
*lastWeek*: (Array) A múlt heti lottószám húzás számsorozata.

##Eredmény objektum (*result*) feltöltése (17. sor)
Egy for loop végighalad a *data.lottoStatics* első és második során, majd mind a két sor 11., 16. és az ezek közti oszlopok (az 5 húzott számot tartalmazza) tartalmával feltölti a *result* objektumban található Array-okat.

##Eredmények kiíratása (23. sor)