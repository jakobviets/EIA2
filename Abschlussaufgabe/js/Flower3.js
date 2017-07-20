/*
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    //Funktion für die rot-gelben Blumen
    class Flower3 extends Abschlussaufgabe.Flower {
        //Erstellen einer neuen Blume
        constructor() {
            super();
            this.draw();
        }
        //Funktion zum Malen der Flower3
        draw() {
            //Blütenstiel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arcTo(this.x, this.y - 15, this.x + 5, (this.y - 30) * this.scale, 50 * this.scale);
            Abschlussaufgabe.crc2.lineWidth = 3 * this.scale;
            Abschlussaufgabe.crc2.strokeStyle = "#57e60f";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.closePath();
            //Blütenblätter (Fünf Kreise)
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 7 * this.scale, this.y - 30 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fillStyle = "#0000ff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 5 * this.scale, this.y - 30 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 1 * this.scale, this.y - 28 * this.scale, 7 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 6 * this.scale, this.y - 37 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 2 * this.scale, this.y - 38 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Flower3 = Flower3;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Flower3.js.map