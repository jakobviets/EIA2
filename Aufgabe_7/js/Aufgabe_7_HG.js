/*
Aufgabe: 6a
Name: Jakob Viets
Matrikel: 254780
Datum: 02.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe7_Bienen;
(function (Aufgabe7_Bienen) {
    class Background {
        constructor() {
            Aufgabe7_Bienen.crc2.fillStyle = "#a3d7ff";
            Aufgabe7_Bienen.crc2.fillRect(0, 0, Aufgabe7_Bienen.crc2.canvas.width, Aufgabe7_Bienen.crc2.canvas.height);
            this.drawMountain(300, 10);
            this.drawMountain(500, 50);
            this.drawMountain(100, 35);
            this.drawHill(0, 215);
            this.drawField(0, 255);
            this.drawFir(550, 180);
            this.drawFir(500, 190);
            this.drawFir(527, 205);
            this.drawTree(90, 230);
            this.drawTree(50, 320);
            this.drawCloud(130, 50);
            this.drawCloud(400, 32);
            this.drawBienenkorb(63, 347);
        }
        //Funktion für den Bienenkorb
        drawBienenkorb(_x, _y) {
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 30, _y);
            Aufgabe7_Bienen.crc2.arc(_x + 30, _y, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Aufgabe7_Bienen.crc2.fillStyle = "#cdad55";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x, _y - 6);
            Aufgabe7_Bienen.crc2.rect(_x, _y - 4, 30, 8);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x, _y);
            Aufgabe7_Bienen.crc2.arc(_x, _y, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 26, _y - 8);
            Aufgabe7_Bienen.crc2.arc(_x + 26, _y - 8, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 3, _y - 12);
            Aufgabe7_Bienen.crc2.rect(_x + 4, _y - 12, 22, 8);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 4, _y - 8);
            Aufgabe7_Bienen.crc2.arc(_x + 4, _y - 8, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 22, _y - 16);
            Aufgabe7_Bienen.crc2.arc(_x + 22, _y - 16, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 8, _y - 20);
            Aufgabe7_Bienen.crc2.rect(_x + 8, _y - 20, 14, 8);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 8, _y - 16);
            Aufgabe7_Bienen.crc2.arc(_x + 8, _y - 16, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 18, _y - 23);
            Aufgabe7_Bienen.crc2.arc(_x + 18, _y - 23, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 11, _y - 27);
            Aufgabe7_Bienen.crc2.rect(_x + 11, _y - 27, 8, 8);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 12, _y - 23);
            Aufgabe7_Bienen.crc2.arc(_x + 12, _y - 23, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            //Bienenkorbaufhängung
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(_x + 15, _y - 27, 3, 0, Math.PI, true);
            Aufgabe7_Bienen.crc2.stroke();
            //Bienenkorbeingang
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.fillStyle = "#000000";
            Aufgabe7_Bienen.crc2.rect(_x + 12, _y - 6, 6, 8);
            Aufgabe7_Bienen.crc2.fill();
        }
        //Funktion für die Wolken mit fünf Kreisen
        drawCloud(_x, _y) {
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x, _y);
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(_x, _y, 20, 0, Math.PI * 2, true);
            Aufgabe7_Bienen.crc2.fillStyle = "#ffffff";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(_x + 25, _y - 10, 20, 0, Math.PI * 2, true);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(_x + 22, _y + 15, 20, 0, Math.PI * 2, true);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(_x + 47, _y + 15, 20, 0, Math.PI * 2, true);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(_x + 55, _y - 8, 20, 0, Math.PI * 2, true);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
        }
        //Funktion für die Berge mit einem Dreieck
        drawMountain(_x, _y) {
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x, _y);
            Aufgabe7_Bienen.crc2.fillStyle = "#8a8a8a";
            Aufgabe7_Bienen.crc2.lineTo(_x - 250, _y + 200);
            Aufgabe7_Bienen.crc2.lineTo(_x + 250, _y + 200);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.stroke();
        }
        //Funktion für den hinteren Grashügel
        drawHill(_x, _y) {
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x, _y);
            Aufgabe7_Bienen.crc2.quadraticCurveTo(100, 150, 300, 215);
            Aufgabe7_Bienen.crc2.moveTo(300, 215);
            Aufgabe7_Bienen.crc2.quadraticCurveTo(500, 150, 600, 215);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fillStyle = "#3f7631";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.fillRect(0, 215, 600, 185);
        }
        //Funktion für die Wiese im Vordergrund
        drawField(_x, _y) {
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x, _y);
            Aufgabe7_Bienen.crc2.quadraticCurveTo(150, 220, 270, 255);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fillStyle = "#4faf36";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(270, 255);
            Aufgabe7_Bienen.crc2.quadraticCurveTo(540, 210, 600, 255);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.fillRect(0, 255, 600, 155);
        }
        //Funktion für die Tannen im Hintergund
        drawFir(_x, _y) {
            //Baumstamm
            Aufgabe7_Bienen.crc2.moveTo(_x, _y);
            Aufgabe7_Bienen.crc2.fillStyle = "#573418";
            Aufgabe7_Bienen.crc2.fillRect(_x, _y, 10, 20);
            //Baumkrone aus drei Dreiecken
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 5, _y - 10);
            Aufgabe7_Bienen.crc2.lineTo(_x - 10, _y + 10);
            Aufgabe7_Bienen.crc2.lineTo(_x + 20, _y + 10);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fillStyle = "#289a00";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 5, _y - 20);
            Aufgabe7_Bienen.crc2.lineTo(_x - 8, _y);
            Aufgabe7_Bienen.crc2.lineTo(_x + 18, _y);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 5, _y - 30);
            Aufgabe7_Bienen.crc2.lineTo(_x - 6, _y - 10);
            Aufgabe7_Bienen.crc2.lineTo(_x + 16, _y - 10);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
        }
        //Funktion für die Bäume im Vordergrund
        drawTree(_x, _y) {
            //Baumstamm
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(_x + 5, _y - 60);
            Aufgabe7_Bienen.crc2.lineTo(_x - 10, _y + 60);
            Aufgabe7_Bienen.crc2.lineTo(_x + 20, _y + 60);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fillStyle = "#936033";
            Aufgabe7_Bienen.crc2.fill();
            //Baumkrone aus dre Kreisen
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(_x + 25, _y - 32, 30, 0, Math.PI * 2, true);
            Aufgabe7_Bienen.crc2.fillStyle = "#00ff00";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(_x - 15, _y - 32, 30, 0, Math.PI * 2, true);
            Aufgabe7_Bienen.crc2.fillStyle = "#00ff00";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(_x + 5, _y - 60, 30, 0, Math.PI * 2, true);
            Aufgabe7_Bienen.crc2.fillStyle = "#00ff00";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
        }
    }
    Aufgabe7_Bienen.Background = Background;
})(Aufgabe7_Bienen || (Aufgabe7_Bienen = {}));
//# sourceMappingURL=Aufgabe_7_HG.js.map