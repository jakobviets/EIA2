/* 
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {


    //Funktion für die rot-gelben Blumen
    export class Flower1 extends Flower {

        //Erstellen einer neuen Blume
        constructor() {
            super();
            this.draw();
        }

        //Funktion zum Malen der Flower1
        draw(): void {
            //Blütenstiel
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arcTo(this.x, this.y - 15, this.x + 5, (this.y - 40) * this.scale, 80 * this.scale);
            crc2.lineWidth = 3 * this.scale;
            crc2.strokeStyle = "#57e60f";
            crc2.stroke();
            crc2.closePath();
            //Blütenblätter (Vier Kreise)
            crc2.beginPath();
            crc2.arc(this.x + 19 * this.scale, this.y - 32 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            crc2.fillStyle = "#ff0000";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x - 1 * this.scale, this.y - 32 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 9 * this.scale, this.y - 22 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 9 * this.scale, this.y - 42 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            //Blütenmitte Kreis
            crc2.beginPath();
            crc2.arc(this.x + 9 * this.scale, this.y - 32 * this.scale, 8 * this.scale, 0, Math.PI * 2, true);
            crc2.fillStyle = "#ffff00";
            crc2.fill();
            crc2.closePath();
        }
    }
}