Major Ádám



Telepített library-k:
-jQuery     2021.01.09



                                --fileProcess.js--  2021.01.09

Úgy döntöttem, hogy a fájl beolvasásért és feldolgozásért felelős kódot egy külön fájlba írom meg,
így ezt a fájlt az összes többi oldalon tudom használni, nem kell többször megírni a kódot.

Az otos.csv fájl beolvasására egy Ajax requestet használok, ugyanis:    (33. sor)
    -így biztosan minden böngészővel kompatibilis.
    -fele annyit kódból megvan, mint az XmlHttpRequest.

Az Ajax requestnél az aszinkron módot kikapcsoltam, ugyanis:    (35. sor)
    -nem olyan nagy kiterjedésű az oldal, hogy így rontana a felhasználói élményen.
    -így biztosaítható, hogy az otos.csv fájl teljes mértékben beolvasásra kerüljön, mielőtt a webolal lerenderelődik.

Létrehozok egy objektumot amit feltöltök két Array típusú properties-el.    (27. sor)
Azért használok objektumot, mert így az array-ok könnyen exportálhatóak más fájlba.
    1. lottoStatics: Ebbe kerül az otos.csv fájl teljes beolvasott tartalma 2D Array-ként
    2. temp: A 2D array elkészítéséhez szükséges segéd Array.

A beolvasott otos.csv fájlból egy 2D Array-t hozok létre. Ez úgy történik hogy:
    1. A beolvasott tartalmat az temp Array-ba mentem, mindezt úgy, hogy minden egyes sorból külön Array-t hozok létre.     (37. sor)
    2. Egy for loop-al végigmegyek a temp Array összes elemén, majd a pontos vesszők mentén szintén külön Array-t hozok létre. 
    Minden egyes iterációban a lottoStatics Array-ba töltöm fel az eredményt   (38. sor)

Ellenőrzésre kerül, hogy a beolvasott sor valóban tartalmaz-e adatot, nehogy üres sor kerüljön beolvasásra  (39. sor)

Az array objektumot és a lottoStatics funkciót exportálom, hogy a többi fájlból is hozzá tudjak férni. (47. sor)

Az otos.csv fálj tartalmát úgy lehet felhasználni hogy:
    1. Importálni kell a flieProcess.js-ből a lottoStatics funkciót és az array objektumot.
    2. Meg kell hívni a lottoStatics funkciót, ezzel beolvasásra kerülnek az adatok.
    3. Az array objektum lottoStatics properties-ben hozzáférhetővé vállnak az adatok 2D Array formában.
    
    A 2D Array első index értéke a sor, a második pedig az oszlop.
    Minden egyes sor teljes hosszában egy-egy rögzített rekordot tartalmaz. (A számozás 0-tól indul)
    Az oszlopok pedig a rögzített rekord egy-egy tulajdonságát tartalmazzák.

    Az oszlopok számozása:

    1:Év ; 2:Hetek ; 3:A szám húzás dátuma ; 4:Ötös találatok száma ; 5:Ötös találat nyeremény ;
    6:Négyes találatok száma ; 7:Négyes találatok nyeremény ; 8:Hármas találatok száma ;
    9:Hármas találatok nyeremény ; 10:Kettes találatok száma ; 11:Kettes találatok nyeremény;
    12:Nyerőszám #1 ; 13:Nyerőszám #2 ; 14:Nyerőszám #3 ; 15:Nyerőszám #4 ; 16:Nyerőszám #5

    pl.: array.lottoStatics[50][12] (Ez az 51. rekord "Nyerőszám #2" oszlopa) (indexelés 0-ról indul!)


    data:   Objektum két tulajdonsággal. A lottoStatics egy Array, amibe a beolvasott adat kerül mentésre
            2D Array formában. az isReaded egy Boolean. Ha az adat beolvasásra kerül, értéke true-ra változik.

    readLottoStatics():     Funkció. Feladata egy Ajax request formában a file beolvasása, illetve
                            a 2D array létrehozása a beolvasott adatból.

    url:    Beolvasni kívánt fájl helye

    async:  Aszinkron mód kikapcsolva

    tempArrayOne:   Ideiglenes segédarray. A 2D array létrehozásához kell.



                                --index.js-- 2021.01.09.

