##A fájl célja, hogy beolvasson egy .csv kiterjeszétű fájlt. Ezután a fájl tartalmából egy 2D Array-t generál majd jelzi, hogy a beolvasás sikeres. Végül exportálja a beolvasott fájlból készült 2D Array-t, a fájlbeolvasás sikerességéről tanúskodó booleant és magát a fájlbeolvasásért/feldolgozásért felelős funkciót.


####*data* objektum
*lottostatics*: (Array) A létrehozandó 2D array tárolására.
*isReaded*: (Bool) Ha a fájlbeolvasás megtörtént, értéke *true*-ra változik.

####*readLottoStatics* funkció
#####A funkció egy ajax lekérést indít el.
*url*: A fájl elérési útvonala. Paraméterként kerül átadásra.
*async*: Aszinkron mód kikapcsolva. Erre a projektre egyrészt felesleges, másrészt így biztosítható az, hogy a fájlbeolvasás megtörténjen, mielőtt megkeződik annak feldolgozása.
**Ha az ajax kérés sikeres:**
*tempArrayOne* (Array) Ideiglenes segédarray. A 2D Array létrehozásához szükséges.

*2D array létrehozása:*
1. a *tempArrayOne*-ba elmentésre kerül a beolvasott fájl úgy, hogy a sortörések mentén array-okra lesz bontva. Így a tempArrayOne minden egyes eleme a beolvasott fájl egy-egy sorát tartalmazza.
2. Egy for loop végigmegy a *tempArrayOne* minden egyes elemén, (tehát a beolvasott fájl minden során) majd pedig a tartalmával feltölti a *lottoStatics* array egy-egy elemét a *tempArrayOne* tartalmával pontosvesszők (*;*) mentén Array-okra bontva. (a .csv fájlokban pontosvesszővel vannak elválasztva az oszlopok)

A sikeres beolvasás és 2D Array létrehozás után a *data.isReaded* true értéket vesz fel.

Vegül a *readLottoStatics* funkció és *data* objektum exportálásra kerül.

##A *data.lottoStatics* 2D Array számozása

1:Év ; 2:Hetek ; 3:A szám húzás dátuma ; 4:Ötös találatok száma ; 5:Ötös találat nyeremény ; 6:Négyes találatok száma ; 7:Négyes találatok nyeremény ; 8:Hármas találatok száma ; 9:Hármas találatok nyeremény ; 10:Kettes találatok száma ; 11:Kettes találatok nyeremény; 12:Nyerőszám #1 ; 13:Nyerőszám #2 ; 14:Nyerőszám #3 ; 15:Nyerőszám #4 ; 16:Nyerőszám #5