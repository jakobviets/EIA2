/* 
Aufgabe: 6a
Name: Jakob Viets
Matrikel: 254780
Datum: 11.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe8_Bienen {


    //Funktion für die rot-gelben Blumen
    export class Flower2 extends Flower {


        //Erstellen einer neuen Blume
        constructor() {
            super();
            this.draw();
        }


        //Funktion zum Malen der Flower2
        draw(): void {
            //Blütenstiel
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arcTo(this.x, this.y - 20, this.x + 5, (this.y - 40) * this.scale, 120 * this.scale);
            crc2.lineWidth = 3 * this.scale;
            crc2.strokeStyle = "#57e60f";
            crc2.stroke();
            crc2.closePath();
            //Blüte aus Halbkreis und gezeichneten Spitzen
            crc2.beginPath();
            crc2.arc(this.x + 5 * this.scale, this.y - 44 * this.scale, 12 * this.scale, 0, Math.PI, false);
            crc2.fillStyle = "#9401be";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x - 7 * this.scale, this.y - 43 * this.scale);
            crc2.lineTo(this.x - 6 * this.scale, this.y - 60 * this.scale);
            crc2.lineTo(this.x + 1 * this.scale, this.y - 50 * this.scale);
            crc2.lineTo(this.x + 6 * this.scale, this.y - 60 * this.scale);
            crc2.lineTo(this.x + 9 * this.scale, this.y - 50 * this.scale);
            crc2.lineTo(this.x + 16 * this.scale, this.y - 60 * this.scale);
            crc2.lineTo(this.x + 17 * this.scale, this.y - 43 * this.scale);
            crc2.closePath();
            crc2.fill();
        }
    }
}