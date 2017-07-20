/* 
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export class Pipe {
        x: number;
        x2: number;
        y: number;
        k: number = 0.1;
        

        //Erstellen neuer Pipes
        constructor() {
            //Position für neue Pipes
            this.x = 220;
            this.x2 = this.x + 25;
            this.y = (Math.random() * 200);
            this.draw();
        }

        //Pipes an neuer Position malen
        update(): void {
            this.move();
            this.draw();
        }
        
        //Position der Pipes ändern
        move(): void {
            this.x -= 0.75;
        }

        //Malen der Pipes
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineWidth= 2.5;
            crc2.strokeStyle="black";
            crc2.rect(this.x, 0, 25, this.y);
            crc2.fillStyle = "#1C78E2";
            crc2.closePath();
            crc2.stroke(); 
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 60);
            crc2.rect(this.x, this.y + 60, 25, 308.5 - (this.y + 60));
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
        }
    }
}