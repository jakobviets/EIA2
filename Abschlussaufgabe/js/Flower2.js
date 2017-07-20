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
    class Flower2 extends Abschlussaufgabe.Flower {
        //Erstellen einer neuen Blume
        constructor() {
            super();
            this.draw();
        }
        //Funktion zum Malen der Flower2
        draw() {
            //Blütenstiel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arcTo(this.x, this.y - 20, this.x + 5, (this.y - 40) * this.scale, 120 * this.scale);
            Abschlussaufgabe.crc2.lineWidth = 3 * this.scale;
            Abschlussaufgabe.crc2.strokeStyle = "#57e60f";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.closePath();
            //Blüte aus Halbkreis und gezeichneten Spitzen
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 5 * this.scale, this.y - 44 * this.scale, 12 * this.scale, 0, Math.PI, false);
            Abschlussaufgabe.crc2.fillStyle = "#9401be";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x - 7 * this.scale, this.y - 43 * this.scale);
            Abschlussaufgabe.crc2.lineTo(this.x - 6 * this.scale, this.y - 60 * this.scale);
            Abschlussaufgabe.crc2.lineTo(this.x + 1 * this.scale, this.y - 50 * this.scale);
            Abschlussaufgabe.crc2.lineTo(this.x + 6 * this.scale, this.y - 60 * this.scale);
            Abschlussaufgabe.crc2.lineTo(this.x + 9 * this.scale, this.y - 50 * this.scale);
            Abschlussaufgabe.crc2.lineTo(this.x + 16 * this.scale, this.y - 60 * this.scale);
            Abschlussaufgabe.crc2.lineTo(this.x + 17 * this.scale, this.y - 43 * this.scale);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Flower2 = Flower2;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Flower2.js.map