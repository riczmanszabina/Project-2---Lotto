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
    2. Egy for loop-al végigmegyek a temp Array összes elemén, majd a pontos vesszők mentén szintén külön Array-t hozok létre. Minden egyes létrehozás után a lottoStatics Array-ba töltöm fel az eredményt   (38. sor)

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

    pl.: array.lottoStatics[50][12] (Ez az 51. rekord "Nyerőszám #1" oszlopa)
