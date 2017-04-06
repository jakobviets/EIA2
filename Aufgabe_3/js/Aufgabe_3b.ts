/* 
Aufgabe: 3b
Name: Jakob Viets
Matrikel: 254780
Datum: 06.04.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

document.addEventListener('DOMContentLoaded', function() {

    let Nachziehstapel : string[] = ["Herz 7", "Herz 8", "Herz 9", "Herz 10", "Herz Bube", "Herz Dame", "Herz König", "Herz Ass", "Karo 7", "Karo 8", "Karo 9", "Karo 10", "Karo Bube", "Karo Dame", "Karo König", "Karo Ass", "Kreuz 7", "Kreuz 8", "Kreuz 9", "Kreuz 10", "Kreuz Bube", "Kreuz Dame", "Kreuz König", "Kreuz Ass", "Pik 7", "Pik 8", "Pik 9", "Pik 10", "Pik Bube", "Pik Dame", "Pik König", "Pik Ass",];
    let Hand : string[] = [];
    let Ablagestapel : string[] = [];
    let n : number = Nachziehstapel.length;
    
    console.log(Nachziehstapel);
    
    document.getElementById("Nachziehstapel").textContent = "Nachziehstapel " + "\r\n" + "Karten: " + Nachziehstapel.length;
    document.getElementById("Ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten: " + Ablagestapel.length;
    
    document.getElementById("Nachziehstapel").addEventListener("click", function(){
        if(Nachziehstapel.length > 0 && Hand.length < 5){
            n--;
            var i : number = Math.floor((Math.random() * n) + 0);
        
        let Ziehen : string = Nachziehstapel[i];
        Nachziehstapel.splice(i, 1);
        Hand.push(Ziehen);
        document.getElementById("Nachziehstapel").textContent = "Nachziehstapel " + "\r\n" + "Karten: " + Nachziehstapel.length;
         
        let div: HTMLDivElement = document.createElement("div");
        document.getElementById("Hand").appendChild(div);
        div.textContent = Ziehen;
        
        let s: CSSStyleDeclaration = div.style;
        s.cssFloat = "left"
        s.border = "solid 4px black";
        s.display = "inline";
        s.textAlign = "center";
        s.fontSize = "2em";
        s.backgroundColor = "#aaa";
        s.width = "4em";
        s.height = "6em";
        s.marginLeft = "1em";

 
                    
        div.addEventListener("click", function(){
        let Ablegen : string = Hand[this];
        Hand.splice(this, 1);
        Ablagestapel.push(Ablegen);
        this.parentNode.removeChild(this);  
        document.getElementById("Ablagestapel").textContent = "Ablagestapel" + "\r\n" + "Karten: " + Ablagestapel.length;
        });
        }         
              
    });
    

    

    
});