/*
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let imgData;
    Abschlussaufgabe.bees = [];
    Abschlussaufgabe.n = 1;
    let z = 0;
    Abschlussaufgabe.pipes = [];
    Abschlussaufgabe.flowers = [];
    let Blumenzahl = 10;
    Abschlussaufgabe.up = false;
    Abschlussaufgabe.down = false;
    let newPipe = false;
    let time = 0;
    Abschlussaufgabe.scoreNumber = 0;
    let score;
    //Erfassen der HTMLElemente zum bearbeiten in TypeScript
    let upButton;
    let downButton;
    let start;
    let reload;
    let info;
    let infoMobile;
    //Funktion zum Grundaufbau des Programms
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        score = document.getElementById("score");
        score.innerText = "Score: 0";
        downButton = document.getElementById("down");
        upButton = document.getElementById("up");
        start = document.getElementById("start");
        reload = document.getElementById("reload");
        info = document.getElementById("info");
        infoMobile = document.getElementById("infoMobile");
        //Malen des Hintergrundes
        let r = new Abschlussaufgabe.Background;
        //Erstellen der Zufallsblumen
        for (let i = 0; i < Blumenzahl; i++) {
            let s = new Abschlussaufgabe.Flower1;
            let f = new Abschlussaufgabe.Flower2;
            let g = new Abschlussaufgabe.Flower3;
        }
        //gemaltes Bild abspeichern
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, 405, 720);
        //Erstellen der Bienen und speichern in einem Array
        for (let i = 0; i < Abschlussaufgabe.n; i++) {
            let c = new Abschlussaufgabe.Bee;
            Abschlussaufgabe.bees.push(c);
        }
        //Erstellen der Pipes und speichern in Array
        for (let i = 0; i < Abschlussaufgabe.n; i++) {
            let p = new Abschlussaufgabe.Pipe;
            Abschlussaufgabe.pipes.push(p);
        }
        //EventListener für Tastatureingaben, Touch und Klick
        document.addEventListener("keydown", tastatureingabe, false);
        downButton.addEventListener("click", downClicked);
        upButton.addEventListener("click", upClicked);
        start.addEventListener("click", startClicked);
        reload.addEventListener("click", reloadClicked);
        downButton.addEventListener("touch", downClicked);
        upButton.addEventListener("touch", upClicked);
        start.addEventListener("touch", startClicked);
        reload.addEventListener("touch", reloadClicked);
    }
    //Starten des Spiels nach Klick auf Start-Button
    function startClicked() {
        start.style.display = "none";
        info.style.display = "none";
        infoMobile.style.display = "none";
        window.setTimeout(animate, 20);
    }
    //Seite neu laden nach Klicken auf Reload-Button nach Game Over
    function reloadClicked() {
        location.reload();
    }
    //Tastatureingabe speichern
    function tastatureingabe(_event) {
        if (_event.keyCode == 38) {
            Abschlussaufgabe.up = true;
        }
        if (_event.keyCode == 40) {
            Abschlussaufgabe.down = true;
        }
    }
    //Button-Steuerung speichern
    function downClicked() {
        Abschlussaufgabe.down = true;
    }
    function upClicked() {
        Abschlussaufgabe.up = true;
    }
    //Funktion für die Animation des Spiels
    function animate() {
        if (Abschlussaufgabe.bees[0].alive == true) {
            //gespeichertes Hintergrundbild erneut aufrufen
            Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
            //Alle Pipes aktualisieren
            for (let j = 0; j < Abschlussaufgabe.pipes.length; j++) {
                let p = Abschlussaufgabe.pipes[j];
                p.update();
            }
            if (Abschlussaufgabe.scoreNumber % 4 == 0 && z != Abschlussaufgabe.scoreNumber) {
                let r = new Abschlussaufgabe.Pipe;
                z = Abschlussaufgabe.scoreNumber;
                Abschlussaufgabe.pipes.push(r);
            }
            //Pipes außerhalb des Canvas löschen um Arbeitsleistung zu sparen
            if (Abschlussaufgabe.pipes[0].x < -25) {
                Abschlussaufgabe.pipes.splice(0, 1);
            }
            //Score nach jeder Sekunde um 1 hochsetzen
            if (time >= 1) {
                Abschlussaufgabe.scoreNumber += 1;
                score.innerText = "Score: " + Abschlussaufgabe.scoreNumber;
                time = 0;
            }
            else {
                time += 0.02;
            }
            //Biene updaten, wenn Biene mit Rohr kollidiert ist -> Aufruf gameOver-Funktion
            for (let i = 0; i < Abschlussaufgabe.bees.length; i++) {
                let b = Abschlussaufgabe.bees[i];
                b.update();
                if (b.alive == false) {
                    gameOver();
                }
            }
            window.setTimeout(animate, 20);
        }
    }
    //Canvas mit gameover-Meldung überschreiben und Reload-Button einblenden
    function gameOver() {
        Abschlussaufgabe.crc2.fillStyle = "#000000";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.crc2.canvas.width, Abschlussaufgabe.crc2.canvas.height);
        Abschlussaufgabe.crc2.font = "25px Arial";
        Abschlussaufgabe.crc2.fillStyle = "#FFFFFF";
        Abschlussaufgabe.crc2.fillText("game over", 43, 180);
        reload.style.display = "block";
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Main.js.map