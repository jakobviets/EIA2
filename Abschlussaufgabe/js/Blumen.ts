/* 
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {

    export class Flower {
        x: number;
        y: number;
        scale: number;
        Blumensorte: number;

        //Erstellen einer neuen Blume
        constructor() {
            this.setRandomPositionAndSize();
        }

        //Zufallsposition für die Blumen erstellen
        setRandomPositionAndSize(): void {
            this.x = (Math.random() * 200) + 200;
            this.y = (Math.random() * 55) + 560;
            if (this.y <= 560)
                this.scale = 0.4;
            else if (this.y <= 580)
                this.scale = 0.6;
            else if (this.y <= 600)
                this.scale = 1;
        }

        draw(): void {
        }
    }
}