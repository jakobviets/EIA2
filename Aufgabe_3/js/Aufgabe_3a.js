/*
Aufgabe: 3a
Name: Jakob Viets
Matrikel: 254780
Datum: 06.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Code mit Hilfe von Kai Halfinger erstellt.
*/
document.addEventListener('DOMContentLoaded', function () {
    //Initialisieren der Variablen
    let x = 0;
    let y = 0;
    let n = 64;
    let size = 170;
    let row = 1;
    let farbe;
    let reis = 1;
    //For-Schleife für den Durchlauf aller Schachfelder
    for (let i = 0; i < n; i++) {
        //Abfragen ob Reihe ungerade ist mit Farbanpassung
        if (row % 2 != 0) {
            if (i % 2 == 0) {
                farbe = "#000";
            }
            else {
                farbe = "#fff";
            }
        }
        else {
            if (i % 2 == 0) {
                farbe = "#fff";
            }
            else {
                farbe = "#000";
            }
        }
        x = (i % 8) * size;
        y = (row - 1) * size;
        //Platzieren eines neuen Divs
        placeDiv(farbe, x, y, size, i);
        //Anzahl der Reiskörner in das erstellte Div schreiben
        let div = document.getElementsByTagName("div");
        div[i].innerText = "" + reis;
        reis *= 2;
        //Wechsel in die nächste Reihe nach 8 Kästchen
        if (x == (7 * size)) {
            row++;
        }
    }
    function placeDiv(_farbe, _x, _y, _size, _koerner) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.position = "absolute";
        s.display = "inline-block";
        s.textAlign = "center";
        s.fontSize = "1em";
        s.lineHeight = "170px";
        s.backgroundColor = _farbe;
        s.width = _size + "px";
        s.height = _size + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
    //Click-Event für die ersten 8 Divs hinzufügen
    for (let j = 0; j < 8; j++) {
        let divFirstRow = document.getElementsByTagName("div");
        divFirstRow[j].addEventListener("click", function () {
            //Wenn klickbares Feld geklickt wird, dann Klasse "clicked" hinzufügen -> css Hintergrundfarbe rot
            divFirstRow[j].classList.toggle("clicked");
            Summe();
        });
    }
    //Berechnen der Summe der geklickten Felder
    function Summe() {
        //Liste der Elemente mit der Klasse "clicked" erstellen
        let divClicked = document.getElementsByClassName("clicked");
        let summe = 0;
        //Abfrage ob Felder geklickt sind
        if (divClicked.length == 0)
            document.getElementById("Summe").innerText = "Keine Felder ausgewählt";
        else {
            //Berechnen der Summe mit dem textContent der geklickten Felder
            for (let k = 0; k < divClicked.length; k++) {
                summe += Number(divClicked[k].textContent);
                document.getElementById("Summe").innerText = "Summe der Reiskörner: " + "\r" + "Dezimal: " + summe + "\r" + "Hexadezimal: " + summe.toString(16);
            }
        }
        console.log(summe);
    }
    //Anzeigefeld der Summe an den Mauszeiger koppeln
    document.addEventListener("mousemove", function (Event) {
        document.getElementById("Summe").style.left = (Event.clientX + 10) + "px";
        document.getElementById("Summe").style.top = (Event.clientY + 10) + "px";
    });
});
//# sourceMappingURL=Aufgabe_3a.js.map