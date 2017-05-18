/*
Aufgabe: 6a
Name: Jakob Viets
Matrikel: 254780
Datum: 11.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    //Funktion für die rot-gelben Blumen
    class Flower {
        //Erstellen einer neuen Blume
        constructor() {
            this.setRandomPositionAndSize();
        }
        //Zufallsposition für die Blumen erstellen
        setRandomPositionAndSize() {
            this.x = (Math.random() * 440) + 150;
            this.y = (Math.random() * 185) + 215;
            if (this.y <= 240)
                this.scale = 0.4;
            else if (this.y <= 300)
                this.scale = 0.6;
            else if (this.y <= 400)
                this.scale = 1;
        }
        draw() {
        }
    }
    Aufgabe8_Bienen.Flower = Flower;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=Aufgabe_8_Blumen.js.map