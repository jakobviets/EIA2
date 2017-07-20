/* 
Abschlussaufgabe
Name: Jakob Viets
Matrikel: 254780
Datum: 19.07.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;

    export let bees: Bee[] = [];
    export let n: number = 1;
    
    let z: number = 0;
    export let pipes: Pipe[] = [];

    export let flowers: Flower[] = [];
    let Blumenzahl: number = 10;

    export let up: boolean = false;
    export let down: boolean = false;

    let newPipe: boolean = false;
    let time: number = 0;
    export let scoreNumber: number = 0;
    let score: HTMLElement;
    
    let upButton: HTMLElement;
    let downButton: HTMLElement;
    let start: HTMLElement;
    let reload: HTMLElement;
    let info: HTMLElement;
    let infoMobile: HTMLElement;
    
    
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        score = document.getElementById("score");
        score.innerText = "Score: 0";
        
        downButton = document.getElementById("down");
        upButton = document.getElementById("up");
        start = document.getElementById("start");
        reload = document.getElementById("reload");
        info = document.getElementById("info");
        infoMobile = document.getElementById("infoMobile");
        
        //Malen des Hintergrundes
        let r: Background = new Background;

        //Erstellen der Zufallsblumen
        for (let i: number = 0; i < Blumenzahl; i++) {
            let s: Flower = new Flower1;
            let f: Flower = new Flower2;
            let g: Flower = new Flower3;
        }
        
        //gemaltes Bild abspeichern
        imgData = crc2.getImageData(0, 0, 405, 720);

        //Erstellen der Bienen und speichern in einem Array
        for (let i: number = 0; i < n; i++) {
            let c: Bee = new Bee;
            bees.push(c);
        }
        //Erstellen der Pipes und speichern in Array
        for (let i: number = 0; i < n; i++) {
            let p: Pipe = new Pipe;
            pipes.push(p);
        }        
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

    function startClicked(): void {
        start.style.display = "none";
        info.style.display = "none";
        infoMobile.style.display = "none";
        window.setTimeout(animate, 20);
    }
    
    function reloadClicked(): void {
        location.reload();
    }
    
    function tastatureingabe(_event: KeyboardEvent): void {
        if (_event.keyCode == 38)//up
        {
            up = true;
        }
        if (_event.keyCode == 40)//down
        {
            down = true;
        }
    }

    function downClicked(): void {
        down = true;
    }
    
    function upClicked(): void {
        up = true;
    }    
    
    //Funktion für die Animation der Bienen
    function animate(): void {
        if (bees[0].alive == true) {
            //gespeichertes Hintergrundbild erneut aufrufen
            crc2.putImageData(imgData, 0, 0);

            for (let j: number = 0; j < pipes.length; j++) {
                let p: Pipe = pipes[j];
                p.update();
            }
            
            if(scoreNumber % 4 == 0 && z != scoreNumber){
                let r: Pipe = new Pipe;
                z = scoreNumber;
                pipes.push(r);           
            }
            
            if(pipes[0].x < -25){
                pipes.splice(0, 1);
            }
            
            if(time >= 1){
                scoreNumber += 1;
                score.innerText = "Score: " + scoreNumber;
                time = 0;
            }
            else{
                time += 0.02;
            }
            
            for (let i: number = 0; i < bees.length; i++) {
                let b: Bee = bees[i];
                b.update();
                if(b.alive == false){
                    gameOver();
                }
            }                    
            window.setTimeout(animate, 20);
        }
    }
    
    function gameOver(): void {
        crc2.fillStyle = "#000000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.font = "25px Arial";
        crc2.fillStyle = "#FFFFFF";
        crc2.fillText("game over", 43, 180); 
        reload.style.display = "block";
    }
    
}