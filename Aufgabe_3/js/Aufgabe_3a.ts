document.addEventListener('DOMContentLoaded', function() {
//Initialisieren der Variablen
let x : number = 0;
let y : number = 0;
let n : number = 64;
let size : number = 170;
let row : number = 1;
let farbe : string;
let reis : number = 1;

//For-Schleife für den Durchlauf aller Schachfelder
for (let i : number = 0; i < n ; i++) {
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
    let div = document.getElementsByTagName("div");
    div[i].innerText = "" + reis;
    reis *= 2;
    
    //Wechsel in die nächste Reihe nach 8 Kästchen
    if(x==(7*size)) {
        row++
    }
}

    

function placeDiv(_farbe: string, _x: number, _y: number, _size: number, _koerner: number): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);

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



for(let j : number = 0; j<8; j++){
    let divFirstRow : NodeListOf<HTMLElement> = document.getElementsByTagName("div");    
    divFirstRow[j].addEventListener("click", function(){
        divFirstRow[j].classList.toggle("clicked");
        Summe();
        }); 
}
    
function Summe():void{
    let divClicked : NodeListOf<Element> = document.getElementsByClassName("clicked");
    let summe : number = 0;
    if(divClicked.length == 0)
        document.getElementById("Summe").innerText = "Keine Felder ausgewählt";
    else{
    for(let k : number = 0; k < divClicked.length; k++){
        summe += Number(divClicked[k].textContent);
        document.getElementById("Summe").innerText = "Summe der Reiskörner: " + "\r" + "Dezimal: " + summe + "\r" + "Hexadezimal: " + summe.toString(16);
    }}    
    console.log(summe);
}
    
document.addEventListener("mousemove", function(Event){
    document.getElementById("Summe").style.left = (Event.clientX+10) + "px";
    document.getElementById("Summe").style.top = (Event.clientY+10) + "px";    
});    
    

    
    
});