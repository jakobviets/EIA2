/* 
Aufgabe: 7
Name: Jakob Viets
Matrikel: 254780
Datum: 11.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Aufgabe8_Bienen {

    export class honeyBee extends Bee {
        xTarget: number;
        yTarget: number;
        status: string;

        //Erstellen einer neuen Biene
        constructor() {
            super();
            this.setRandomFlowerTarget();
            this.status = "moveToFlower";
            this.draw();
                }
        
        
        setRandomFlowerTarget(): void{
            let i: number = Math.random() * (flowers.length - 1);
            this.xTarget = flowers[i].x;
            this.yTarget = flowers[i].y;
        }
        
        setBeehiveTarget(): void{
            this.xTarget = 78;
            this.yTarget = 345;
        }
        
        moveTo(): void{
            if(this.x == this.xTarget)
            {this.y += 1;}
            if(this.x < this.xTarget)
            {
                this.x += 1;
            }
            if(this.x > this.xTarget)
            {
                this.x -= 1;
            }          
        }
        
        //Position der Biene ändern
        move(): void {
            switch (this.status) {
                case "moveToFlower":
                    if ((this.x == this.xTarget) && (this.y == this.yTarget)) {
                        this.status = "idleFlower";
                        this.setBeehiveTarget();
                    }
                    else {
                        this.moveTo();
                    }
                case "moveToBeehive":
                    if (this.x == 63 && this.y == 345) {
                        this.status = "idleHive"
                    }
                case "idleFlower":
                
                case "idleHive":
                

            }

            //if-Abfragen um die Bienen beim erreichen eines Bildrandes auf der anderen Seite wieder erscheinen zu lassen
            if (this.x >= 595)
                this.x = -5;
            if (this.y <= 3)
                this.y = 397;
            if (this.x < -5)
                this.x = 595;
            if (this.y > 397)
                this.y = 3;
        }
    }
}