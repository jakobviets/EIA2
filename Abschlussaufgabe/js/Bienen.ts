/* 
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export class Bee {
        x: number;
        y: number;
        color: string;
        alive: boolean = true;

        //Erstellen einer neuen Biene
        constructor() {
            //Position für neue Biene
            this.x = 60;
            this.y = 155;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            crc2.scale(2, 2);
            this.draw();
        }

        //Biene an neuer Position malen
        update(): void {
            this.move();
            this.draw();
        }
        
        //Position der Biene ändern
        move(): void {
            //Biene je nach Userinteraktion bewegen
            if(down == true){
                this.y += 9;
                down = false;
            }
            else if(up == true){
                this.y -= 10;
                up = false;
            }
            
            //Überprüfen ob Biene mit Boden kollidiert
            if(this.y >= 305){
                this.alive = false;
            }
            else
                this.y += 0.75;
            if(this.y <= 8){
                this.y += 10;
            }
            //Überprüfen ob Biene mit Rohren kollidiert
            if((pipes[0].x < 80 && pipes[0].x > 35) || (pipes[0].x2 < 80 && pipes[0].x2 > 35)){
                if(bees[0].y <= pipes[0].y || bees[0].y >= pipes[0].y + 60){
                this.alive = false;
                }
            }
            
        }

        //Malen eienr Biene
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.arc(this.x + 10, this.y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 5);
            crc2.rect(this.x, this.y - 5, 5, 10);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 5, this.y - 5);
            crc2.rect(this.x + 5, this.y - 5, 5, 10);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x, this.y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 16, this.y - 6);
            crc2.arcTo(this.x + 18, this.y - 9, this.x + 20, this.y - 15, 10);
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 16, this.y - 3);
            crc2.arc(this.x + 16, this.y - 3, 4, 0, (Math.PI) * 2, false);
            crc2.fillStyle = "#ffff00";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + 17, this.y - 4);
            crc2.arc(this.x + 17, this.y - 4, 1, 0, (Math.PI) * 2, false);
            crc2.fillStyle = "#000000";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x - 8, this.y);
            crc2.lineTo(this.x - 4, this.y - 2);
            crc2.lineTo(this.x - 4, this.y + 2);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.quadraticCurveTo(this.x + 10, this.y - 12, this.x + 5, this.y - 12);
            crc2.moveTo(this.x + 5, this.y);
            crc2.quadraticCurveTo(this.x - 5, this.y - 12, this.x + 5, this.y - 12);
            crc2.closePath();
            crc2.globalAlpha = 0.7;
            crc2.fillStyle = "#21a8e7";
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 5, this.y);
            crc2.lineTo(this.x + 5, this.y - 12);
            crc2.closePath();
            crc2.fill();
            crc2.globalAlpha = 1;
        }


    }
}