/*
Aufgabe: 7
Name: Jakob Viets
Matrikel: 254780
Datum: 11.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe7_Bienen;
(function (Aufgabe7_Bienen) {
    class Bee {
        //Erstellen einer neuen Biene
        constructor() {
            this.direction = Math.round(Math.random()) == 1;
            //Position für neue Biene
            this.x = 75;
            this.y = 345;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.draw();
        }
        //Biene an neuer Position malen
        update() {
            this.move();
            this.draw();
        }
        //Position der Biene ändern
        move() {
            if (this.direction == true) {
                this.x += Math.random() * 4 - 1;
                this.y += Math.random() * 4 - 2.1;
            }
            else {
                this.x += Math.random() * 4 - 3;
                this.y += Math.random() * 4 - 1.8;
            }
            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen
            if (this.x >= 595)
                this.x = -5;
            if (this.y <= 3)
                this.y = 397;
            if (this.x < -5)
                this.x = 595;
            if (this.y > 397)
                this.y = 3;
        }
        //Malen eienr Biene
        draw() {
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x + 10, this.y);
            Aufgabe7_Bienen.crc2.arc(this.x + 10, this.y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Aufgabe7_Bienen.crc2.fillStyle = this.color;
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x, this.y - 5);
            Aufgabe7_Bienen.crc2.rect(this.x, this.y - 5, 5, 10);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x + 5, this.y - 5);
            Aufgabe7_Bienen.crc2.rect(this.x + 5, this.y - 5, 5, 10);
            Aufgabe7_Bienen.crc2.fillStyle = "#000000";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe7_Bienen.crc2.arc(this.x, this.y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x + 16, this.y - 6);
            Aufgabe7_Bienen.crc2.arcTo(this.x + 18, this.y - 9, this.x + 20, this.y - 15, 10);
            Aufgabe7_Bienen.crc2.strokeStyle = "#000000";
            Aufgabe7_Bienen.crc2.stroke();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x + 16, this.y - 3);
            Aufgabe7_Bienen.crc2.arc(this.x + 16, this.y - 3, 4, 0, (Math.PI) * 2, false);
            Aufgabe7_Bienen.crc2.fillStyle = "#ffff00";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x + 17, this.y - 4);
            Aufgabe7_Bienen.crc2.arc(this.x + 17, this.y - 4, 1, 0, (Math.PI) * 2, false);
            Aufgabe7_Bienen.crc2.fillStyle = "#000000";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x - 8, this.y);
            Aufgabe7_Bienen.crc2.lineTo(this.x - 4, this.y - 2);
            Aufgabe7_Bienen.crc2.lineTo(this.x - 4, this.y + 2);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x + 10, this.y);
            Aufgabe7_Bienen.crc2.quadraticCurveTo(this.x + 10, this.y - 12, this.x + 5, this.y - 12);
            Aufgabe7_Bienen.crc2.moveTo(this.x + 5, this.y);
            Aufgabe7_Bienen.crc2.quadraticCurveTo(this.x - 5, this.y - 12, this.x + 5, this.y - 12);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.globalAlpha = 0.7;
            Aufgabe7_Bienen.crc2.fillStyle = "#21a8e7";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x + 10, this.y);
            Aufgabe7_Bienen.crc2.lineTo(this.x + 5, this.y);
            Aufgabe7_Bienen.crc2.lineTo(this.x + 5, this.y - 12);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.globalAlpha = 1;
        }
    }
    Aufgabe7_Bienen.Bee = Bee;
})(Aufgabe7_Bienen || (Aufgabe7_Bienen = {}));
//# sourceMappingURL=Aufgabe_7_Bienen.js.map