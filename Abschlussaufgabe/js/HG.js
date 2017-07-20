/*
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Background {
        //Malen des Hintergrundes
        constructor() {
            Abschlussaufgabe.crc2.fillStyle = "#a3d7ff";
            Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.crc2.canvas.width, Abschlussaufgabe.crc2.canvas.height);
            this.drawMountain(270, 350);
            this.drawMountain(100, 380);
            this.drawHill(0, 550);
            this.drawField(0, 600);
            this.drawFir(350, 530);
            this.drawFir(300, 520);
            this.drawFir(327, 505);
            this.drawTree(160, 550);
            this.drawTree(50, 560);
            this.drawCloud(50, 50);
            this.drawCloud(300, 82);
            this.drawCloud(195, 150);
            this.drawBienenkorb(63, 580);
            this.drawBoden(0, 620);
        }
        //Funktion für den Bienenkorb
        drawBienenkorb(_x, _y) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 30, _y);
            Abschlussaufgabe.crc2.arc(_x + 30, _y, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Abschlussaufgabe.crc2.fillStyle = "#cdad55";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y - 6);
            Abschlussaufgabe.crc2.rect(_x, _y - 4, 30, 8);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.arc(_x, _y, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 26, _y - 8);
            Abschlussaufgabe.crc2.arc(_x + 26, _y - 8, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 3, _y - 12);
            Abschlussaufgabe.crc2.rect(_x + 4, _y - 12, 22, 8);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 4, _y - 8);
            Abschlussaufgabe.crc2.arc(_x + 4, _y - 8, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 22, _y - 16);
            Abschlussaufgabe.crc2.arc(_x + 22, _y - 16, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 8, _y - 20);
            Abschlussaufgabe.crc2.rect(_x + 8, _y - 20, 14, 8);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 8, _y - 16);
            Abschlussaufgabe.crc2.arc(_x + 8, _y - 16, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 18, _y - 23);
            Abschlussaufgabe.crc2.arc(_x + 18, _y - 23, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 11, _y - 27);
            Abschlussaufgabe.crc2.rect(_x + 11, _y - 27, 8, 8);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 12, _y - 23);
            Abschlussaufgabe.crc2.arc(_x + 12, _y - 23, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            //Bienenkorbaufhängung
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x + 15, _y - 27, 3, 0, Math.PI, true);
            Abschlussaufgabe.crc2.stroke();
            //Bienenkorbeingang
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.rect(_x + 12, _y - 6, 6, 8);
            Abschlussaufgabe.crc2.fill();
        }
        //Funktion für die Wolken mit fünf Kreisen
        drawCloud(_x, _y) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x, _y, 20, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fillStyle = "#ffffff";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x + 25, _y - 10, 20, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x + 22, _y + 15, 20, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x + 47, _y + 15, 20, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x + 55, _y - 8, 20, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
        //Funktion für die Berge mit einem Dreieck
        drawMountain(_x, _y) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.fillStyle = "#8a8a8a";
            Abschlussaufgabe.crc2.lineTo(_x - 250, _y + 200);
            Abschlussaufgabe.crc2.lineTo(_x + 250, _y + 200);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.stroke();
        }
        drawBoden(_x, _y) {
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.lineTo(405, 620);
            Abschlussaufgabe.crc2.lineWidth = 5;
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fillStyle = "#fff3e0";
            Abschlussaufgabe.crc2.fillRect(0, 620, 405, 100);
        }
        //Funktion für den hinteren Grashügel
        drawHill(_x, _y) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.quadraticCurveTo(90, 450, 180, 550);
            Abschlussaufgabe.crc2.moveTo(180, 550);
            Abschlussaufgabe.crc2.quadraticCurveTo(340, 430, 405, 550);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "#3f7631";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.fillRect(0, 550, 405, 185);
        }
        //Funktion für die Wiese im Vordergrund
        drawField(_x, _y) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.quadraticCurveTo(100, 550, 202, 600);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "#4faf36";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(202, 600);
            Abschlussaufgabe.crc2.quadraticCurveTo(300, 560, 405, 600);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.fillRect(0, 600, 405, 220);
        }
        //Funktion für die Tannen im Hintergund
        drawFir(_x, _y) {
            //Baumstamm
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.fillStyle = "#573418";
            Abschlussaufgabe.crc2.fillRect(_x, _y, 10, 20);
            //Baumkrone aus drei Dreiecken
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 5, _y - 10);
            Abschlussaufgabe.crc2.lineTo(_x - 10, _y + 10);
            Abschlussaufgabe.crc2.lineTo(_x + 20, _y + 10);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "#289a00";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 5, _y - 20);
            Abschlussaufgabe.crc2.lineTo(_x - 8, _y);
            Abschlussaufgabe.crc2.lineTo(_x + 18, _y);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 5, _y - 30);
            Abschlussaufgabe.crc2.lineTo(_x - 6, _y - 10);
            Abschlussaufgabe.crc2.lineTo(_x + 16, _y - 10);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        }
        //Funktion für die Bäume im Vordergrund
        drawTree(_x, _y) {
            //Baumstamm
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x + 5, _y - 60);
            Abschlussaufgabe.crc2.lineTo(_x - 10, _y + 60);
            Abschlussaufgabe.crc2.lineTo(_x + 20, _y + 60);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fillStyle = "#936033";
            Abschlussaufgabe.crc2.fill();
            //Baumkrone aus drei Kreisen
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x + 25, _y - 32, 30, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fillStyle = "#00ff00";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x - 15, _y - 32, 30, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fillStyle = "#00ff00";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x + 5, _y - 60, 30, 0, Math.PI * 2, true);
            Abschlussaufgabe.crc2.fillStyle = "#00ff00";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Background = Background;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=HG.js.map