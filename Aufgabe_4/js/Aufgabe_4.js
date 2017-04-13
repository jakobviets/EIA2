/*
Aufgabe: 3b
Name: Jakob Viets
Matrikel: 254780
Datum: 13.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe4_Blumenwiese;
(function (Aufgabe4_Blumenwiese) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#a3d7ff";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        drawMountain(300, 10);
        drawMountain(500, 50);
        drawMountain(100, 35);
        drawHill(0, 215);
    }
    function drawMountain(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "#8a8a8a";
        crc2.lineTo(_x - 250, _y + 200);
        crc2.lineTo(_x + 250, _y + 200);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        //draw a triangle around the coordinates (_x, _y);
    }
    function drawHill(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(100, 150, 300, 215);
        crc2.moveTo(300, 215);
        crc2.quadraticCurveTo(500, 270, 600, 215);
        crc2.stroke();
    }
})(Aufgabe4_Blumenwiese || (Aufgabe4_Blumenwiese = {}));
//# sourceMappingURL=Aufgabe_4.js.map