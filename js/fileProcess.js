//Objektum létrehozása.
let data = {
    lottoStatics: new Array(),
    isReaded: false
}

//Fájlbeolvasás és feldolgozás.
function readLottoStatics(url) {
     $.ajax({      
        url: url,       
        async: false,
        success: function (response) {
            let tempArrayOne = new Array()
            tempArrayOne = response.split("\r\n")     
            for (let i = 0; i < tempArrayOne.length; i++) {
                if (tempArrayOne[i]) {
                    data.lottoStatics.push(tempArrayOne[i].split(";")) 
                }
            }
            data.isReaded = true
        },
    });
}

//lottoStatics funkció és data objektum exportálása.
export { readLottoStatics, data }