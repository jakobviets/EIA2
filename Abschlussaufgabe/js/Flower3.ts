/* 
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {


    //Funktion für die rot-gelben Blumen
    export class Flower3 extends Flower {

        //Erstellen einer neuen Blume
        constructor() {
            super();
            this.draw();
        }

        //Funktion zum Malen der Flower3
        draw(): void {
            //Blütenstiel
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arcTo(this.x, this.y - 15, this.x + 5, (this.y - 30) * this.scale, 50 * this.scale);
            crc2.lineWidth = 3 * this.scale;
            crc2.strokeStyle = "#57e60f";
            crc2.stroke();
            crc2.closePath();
            //Blütenblätter (Fünf Kreise)
            crc2.beginPath();
            crc2.arc(this.x + 7 * this.scale, this.y - 30 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            crc2.fillStyle = "#0000ff";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x - 5 * this.scale, this.y - 30 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 1 * this.scale, this.y - 28 * this.scale, 7 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 6 * this.scale, this.y - 37 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x - 2 * this.scale, this.y - 38 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
        }
    }
}