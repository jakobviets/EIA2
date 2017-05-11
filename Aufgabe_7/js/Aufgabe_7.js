/*
Aufgabe: 7
Name: Jakob Viets
Matrikel: 254780
Datum: 11.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe7_Bienen;
(function (Aufgabe7_Bienen) {
    window.addEventListener("load", init);
    let imgData;
    Aufgabe7_Bienen.bees = [];
    Aufgabe7_Bienen.n = 10;
    let flowers = [];
    let Blumenzahl = 120;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe7_Bienen.crc2 = canvas.getContext("2d");
        let r = new Aufgabe7_Bienen.Background;
        for (let i = 0; i < Blumenzahl; i++) {
            let s = new Aufgabe7_Bienen.Flower;
        }
        //gemaltes Bild abspeichern
        imgData = Aufgabe7_Bienen.crc2.getImageData(0, 0, 600, 400);
        for (let i = 0; i < Aufgabe7_Bienen.n; i++) {
            let b = new Aufgabe7_Bienen.Bee;
            Aufgabe7_Bienen.bees[i] = b;
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);
        canvas.addEventListener("touch", neueBiene);
    }
    //Funktion für die Animation der Bienen
    function animate() {
        //gespeichertes Hintergrundbild erneut aufrufen
        Aufgabe7_Bienen.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < Aufgabe7_Bienen.bees.length; i++) {
            let s = Aufgabe7_Bienen.bees[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
    function neueBiene() {
        let b = new Aufgabe7_Bienen.Bee;
        Aufgabe7_Bienen.bees.push(b);
    }
})(Aufgabe7_Bienen || (Aufgabe7_Bienen = {}));
//# sourceMappingURL=Aufgabe_7.js.map