/*
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Bee {
        //Erstellen einer neuen Biene
        constructor() {
            this.alive = true;
            //Position für neue Biene
            this.x = 60;
            this.y = 155;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            Abschlussaufgabe.crc2.scale(2, 2);
            this.draw();
        }
        //Biene an neuer Position malen
        update() {
            this.move();
            this.draw();
        }
        //Position der Biene ändern
        move() {
            //Biene je nach Userinteraktion bewegen
            if (Abschlussaufgabe.down == true) {
                this.y += 9;
                Abschlussaufgabe.down = false;
            }
            else if (Abschlussaufgabe.up == true) {
                this.y -= 10;
                Abschlussaufgabe.up = false;
            }
            //Überprüfen ob Biene mit Boden kollidiert
            if (this.y >= 305) {
                this.alive = false;
            }
            else
                this.y += 0.75;
            if (this.y <= 8) {
                this.y += 10;
            }
            //Überprüfen ob Biene mit Rohren kollidiert
            if ((Abschlussaufgabe.pipes[0].x < 80 && Abschlussaufgabe.pipes[0].x > 35) || (Abschlussaufgabe.pipes[0].x2 < 80 && Abschlussaufgabe.pipes[0].x2 > 35)) {
                if (Abschlussaufgabe.bees[0].y <= Abschlussaufgabe.pipes[0].y || Abschlussaufgabe.bees[0].y >= Abschlussaufgabe.pipes[0].y + 60) {
                    this.alive = false;
                }
            }
        }
        //Malen eienr Biene
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 10, this.y);
            Abschlussaufgabe.crc2.arc(this.x + 10, this.y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Abschlussaufgabe.crc2.fillStyle = this.color;
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y - 5);
            Abschlussaufgabe.crc2.rect(this.x, this.y - 5, 5, 10);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 5, this.y - 5);
            Abschlussaufgabe.crc2.rect(this.x + 5, this.y - 5, 5, 10);
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.arc(this.x, this.y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 16, this.y - 6);
            Abschlussaufgabe.crc2.arcTo(this.x + 18, this.y - 9, this.x + 20, this.y - 15, 10);
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 16, this.y - 3);
            Abschlussaufgabe.crc2.arc(this.x + 16, this.y - 3, 4, 0, (Math.PI) * 2, false);
            Abschlussaufgabe.crc2.fillStyle = "#ffff00";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 17, this.y - 4);
            Abschlussaufgabe.crc2.arc(this.x + 17, this.y - 4, 1, 0, (Math.PI) * 2, false);
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x - 8, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x - 4, this.y - 2);
            Abschlussaufgabe.crc2.lineTo(this.x - 4, this.y + 2);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 10, this.y);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 10, this.y - 12, this.x + 5, this.y - 12);
            Abschlussaufgabe.crc2.moveTo(this.x + 5, this.y);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x - 5, this.y - 12, this.x + 5, this.y - 12);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.globalAlpha = 0.7;
            Abschlussaufgabe.crc2.fillStyle = "#21a8e7";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 10, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 5, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x + 5, this.y - 12);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.globalAlpha = 1;
        }
    }
    Abschlussaufgabe.Bee = Bee;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Bienen.js.map