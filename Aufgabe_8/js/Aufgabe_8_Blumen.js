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
            this.setRandomBlumensorte();
            this.draw();
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
        //Zufällige Auswahl der Blumensorte
        setRandomBlumensorte() {
            this.Blumensorte = Math.floor(Math.random() * 3);
        }
        draw() {
            switch (this.Blumensorte) {
                case 0:
                    this.drawFlower1();
                    break;
                case 1:
                    this.drawFlower2();
                    break;
                case 2:
                    this.drawFlower3();
                    break;
                default:
                    break;
            }
        }
        //Funktion zum Malen der Flower1
        drawFlower1() {
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
        //Funktion zum Malen der Flower2
        drawFlower2() {
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
        //Funktion zum Malen der Flower3
        drawFlower3() {
            //Blütenstiel
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe8_Bienen.crc2.arcTo(this.x, this.y - 10, this.x + 5, (this.y - 30) * this.scale, 60 * this.scale);
            Aufgabe8_Bienen.crc2.lineWidth = 3 * this.scale;
            Aufgabe8_Bienen.crc2.strokeStyle = "#57e60f";
            Aufgabe8_Bienen.crc2.stroke();
            Aufgabe8_Bienen.crc2.closePath();
            //Blütenblätter (Fünf Kreise)
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 7 * this.scale, this.y - 19 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fillStyle = "#0000ff";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x - 5 * this.scale, this.y - 19 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 1 * this.scale, this.y - 17 * this.scale, 7 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x + 6 * this.scale, this.y - 26 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(this.x - 2 * this.scale, this.y - 27 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
        }
    }
    Aufgabe8_Bienen.Flower = Flower;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=Aufgabe_8_Blumen.js.map