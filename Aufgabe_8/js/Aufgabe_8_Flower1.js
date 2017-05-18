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
    class Flower1 extends Aufgabe8_Bienen.Flower {
        //Erstellen einer neuen Blume
        constructor() {
            super();
            this.draw();
        }
        //Funktion zum Malen der Flower1
        draw() {
            //Blütenstiel
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe8_Bienen.crc2.arcTo(this.x, this.y - 15, this.x + 5, (this.y - 40) * this.scale, 80 * this.scale);
            Aufgabe8_Bienen.crc2.lineWidth = 3 * this.scale;
            Aufgabe8_Bienen.crc2.strokeStyle = "#57e60f";
            Aufgabe8_Bienen.crc2.stroke();
            Aufgabe8_Bienen.crc2.closePath();
            //Blütenblätter (Vier Kreise)
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 19 * this.scale, this.y - 32 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fillStyle = "#ff0000";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x - 1 * this.scale, this.y - 32 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 9 * this.scale, this.y - 22 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 9 * this.scale, this.y - 42 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            //Blütenmitte Kreis
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 9 * this.scale, this.y - 32 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fillStyle = "#ffff00";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
        }
    }
    Aufgabe8_Bienen.Flower1 = Flower1;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=Aufgabe_8_Flower1.js.map