A fájl célja, hogy megtalálja a két legutóbbi lottószám húzást.
    1. Importálom a data objektumot és a readLottoStatics funkciót a fileProcess.js-ből. (1. sor)
    2. Meghívom a lottoStatics funkciót, ha a fájl még nem került beolvasásra. (7. sor)
    3. Definiálok egy objektumot két üres Array-el. Ezekbe lesznek mentve a számsorozatok. (10. sor)
    4. Egy for ciklussal végigmegyek a lottoStatics 2D Array 11-16. oszlopán.
    (ezek tartalmazzák az 5 darab számot)   (15.sor)
    5. Az első és második sor 11-16. oszlopával feltöltöm a recentNumber és lastWeekNumber Array-eket. (15-16. sor)
    6. A HTML-ben a megfelelő id-vel ellátott list itemek HTML értékeit megváltoztatom az Array-ek megfelelő elemeire.



    result: Objektum. Két Array-t tartalmaz, ezekbe az eredmények lesznek feltöltve.



                                --index.html-- 2021.01.09.

A HTML oldalt összekapcsoltam az index.js és jquery.js fájlal, valamint hozzáadtam a megfelelő HTML elemekhez id-ket, amit selectorként tudok használni az eredmények kiírásához.



                            --leggyakoribbSzamok.js-- 2021.01.09.

A fájl célja, hogy megtalálja a három leggyakrabban húzott számot.
    1. Importálom a data objektumot és a readLottoStatics funkciót a fileProcess.js-ből. (1. sor)
    2. Meghívom a lottoStatics funkciót, ha a fájl még nem került beolvasásra. (7. sor)
    3. Létrehozok egy pulledNums nevű üres objektumot. (10. sor)
    4. Egy for loop-al az objektumba propetries-eket generálok 1-től 90-ig, amiknek az értékei mind 0.
    (az ötös lottóban 1-től 90-ig vannak számok)
    5. Egy dupla for loppal végigmegyek az objektum összes propeties-én. A properties-ek neveit összehasonlítja a húzott számokkal. Ahol egyezést talál, ott a properties értékét megnöveli 1-el.

                                    --2021.01.10.--

    6. Létrehozok egy result objektumot. Ebbe mentem majd az eredményt.
    7. Loopokkal megtaláljuk azt, melyik a legmagasabb érték hogy melyik properties tartozik hozzá.
    A második és harmadik legnagyobb számnál csak annyi a különbség, hogy az if statementben nem engedem,
    hogy az előzőnél nagyobb értéket hozzáadjon.
    Majd a num objektumba elmentem az értkékeket.    (33-58. sor)
    8. Feltöltöm a HTML elemek értékeit.



    pulledNums:     Objektum. 1-90-ig generálásra kerülnek benne tulajdonságok, (egy egy tulajdonság
                    neve egy-egy lottószámnak felel meg) majd egy for looppal növelem a tulajdonságok
                    értékeit a talált lottószámok függvényében

    result:         Objektum, az eredmény kerül benne tárolásra.



                            --leggyak_szamok.html 2021.01.10--

A HTML oldalt összekapcsoltam a leggyak_szamok.js és jquery.js fájlal, valamint hozzáadtam a megfelelő HTML elemekhez id-ket, amit selectorként tudok használni az eredmények kiírásához.



                            --legkisebb_osszeg.js 2021.01.12--

    A fájlhoz a LegkisebbOsszeg osztályt használom.
        sumResult: A húzott számok összeadásának eredménye
        indexNum: A húzott számok haynadik sorban találhatóak a beolvasott fájlban
        lottoNumber: Array, a húzott számokat tartalmazza.

