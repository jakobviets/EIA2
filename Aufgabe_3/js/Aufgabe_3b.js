/*
Aufgabe: 3b
Name: Jakob Viets
Matrikel: 254780
Datum: 06.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
document.addEventListener('DOMContentLoaded', function () {
    let Nachziehstapel = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass", "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass",];
    let Hand = [];
    let Ablagestapel = [];
    let n = Nachziehstapel.length;
    console.log(Nachziehstapel);
    document.getElementById("Nachziehstapel").textContent = "Nachziehstapel " + "\r\n" + "Karten: " + Nachziehstapel.length;
    document.getElementById("Ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten: " + Ablagestapel.length;
    //Funktion für das Ziehen einer Karte vom Stapel
    document.getElementById("Nachziehstapel").addEventListener("click", function () {
        //Abfrage ob noch Karten auf dem Nachziehstapel sind und ob auf der Hand noch Platz ist
        if (Nachziehstapel.length > 0 && Hand.length < 5) {
            //Anpassen der Berechnungsvariablen für die Zufallsauswahl der Karten
            n--;
            //Berechnen der Karte im Array mit Zufallszahl
            var i = Math.floor((Math.random() * n) + 0);
            //Karte vom Nachziehstapel-Array in das Hand-Array verschieben
            let Ziehen = Nachziehstapel[i];
            Nachziehstapel.splice(i, 1);
            Hand.push(Ziehen);
            document.getElementById("Nachziehstapel").textContent = "Nachziehstapel " + "\r\n" + "Karten: " + Nachziehstapel.length;
            //Div für die gezogene Handkarte erstellen
            let div = document.createElement("div");
            document.getElementById("Hand").appendChild(div);
            div.textContent = Ziehen;
            //Styleanpassung für die Handkarten
            let s = div.style;
            s.cssFloat = "left";
            s.border = "solid 4px black";
            s.display = "inline";
            s.textAlign = "center";
            s.fontSize = "2em";
            s.backgroundColor = "#aaa";
            s.width = "4em";
            s.height = "6em";
            s.marginLeft = "1em";
            //Funktion für das Ablegen einer Karte von der Hand auf den Ablagestapel
            div.addEventListener("click", function () {
                //Schleife zum Prüfen des Inhalts der Handkarten
                for (let i = 0; i < Hand.length; i++) {
                    if (this.textContent == Hand[i]) {
                        //Karte zum Ablagestapel-Array hinzufügen
                        Ablagestapel.push(Hand[i]);
                        //Karte aus dem Hand-Array entfernen
                        Hand.splice(i, 1);
                        break;
                    }
                }
                document.getElementById("Ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten: " + Ablagestapel.length;
                //div der abgelegten Handkarte entfernen
                this.parentNode.removeChild(this);
            });
            console.log(Nachziehstapel);
            console.log(Hand);
            console.log(Ablagestapel);
        }
    });
});
//# sourceMappingURL=Aufgabe_3b.js.map