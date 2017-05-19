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
    class Flower2 extends Aufgabe8_Bienen.Flower {
        //Erstellen einer neuen Blume
        constructor() {
            super();
            this.draw();
        }
        //Funktion zum Malen der Flower2
        draw() {
            //Blütenstiel
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe8_Bienen.crc2.arcTo(this.x, this.y - 20, this.x + 5, (this.y - 40) * this.scale, 120 * this.scale);
            Aufgabe8_Bienen.crc2.lineWidth = 3 * this.scale;
            Aufgabe8_Bienen.crc2.strokeStyle = "#57e60f";
            Aufgabe8_Bienen.crc2.stroke();
            Aufgabe8_Bienen.crc2.closePath();
            //Blüte aus Halbkreis und gezeichneten Spitzen
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 5 * this.scale, this.y - 44 * this.scale, 12 * this.scale, 0, Math.PI, false);
            Aufgabe8_Bienen.crc2.fillStyle = "#9401be";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x - 7 * this.scale, this.y - 43 * this.scale);
            Aufgabe8_Bienen.crc2.lineTo(this.x - 6 * this.scale, this.y - 60 * this.scale);
            Aufgabe8_Bienen.crc2.lineTo(this.x + 1 * this.scale, this.y - 50 * this.scale);
            Aufgabe8_Bienen.crc2.lineTo(this.x + 6 * this.scale, this.y - 60 * this.scale);
            Aufgabe8_Bienen.crc2.lineTo(this.x + 9 * this.scale, this.y - 50 * this.scale);
            Aufgabe8_Bienen.crc2.lineTo(this.x + 16 * this.scale, this.y - 60 * this.scale);
            Aufgabe8_Bienen.crc2.lineTo(this.x + 17 * this.scale, this.y - 43 * this.scale);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
        }
    }
    Aufgabe8_Bienen.Flower2 = Flower2;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=Aufgabe_8_Flower2.js.map