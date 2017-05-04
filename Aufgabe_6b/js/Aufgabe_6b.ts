/* 
Aufgabe: 6b
Name: Jakob Viets
Matrikel: 254780
Datum: 02.05.17
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace StudiVZ {
    interface StudentData {
        // hier ist noch die richtige Datenstruktur festzulegen
        Matrikelnummer: number;
        Name: string;
        Vorname: string;
        Alter: number;
        Geschlecht: boolean;
        Kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=w oder 1=m) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let InputArray: string[] = _input.split(",");
        if (InputArray.length < 5)
        { return "Eingabe nicht vollständig"; }
        if (isNaN(parseInt(InputArray[0])))
        { return "Die eingegebene Matrikelnummer ist keine Nummer."; }
        if (isNaN(parseInt(InputArray[3])))
        { return "Bitte geben Sie das Alter als Zahl ein."; }
        if (parseInt(InputArray[4]) != 0 && parseInt(InputArray[4]) != 1)
        { return "Geschlecht bitte als 0 für w oder 1 für m eingeben."; }
        let s: StudentData = {
            Matrikelnummer: parseInt(InputArray[0]),
            Name: InputArray[1],
            Vorname: InputArray[2],
            Alter: parseInt(InputArray[3]),
            Geschlecht: parseInt(InputArray[4]) == 1,
            Kommentar: InputArray[5]
        }
        students.push(s)
        let geschlecht: string = s.Geschlecht ? "m" : "w";
        console.log(students)
        return "Folgende Daten wurden gespeichert: \nMatrikelnummer: " + s.Matrikelnummer + "\nName: " + s.Name + "\nVorname: " + s.Vorname + "\nAlter: " + s.Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + s.Kommentar;
    }
    function queryData(_matrikel: number): string {
        for (let i: number = 0; i < students.length; i++) {
            if (students[i].Matrikelnummer == _matrikel) {
                let geschlecht: string = students[i].Geschlecht ? "m" : "w";
                return "Folgende Daten sind unter der eingegebenen Matrikelnummer gespeichert: \nMatrikelnummer: " + students[i].Matrikelnummer + "\nName: " + students[i].Name + "\nVorname: " + students[i].Vorname + "\nAlter: " + students[i].Alter + "\nGeschlecht: " + geschlecht + "\nKommentar: " + students[i].Kommentar;
            }
        }
        return "Die eingegebene Matrikelnummer ist nicht vorhanden.";
    }
}