/* 
Aufgabe: 6a
Name: Jakob Viets
Matrikel: 254780
Datum: 02.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe7_Bienen {


    //Funktion für die rot-gelben Blumen
    export class Flower {
        x: number;
        y: number;
        scale: number;
        Blumensorte: number;

        constructor() {
                this.setRandomPosition();
                this.setRandomBlumensorte();
                if (this.y <= 240)
                    this.scale = 0.4;
                else if (this.y <= 300)
                    this.scale = 0.6;
                else if (this.y <= 400)
                    this.scale = 1;

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
        setRandomPosition(): void {
            this.x = (Math.random() * 440) + 150;
            this.y = (Math.random() * 185) + 215;
        }

        setRandomBlumensorte(): void {
            this.Blumensorte = Math.floor(Math.random() * 3);
        }


        drawFlower1(): void {
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

        //Funktion für die Tulpen
        drawFlower2(): void {
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

        //Funktion für die blauen Blumen
        drawFlower3(): void {
            //Blütenstiel
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arcTo(this.x, this.y - 10, this.x + 5, (this.y - 30) * this.scale, 60 * this.scale);
            crc2.lineWidth = 3 * this.scale;
            crc2.strokeStyle = "#57e60f";
            crc2.stroke();
            crc2.closePath();
            //Blütenblätter (Fünf Kreise)
            crc2.beginPath();
            crc2.arc(this.x + 7 * this.scale, this.y - 19 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            crc2.fillStyle = "#0000ff";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x - 5 * this.scale, this.y - 19 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 1 * this.scale, this.y - 17 * this.scale, 7 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x + 6 * this.scale, this.y - 26 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.arc(this.x - 2 * this.scale, this.y - 27 * this.scale, 6 * this.scale, 0, Math.PI * 2, true);
            crc2.fill();
            crc2.closePath();
        }


    }
}