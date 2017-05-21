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
    class Flower3 extends Aufgabe8_Bienen.Flower {
        //Erstellen einer neuen Blume
        constructor() {
            super();
            this.draw();
        }
        //Funktion zum Malen der Flower3
        draw() {
            //Blütenstiel
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe8_Bienen.crc2.arcTo(this.x, this.y - 15, this.x + 5, (this.y - 30) * this.scale, 50 * this.scale);
            Aufgabe8_Bienen.crc2.lineWidth = 3 * this.scale;
            Aufgabe8_Bienen.crc2.strokeStyle = "#57e60f";
            Aufgabe8_Bienen.crc2.stroke();
            Aufgabe8_Bienen.crc2.closePath();
            //Blütenblätter (Fünf Kreise)
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 7 * this.scale, this.y - 30 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fillStyle = "#0000ff";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x - 5 * this.scale, this.y - 30 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 1 * this.scale, this.y - 28 * this.scale, 7 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 6 * this.scale, this.y - 37 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x - 2 * this.scale, this.y - 38 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
        }
    }
    Aufgabe8_Bienen.Flower3 = Flower3;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=Aufgabe_8_Flower3.js.map