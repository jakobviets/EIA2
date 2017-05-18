/*
Aufgabe: 7
Name: Jakob Viets
Matrikel: 254780
Datum: 11.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    window.addEventListener("load", init);
    let imgData;
    Aufgabe8_Bienen.bees = [];
    Aufgabe8_Bienen.n = 10;
    let flowers = [];
    let Blumenzahl = 80;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe8_Bienen.crc2 = canvas.getContext("2d");
        //Malen des Hintergrundes
        let r = new Aufgabe8_Bienen.Background;
        //Erstellen der Zufallsblumen
        for (let i = 0; i < Blumenzahl; i++) {
            let s = new Aufgabe8_Bienen.Flower;
        }
        //gemaltes Bild abspeichern
        imgData = Aufgabe8_Bienen.crc2.getImageData(0, 0, 600, 400);
        //Erstellen der speziellen Blumen und speichern in einem Array
        for (let i = 0; i < 15; i++) {
            let f = new Aufgabe8_Bienen.Flower;
            flowers[i] = f;
        }
        console.log(flowers);
        //Erstellen der Bienen und speichern in einem Array
        for (let i = 0; i < Aufgabe8_Bienen.n; i++) {
            let b = new Aufgabe8_Bienen.Bee;
            Aufgabe8_Bienen.bees[i] = b;
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);
        canvas.addEventListener("touch", neueBiene);
    }
    //Funktion für die Animation der Bienen
    function animate() {
        //gespeichertes Hintergrundbild erneut aufrufen
        Aufgabe8_Bienen.crc2.putImageData(imgData, 0, 0);
        for (let j = 0; j < flowers.length; j++) {
            let f = flowers[j];
            f.draw();
        }
        for (let i = 0; i < Aufgabe8_Bienen.bees.length; i++) {
            let b = Aufgabe8_Bienen.bees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }
    //Funktion für das Erstellen einer neuen Biene
    function neueBiene() {
        let b = new Aufgabe8_Bienen.Bee;
        Aufgabe8_Bienen.bees.push(b);
    }
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=Aufgabe_8.js.map