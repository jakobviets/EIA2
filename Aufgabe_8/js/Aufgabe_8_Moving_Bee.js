/*
Aufgabe: 7
Name: Jakob Viets
Matrikel: 254780
Datum: 11.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class honeyBee extends Aufgabe8_Bienen.Bee {
        //Erstellen einer neuen Biene
        constructor() {
            super();
            this.setRandomFlowerTarget();
            this.status = "moveToFlower";
            this.draw();
        }
        setRandomFlowerTarget() {
            let i = Math.random() * (Aufgabe8_Bienen.flowers.length - 1);
            this.xTarget = Aufgabe8_Bienen.flowers[i].x;
            this.yTarget = Aufgabe8_Bienen.flowers[i].y;
        }
        setBeehiveTarget() {
            this.xTarget = 78;
            this.yTarget = 345;
        }
        moveTo() {
            if (this.x == this.xTarget) {
                this.y += 1;
            }
            if (this.x < this.xTarget) {
                this.x += 1;
            }
            if (this.x > this.xTarget) {
                this.x -= 1;
            }
        }
        //Position der Biene ändern
        move() {
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
                        this.status = "idleHive";
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
    Aufgabe8_Bienen.honeyBee = honeyBee;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=Aufgabe_8_Moving_Bee.js.map