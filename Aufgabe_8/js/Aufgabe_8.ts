/* 
Aufgabe: 7
Name: Jakob Viets
Matrikel: 254780
Datum: 11.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe8_Bienen {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    export let bees: Bee[] = [];
    export let n: number = 10;

    let flowers: Flower[] = [];
    let Blumenzahl: number = 80;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //Malen des Hintergrundes
        let r: Background = new Background;

        //Erstellen der Zufallsblumen
        for (let i: number = 0; i < Blumenzahl; i++) {
            let s: Flower = new Flower;
        }

        //gemaltes Bild abspeichern
        imgData = crc2.getImageData(0, 0, 600, 400);

        //Erstellen der speziellen Blumen und speichern in einem Array
        for (let i: number = 0; i < 15; i++) {
            let f: Flower = new Flower;
            flowers[i] = f;
        }
        console.log(flowers);

        //Erstellen der Bienen und speichern in einem Array
        for (let i: number = 0; i < n; i++) {
            let b: Bee = new Bee;
            bees[i] = b;
        }

        window.setTimeout(animate, 20);
        canvas.addEventListener("click", neueBiene);
        canvas.addEventListener("touch", neueBiene);
    }

    //Funktion für die Animation der Bienen
    function animate(): void {
        //gespeichertes Hintergrundbild erneut aufrufen
        crc2.putImageData(imgData, 0, 0);

        for (let j: number = 0; j < flowers.length; j++) {
            let f: Flower = flowers[j];
            f.draw();
        }

        for (let i: number = 0; i < bees.length; i++) {
            let b: Bee = bees[i];
            b.update();
        }
        window.setTimeout(animate, 20);
    }

    //Funktion für das Erstellen einer neuen Biene
    function neueBiene(): void {
        let b: Bee = new Bee;
        bees.push(b);
    }
}