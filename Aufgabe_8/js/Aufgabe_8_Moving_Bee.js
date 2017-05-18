/*
Aufgabe: 7
Name: Jakob Viets
Matrikel: 254780
Datum: 11.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class MovingBee extends Aufgabe8_Bienen.Bee {
        //Erstellen einer neuen Biene
        //        constructor() {
        //            //Position für neue Biene
        //            this.x = 75;
        //            this.y = 345;
        //            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; //            this.draw();
        //        }
        //Position der Biene ändern
        move() {
            switch (this.status) {
                case "moveToFlower":
                    if (this.x == this.xTarget && this.y == this.yTarget) {
                        this.status = "idle";
                    }
                    else {
                    }
                case "moveToBeehive":
                    if (this.x == 63) { }
                case "idle":
            }
            if (this.direction == true) {
                this.x += Math.random() * 4 - 1;
                this.y += Math.random() * 4 - 2.1;
            }
            else {
                this.x += Math.random() * 4 - 3;
                this.y += Math.random() * 4 - 1.8;
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
    Aufgabe8_Bienen.MovingBee = MovingBee;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=Aufgabe_8_Moving_Bee.js.map