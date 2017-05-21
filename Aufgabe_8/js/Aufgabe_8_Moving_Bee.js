/*
Aufgabe: 8
Name: Jakob Viets
Matrikel: 254780
Datum: 20.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
Code zusammen mit Kai Halfinger erstellt
*/
var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class honeyBee extends Aufgabe8_Bienen.Bee {
        //Erstellen einer neuen Biene
        constructor() {
            super();
            this.setRandomTarget();
            this.status = "fly";
            this.pausecounter = 0;
            super.draw();
        }
        setRandomTarget() {
            let i = Math.floor(Math.random() * (Aufgabe8_Bienen.flowers.length - 1));
            this.xTarget = Aufgabe8_Bienen.flowers[i].x - 2;
            this.yTarget = Aufgabe8_Bienen.flowers[i].y - 20;
        }
        update() {
            this.move();
            super.draw();
        }
        move() {
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
                if ((this.xTarget - this.x < 12 && this.xTarget - this.x > -12) && (this.yTarget - this.y < 12 && this.yTarget - this.y > -12)) {
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
    Aufgabe8_Bienen.honeyBee = honeyBee;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=Aufgabe_8_Moving_Bee.js.map