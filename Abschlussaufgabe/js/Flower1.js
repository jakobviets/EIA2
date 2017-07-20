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
    class Flower1 extends Abschlussaufgabe.Flower {
        //Erstellen einer neuen Blume
        constructor() {
            super();
            this.draw();
        }
        //Funktion zum Malen der Flower1
        draw() {
            //Blütenstiel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arcTo(this.x, this.y - 15, this.x + 5, (this.y - 40) * this.scale, 80 * this.scale);
            Abschlussaufgabe.crc2.lineWidth = 3 * this.scale;
            Abschlussaufgabe.crc2.strokeStyle = "#57e60f";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.closePath();
            //Blütenblätter (Vier Kreise)
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 19 * this.scale, this.y - 32 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fillStyle = "#ff0000";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x - 1 * this.scale, this.y - 32 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 9 * this.scale, this.y - 22 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 9 * this.scale, this.y - 42 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            //Blütenmitte Kreis
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 9 * this.scale, this.y - 32 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fillStyle = "#ffff00";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Flower1 = Flower1;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Flower1.js.map