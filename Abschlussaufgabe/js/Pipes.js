/*
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Pipe {
        //Erstellen neuer Pipes
        constructor() {
            this.k = 0.1;
            //Position für neue Pipes
            this.x = 220;
            this.x2 = this.x + 25;
            this.y = (Math.random() * 200);
            this.draw();
        }
        //Pipes an neuer Position malen
        update() {
            this.move();
            this.draw();
        }
        //Position der Pipes ändern
        move() {
            this.x -= 0.75;
        }
        //Malen der Pipes
        draw() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.lineWidth = 2.5;
            Abschlussaufgabe.crc2.strokeStyle = "black";
            Abschlussaufgabe.crc2.rect(this.x, 0, 25, this.y);
            Abschlussaufgabe.crc2.fillStyle = "#1C78E2";
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y + 60);
            Abschlussaufgabe.crc2.rect(this.x, this.y + 60, 25, 308.5 - (this.y + 60));
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Pipe = Pipe;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Pipes.js.map