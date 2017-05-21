/* 
Aufgabe: 8
Name: Jakob Viets
Matrikel: 254780
Datum: 20.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Code zusammen mit Kai Halfinger erstellt
*/
namespace Aufgabe8_Bienen {

    export class honeyBee extends Bee {
        xTarget: number;
        yTarget: number;
        status: string;
        pausecounter: number;

        //Erstellen einer neuen Biene
        constructor() {
            super();
            this.setRandomTarget();
            this.status = "fly";
            this.pausecounter = 0;
            super.draw();
        }


        setRandomTarget(): void {
            let i: number = Math.floor(Math.random() * (flowers.length - 1));
            this.xTarget = flowers[i].x+2;
            this.yTarget = flowers[i].y-40*flowers[i].scale;
        }

        update(): void {
            this.move();
            super.draw();
        }

        move(): void {
            if (this.status == "fly") {
                this.x += Math.floor(Math.random() * 8) - 2;
                this.y += (this.yTarget - this.y) * 0.05;
                // Wieder Erscheinen beim Verlassen des Canvas
                if (this.x >= 595)
                    this.x = -5;
                if (this.y <= 3)
                    this.y = 397;
                if (this.x < -5)
                    this.x = 595;
                if (this.y > 397)
                    this.y = 3;
            if ((this.xTarget - this.x < 5 && this.xTarget - this.x > -5) && (this.yTarget - this.y < 5 && this.yTarget - this.y > -5)) {
                this.status = "pause";
            }
                }
            else {
        this.pausecounter += 1;
        if (this.pausecounter % 50 == 0) {
            this.setRandomTarget();
            this.status = "fly";
        }
    }

}
    }
}