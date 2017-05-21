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
    Aufgabe8_Bienen.flowers = [];
    let Blumenzahl = 10;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe8_Bienen.crc2 = canvas.getContext("2d");
        //Malen des Hintergrundes
        let r = new Aufgabe8_Bienen.Background;
        //        //Erstellen der Zufallsblumen
        for (let i = 0; i < Blumenzahl; i++) {
            let s = new Aufgabe8_Bienen.Flower1;
            let f = new Aufgabe8_Bienen.Flower2;
            let g = new Aufgabe8_Bienen.Flower3;
        }
        //gemaltes Bild abspeichern
        imgData = Aufgabe8_Bienen.crc2.getImageData(0, 0, 600, 400);
        //Erstellen der speziellen Blumen und speichern in einem Array
        for (let i = 0; i < 5; i++) {
            let s = new Aufgabe8_Bienen.Flower1;
            let q = new Aufgabe8_Bienen.Flower2;
            let g = new Aufgabe8_Bienen.Flower3;
            Aufgabe8_Bienen.flowers.push(s);
            Aufgabe8_Bienen.flowers.push(q);
            Aufgabe8_Bienen.flowers.push(g);
        }
        console.log(Aufgabe8_Bienen.flowers);
        //Erstellen der Bienen und speichern in einem Array
        for (let i = 0; i < 3; i++) {
            let b = new Aufgabe8_Bienen.honeyBee;
            let c = new Aufgabe8_Bienen.Bee;
            Aufgabe8_Bienen.bees.push(b);
        }
        console.log(Aufgabe8_Bienen.bees);
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);
        canvas.addEventListener("touch", neueBiene);
    }
    //Funktion für die Animation der Bienen
    function animate() {
        //gespeichertes Hintergrundbild erneut aufrufen
        Aufgabe8_Bienen.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < Aufgabe8_Bienen.flowers.length; i++) {
            let f = Aufgabe8_Bienen.flowers[i];
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