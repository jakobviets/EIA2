/*
Aufgabe: 6a
Name: Jakob Viets
Matrikel: 254780
Datum: 02.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe5_Bienen;
(function (Aufgabe5_Bienen) {
    window.addEventListener("load", init);
    let crc2;
    let imgData;
    let bees = [];
    let n = 10;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //Anzahl der Zufallsblumen
        let Blumenzahl = 120;
        //Einfärben des ganzen Canvas in hellblau für den Himmel
        crc2.fillStyle = "#a3d7ff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Zeichnen der verschiedenen Elemente durch Funktionsaufruf
        drawMountain(300, 10);
        drawMountain(500, 50);
        drawMountain(100, 35);
        drawHill(0, 215);
        drawField(0, 255);
        drawFir(550, 180);
        drawFir(500, 190);
        drawFir(527, 205);
        drawTree(90, 230);
        drawTree(50, 320);
        drawCloud(130, 50);
        drawCloud(400, 32);
        drawBienenkorb(63, 347);
        //Schleife für das Malen der Zufallsblumen
        for (let i = 0; i < Blumenzahl; i++) {
            //Zufallszahl für die 3 verschiedenen Blumenarten für "switch"
            let Blumensorte = Math.floor(Math.random() * 3);
            //Zufallszahlen für die x- und y-Koordinaten (x: 150-590; y: 215-400)
            let x = Math.floor((Math.random() * 440) + 150);
            let y = Math.floor((Math.random() * 185) + 215);
            //Variable für die Größe der Blumen
            let scale;
            //Anpassen der Blumengröße nach y-Position (Vodergrund – Hintergrund)
            if (y <= 240)
                scale = 0.4;
            else if (y <= 300)
                scale = 0.6;
            else if (y <= 400)
                scale = 1;
            //Zufällige Blumenart wird ausgewählt und gezeichnet
            switch (Blumensorte) {
                case 0:
                    drawFlower1(x, y, scale);
                    break;
                case 1:
                    drawFlower2(x, y, scale);
                    break;
                case 2:
                    drawTulpe(x, y, scale);
                    break;
                default:
                    break;
            }
        }
        //gemaltes Bild abspeichern
        imgData = crc2.getImageData(0, 0, 600, 400);
        //Startposition für n Bienen in Array abspeichern
        for (let i = 0; i < n; i++) {
            let b = { x: 0, y: 0, color: "" };
            b.x = 75;
            b.y = 345;
            b.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            bees[i] = b;
        }
        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);
        canvas.addEventListener("touch", neueBiene);
    }
    //Funktion um eine neue Biene nach Klick zu starten, neue x- und y-Position ins Array hinzufügen
    function neueBiene() {
        let j = bees.length;
        bees.push({ x: 75, y: 345, color: "" });
        bees[j].color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    }
    //Funktion für die Animation der Bienen
    function animate() {
        //gespeichertes Hintergrundbild erneut aufrufen
        crc2.putImageData(imgData, 0, 0);
        //Position der Bienen durch zwei Zufallszahlen bestimmen
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            b.x += Math.random() * 4 - 1;
            b.y += Math.random() * 4 - 2.1;
            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen
            if (b.x >= 595)
                b.x = -5;
            if (b.y <= 3)
                b.y = 397;
            if (b.x < -5)
                b.x = 595;
            if (b.y > 397)
                b.y = 3;
            //Malen der Bienen an der neuen Position
            drawBee(b.x, b.y, b.color);
        }
        window.setTimeout(animate, 20);
    }
    //Funktion für das Malen einer Biene
    function drawBee(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y);
        crc2.arc(_x + 10, _y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x, _y - 5);
        crc2.rect(_x, _y - 5, 5, 10);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 5);
        crc2.rect(_x + 5, _y - 5, 5, 10);
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 5, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 16, _y - 6);
        crc2.arcTo(_x + 18, _y - 9, _x + 20, _y - 15, 10);
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 16, _y - 3);
        crc2.arc(_x + 16, _y - 3, 4, 0, (Math.PI) * 2, false);
        crc2.fillStyle = "#ffff00";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 17, _y - 4);
        crc2.arc(_x + 17, _y - 4, 1, 0, (Math.PI) * 2, false);
        crc2.fillStyle = "#000000";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x - 8, _y);
        crc2.lineTo(_x - 4, _y - 2);
        crc2.lineTo(_x - 4, _y + 2);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y);
        crc2.quadraticCurveTo(_x + 10, _y - 12, _x + 5, _y - 12);
        crc2.moveTo(_x + 5, _y);
        crc2.quadraticCurveTo(_x - 5, _y - 12, _x + 5, _y - 12);
        crc2.closePath();
        crc2.globalAlpha = 0.7;
        crc2.fillStyle = "#21a8e7";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 10, _y);
        crc2.lineTo(_x + 5, _y);
        crc2.lineTo(_x + 5, _y - 12);
        crc2.closePath();
        crc2.fill();
        crc2.globalAlpha = 1;
    }
    //Funktion für den Bienenkorb
    function drawBienenkorb(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x + 30, _y);
        crc2.arc(_x + 30, _y, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
        crc2.fillStyle = "#cdad55";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x, _y - 6);
        crc2.rect(_x, _y - 4, 30, 8);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 26, _y - 8);
        crc2.arc(_x + 26, _y - 8, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 3, _y - 12);
        crc2.rect(_x + 4, _y - 12, 22, 8);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 4, _y - 8);
        crc2.arc(_x + 4, _y - 8, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 22, _y - 16);
        crc2.arc(_x + 22, _y - 16, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 8, _y - 20);
        crc2.rect(_x + 8, _y - 20, 14, 8);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 8, _y - 16);
        crc2.arc(_x + 8, _y - 16, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 18, _y - 23);
        crc2.arc(_x + 18, _y - 23, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 11, _y - 27);
        crc2.rect(_x + 11, _y - 27, 8, 8);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 12, _y - 23);
        crc2.arc(_x + 12, _y - 23, 4, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
        crc2.fill();
        crc2.closePath();
        //Bienenkorbaufhängung
        crc2.beginPath();
        crc2.arc(_x + 15, _y - 27, 3, 0, Math.PI, true);
        crc2.stroke();
        //Bienenkorbeingang
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.rect(_x + 12, _y - 6, 6, 8);
        crc2.fill();
    }
    //Funktion für die Wolken mit fünf Kreisen
    function drawCloud(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.beginPath();
        crc2.arc(_x, _y, 20, 0, Math.PI * 2, true);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 25, _y - 10, 20, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 22, _y + 15, 20, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 47, _y + 15, 20, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 55, _y - 8, 20, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
    }
    //Funktion für die Berge mit einem Dreieck
    function drawMountain(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "#8a8a8a";
        crc2.lineTo(_x - 250, _y + 200);
        crc2.lineTo(_x + 250, _y + 200);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    //Funktion für den hinteren Grashügel
    function drawHill(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(100, 150, 300, 215);
        crc2.moveTo(300, 215);
        crc2.quadraticCurveTo(500, 150, 600, 215);
        crc2.closePath();
        crc2.fillStyle = "#3f7631";
        crc2.fill();
        crc2.fillRect(0, 215, 600, 185);
    }
    //Funktion für die Wiese im Vordergrund
    function drawField(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(150, 220, 270, 255);
        crc2.closePath();
        crc2.fillStyle = "#4faf36";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(270, 255);
        crc2.quadraticCurveTo(540, 210, 600, 255);
        crc2.closePath();
        crc2.fill();
        crc2.fillRect(0, 255, 600, 155);
    }
    //Funktion für die Tannen im Hintergund
    function drawFir(_x, _y) {
        //Baumstamm
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "#573418";
        crc2.fillRect(_x, _y, 10, 20);
        //Baumkrone aus drei Dreiecken
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 10);
        crc2.lineTo(_x - 10, _y + 10);
        crc2.lineTo(_x + 20, _y + 10);
        crc2.closePath();
        crc2.fillStyle = "#289a00";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 20);
        crc2.lineTo(_x - 8, _y);
        crc2.lineTo(_x + 18, _y);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 30);
        crc2.lineTo(_x - 6, _y - 10);
        crc2.lineTo(_x + 16, _y - 10);
        crc2.closePath();
        crc2.fill();
    }
    //Funktion für die Bäume im Vordergrund
    function drawTree(_x, _y) {
        //Baumstamm
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y - 60);
        crc2.lineTo(_x - 10, _y + 60);
        crc2.lineTo(_x + 20, _y + 60);
        crc2.closePath();
        crc2.fillStyle = "#936033";
        crc2.fill();
        //Baumkrone aus dre Kreisen
        crc2.beginPath();
        crc2.arc(_x + 25, _y - 32, 30, 0, Math.PI * 2, true);
        crc2.fillStyle = "#00ff00";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x - 15, _y - 32, 30, 0, Math.PI * 2, true);
        crc2.fillStyle = "#00ff00";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 5, _y - 60, 30, 0, Math.PI * 2, true);
        crc2.fillStyle = "#00ff00";
        crc2.fill();
        crc2.closePath();
    }
    //Funktion für die rot-gelben Blumen
    function drawFlower1(_x, _y, _scale) {
        //Blütenstiel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arcTo(_x, _y - 15, _x + 5, (_y - 40) * _scale, 80 * _scale);
        crc2.lineWidth = 3 * _scale;
        crc2.strokeStyle = "#57e60f";
        crc2.stroke();
        crc2.closePath();
        //Blütenblätter (Vier Kreise)
        crc2.beginPath();
        crc2.arc(_x + 19 * _scale, _y - 32 * _scale, 8 * _scale, 0, Math.PI * 2, true);
        crc2.fillStyle = "#ff0000";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x - 1 * _scale, _y - 32 * _scale, 8 * _scale, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 9 * _scale, _y - 22 * _scale, 8 * _scale, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 9 * _scale, _y - 42 * _scale, 8 * _scale, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        //Blütenmitte Kreis
        crc2.beginPath();
        crc2.arc(_x + 9 * _scale, _y - 32 * _scale, 8 * _scale, 0, Math.PI * 2, true);
        crc2.fillStyle = "#ffff00";
        crc2.fill();
        crc2.closePath();
    }
    //Funktion für die Tulpen
    function drawTulpe(_x, _y, _scale) {
        //Blütenstiel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arcTo(_x, _y - 20, _x + 5, (_y - 40) * _scale, 120 * _scale);
        crc2.lineWidth = 3 * _scale;
        crc2.strokeStyle = "#57e60f";
        crc2.stroke();
        crc2.closePath();
        //Blüte aus Halbkreis und gezeichneten Spitzen
        crc2.beginPath();
        crc2.arc(_x + 5 * _scale, _y - 44 * _scale, 12 * _scale, 0, Math.PI, false);
        crc2.fillStyle = "#9401be";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x - 7 * _scale, _y - 43 * _scale);
        crc2.lineTo(_x - 6 * _scale, _y - 60 * _scale);
        crc2.lineTo(_x + 1 * _scale, _y - 50 * _scale);
        crc2.lineTo(_x + 6 * _scale, _y - 60 * _scale);
        crc2.lineTo(_x + 9 * _scale, _y - 50 * _scale);
        crc2.lineTo(_x + 16 * _scale, _y - 60 * _scale);
        crc2.lineTo(_x + 17 * _scale, _y - 43 * _scale);
        crc2.closePath();
        crc2.fill();
    }
    //Funktion für die blauen Blumen
    function drawFlower2(_x, _y, _scale) {
        //Blütenstiel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arcTo(_x, _y - 10, _x + 5, (_y - 30) * _scale, 60 * _scale);
        crc2.lineWidth = 3 * _scale;
        crc2.strokeStyle = "#57e60f";
        crc2.stroke();
        crc2.closePath();
        //Blütenblätter (Fünf Kreise)
        crc2.beginPath();
        crc2.arc(_x + 7 * _scale, _y - 19 * _scale, 6 * _scale, 0, Math.PI * 2, true);
        crc2.fillStyle = "#0000ff";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x - 5 * _scale, _y - 19 * _scale, 6 * _scale, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 1 * _scale, _y - 17 * _scale, 7 * _scale, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 6 * _scale, _y - 26 * _scale, 6 * _scale, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x - 2 * _scale, _y - 27 * _scale, 6 * _scale, 0, Math.PI * 2, true);
        crc2.fill();
        crc2.closePath();
    }
})(Aufgabe5_Bienen || (Aufgabe5_Bienen = {}));
//# sourceMappingURL=Aufgabe_6a.js.map