A fájl célja, hogy megtalálja a három legkisebb összegű számhúzásokat, illetve a hozzá tartozó 5 darab számot.
    1. Készítettem egy osztályt és egy hozzá tartozó konstruktort. Az osztályból példányosított objektumokban
    lesznek tárolva az eredmények.
    2. Létrehoztam egy üres lottoNumSums objektumot. Majd pedig ezt az objektumot feltöltöttem
    az összes húzott lottószám összegével. Az objektum tulajdonsága egy sorszám, ami megfelel
    az otos.csv fájlból készített 2D Array első számának. (sor)
    3. Loopokkal megkeresem, hogy melyek a legkisebb számok a lottoNumSums objektumban.
    Miután megvan, nem csak tulajdonság értékét mentem el az eredmény tárolására használt objektumban,
    hanem magát a tulajdonságot is. (sorszám)
    4. Egy for loppal az elmentett sorszám alapján megkeresem az 5 darab számot, majd az objektumba
    egy Array-ba mentem őket.


    lottoStatics(): fileProcessből importál funkció. Beolvassa az otos.csv fájlt.

    class Lowest:   Osztály, amiből az eredmények tárolására szolgálo objektumok kerülnek példányosításra.

    lottoNumSums:   Objektum, amiben tulajdonságként az adott rekord sorszáma, értékükként pedig a húzott
                    számok összege tárolódik
                    
    tempNumber:     Ideiglenes segádváltozó.

    firstLowest/secondLowest/thirdLowest:   Az első/második/harmadik eredményeit tároló objektumok.
        Az első tulajdonság a húzott számok össuege, a második a rekord sorszáma, a harmadik egy a húzott
        számok tárolására szolgáló array.




                            --leghasonlobbSzamok.js 2021.01.13--

    A fájlhoz a LeghasonlobbSzamok osztályt használom.
        firstNumSeries: Array, egy számsorozatot tartalmaz
        secondNumSeries: Array, egy számsorozatot tartalmaz
        firstNumSeriesLine:  Az első számsorozat hanyadik sorban található a fájlban
        secondNumSeriesLine: A második számsorozat hanyadik sorban található a fájlban
        firstNumSeriesDate: Az első számsorozathoz tartozó dátum
        secondNumSeriesDate: A második számsorozathoz tartozó dátum
        matchingNumbers: Az első és második számsorozat között hány megegyező szám található.

    A fájl célja, hogy megtalálja a leghasonlóbb számsorokat és a húzás dátumát.

    1. Készítek egy üres array-t.(13. sor)
    2. Az üres Array-ből 2D Arrayt- készítek az összes húzott számsorral. (15.sor)
    3. Deklarálok két segédváltozót (24-25. sor)
    4. Készítek egy ürres Array-t objeckteknek. (28. sor)
    5. Egy for looppal összehasonlítom az összes számsort egymással. Ahol egyezést talál, abból
    egy objectet készít, majd az objectet elmenti az array-be. (31.sor)
    6. Az objektumokon belül megállapítom a hasonlóságok számát. (47. sor)
    7. Készítek egy "üres" objetumot. (59. sor)
    8. Az objektum tulajdonságait feltöltöm az eredménnyel. (62. sor)
    9. Megkeresem az eredményként eltárolt objectben a két húzáshoz tartozó dátumot
        Amenniyben nincs dátum, úgy a húzás évét és hetét írja ki.



    pulledNums:     2D Array, feltöltve a lottóhúzásokkal.

    tempFirstNumSeries/tempSecondNumSeries:     Ideiglenes segédváltozók. Az összehasonlításhoz kell.

    similarNumbersArray:       Array ojektumokkal feltölve. Az összes egyezőségről készül objektum. (kb 3 millió)

    result:     Az eredményként kiválaszott objektum.




                            --Leghosszabsorozat.js 2021.01.13--

    A fájlhoz a LeghosszabbSorozat osztályt használom.
        numSeries:  Array, a húzott számokat tartalmazza
        followingNumbers:   Int, az egymást követő számokat mutatja meg.
        id:                 Egyedi azonosítószám.
                            

    A fájl célja, hogy megtalálja a három leghoszabb egymást követő számot tartalmazó sorozatot.

    1. Készítek egy üres Array-t (15. sor)
    2. Az array-t feltöltöm a húzásokat tartalmazó objectekkel. (minden húzásnak 1 object)
        Az object ezen kívül tartalmaz egy minden objecthez rendelt id-t, illetve hogy hány darab egymást követő
        szám található (18. sor)
    3. Az egymás követő számok megtalálása. Ezt úgy érem el, hogy az ellső loopban egyszerre 5, a másodikban 4, a harmadikban 3, a másodikban 2 számot jelölök ki. A kijelölések közt megállapítom, hogy van e növekményes sorrend vagy sem, majd a kijelölések egyel odébb lépnek. (26. sor)
    4. Létrehozok egy üres array-t. Az üres array-t feltöltöm 3 üres objektummal. (65-68. sor)
    5. Az array-ban lévő objektumok tulajdonságait feltöltöm az eredménynek megfelelően.
        Az id alapján kerülöm el, hogy ne legyen kiválasztva ugyanolyan objektumok.



    pullednums:     Array. Objektumokkal van feltöltve.

    result:         Array. Három objektummal van feltöltve amelyek az eredméynt tartalmazzák.


    -----------------------------------------------------------------------------------------------
