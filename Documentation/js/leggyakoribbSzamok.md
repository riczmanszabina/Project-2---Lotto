##A fájl célja, hogy a beolvasott fájlból megkeresse a három leggyakrabban húzott számot és hogy hányszor lettek húzva.

####Importált elemek
1. data: (objektum) Tartalmazza a *lottoStatics* 2D Array-t és az isReaded booleant.
2. readLottoStatics: (funkció) Elindítja a fájlbeolvasást és a 2D Array generálást.

##Fájlbeolvasás (6. sor)
Ha a data.isReaded true értéket vett fel, akkor már nem olvassa be a fájl mégegyszer. Ellenkező esetben megkezdi a fájlbeolvasást.

##Üres objektum létrehozása (11. sor)
*pulledNums*: (objektum)

##*pulledNums* objektumba tulajdonságok generálása (14. sor)
Az objektumba 1-től 90-ig néven generálásra kerülnek tulajdonságok, majd mindegyik 0 értéket vesz fel. 
(az 5-ös lottó számai 1-től 90-ig terjednek)

##Az összes szám húzásának gyakoriságának kiszámolása (19. sor)
Egy dupla, egymásba ágyazott for loop:
1. Az első réteg loop végigmegy a beolvasott fájlból készült 2D Array összes során.
2. A második réteg végigmegy az épp aktuális sor a 11., 16. és az ezek közti oszlopokon. (az 5 húzott számot tartalmazza)
3. A *pulledNums* objektum egy-egy tulajdonságát kiválasztja (az objektum egy-egy tulajdonsága is maga egy-egy lottúszám) az éppen aktuális szám alapján (amin épp a for loop van), majd az értékét megnöveli eggyel.

##Objektum létrehozása az eredményeknek (26. sor)
*firstNumber*: (Int) Az első leggyakrabban húzott szám.
*fistCounter*: (Int) Az első leggyakrabban húzott számot hányszor húzták.
*secondNumber*: (Int) A második leggyakrabban húzott szám.
*secondCounter*: (Int) A második leggyakrabban húzott számot hányszor húzták.
*thirdNumber*: (Int) A harmadik leggyakrabban húzott szám.
*thirdCounter*: (Int) A harmadik leggyakrabban húzott számot hányszor húzták.

##Első legtöbbet húzott szám megtalálása (36. sor)
Egy for loop végigimegy a *pulledNums* objektum tulajdonságainak értékein. 

Ha nagyobb számot talál, mint a *result.firstCounter*, akkor:
1. A *result.firstNumber* értéke az éppen aktuális *pulledNums* objektum tulajdonsága lesz. 
2. A *result.firstCounter* pedig az éppen aktuális objektum tulajdonságának az értéke.

##Második legtöbbet húzott szám megtalálása (44. sor)
Egy for loop végigimegy a *pulledNums* objektum tulajdonságainak értékein. 

Ha nagyobb számot talál, mint a *result.secondCounter* és kisebb értéket, mint a *result.firstCounter*, akkor:
1. A *result.secondNumber* értéke az éppen aktuális *pulledNums* objektum tulajdonsága lesz. 
2. A *result.secondCounter* pedig az éppen aktuális objektum tulajdonságának az értéke.

##Harmadik legtöbbet húzott szám megtalálása (52. sor)
Egy for loop végigimegy a *pulledNums* objektum tulajdonságainak értékein. 

Ha nagyobb számot talál, mint a *result.thirdCounter* és kisebb értéket, mint a *result.secondCounter*, akkor:
1. A *result.thirdNumber* értéke az éppen aktuális *pulledNums* objektum tulajdonsága lesz. 
2. A *result.thirdCounter* pedig az éppen aktuális objektum tulajdonságának az értéke.

##Eredmények kiíratása (60. sor)