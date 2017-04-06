document.addEventListener('DOMContentLoaded', function() {
//Initialisieren der Variablen
var x : number = 0;
var y : number = 0;
var n : number = 64;
var size : number = 170;
var row : number = 1;
var farbe : string;
var reis : number = 1;

//For-Schleife für den Durchlauf aller Schachfelder
for (var i : number = 0; i < n ; i++) {
    //Abfragen ob Reihe ungerade ist mit Farbanpassung
    if (row%2!=0) {
        if(i%2==0) {
            farbe = "#000";
        }
        else {
            farbe = "#fff";
        }
    }
    //Abfragen ob Reihe Gerade ist mit Farbanpassung
    else {
        if(i%2==0) {
            farbe = "#fff";
        }
        else {
            farbe = "#000";
        }
    }
    x = (i%8)*size;
    y = (row-1)*size;

    //Platzieren eines neuen Divs
    placeDiv(farbe, x, y, size, i);

    //Anzahl der Reiskörner in das erstellte Div schreiben
    var div = document.getElementsByTagName("div");
    div[i].innerText = "" + reis;
    reis *= 2;
    
    //Wechsel in die nächste Reihe nach 8 Kästchen
    if(x==(7*size)) {
        row++
    }
}


function placeDiv(_farbe: string, _x: number, _y: number, _size: number, _koerner: number): void {
    let div: HTMLDivElement = document.createElement("div");
    document.getElementById("Hand").appendChild(div);

    let s: CSSStyleDeclaration = div.style;
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

});