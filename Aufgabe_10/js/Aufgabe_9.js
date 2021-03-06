var saveInput;
(function (saveInput) {
    window.addEventListener("load", init);
    let sorts = ["Erdbeer", "Himbeer", "Melone", "Mango", "Pfirsich", "Schokolade", "Haselnuss", "Walnuss", "Nougat"];
    let Eissorten;
    let Toppings;
    let Darbietungsform;
    let toppings = ["Sahne", "Streusel", "Schokosoße", "Erdbeersoße"];
    let inputsEis = [];
    let inputsTopping = [];
    let darbietung = ["Waffel", "Becher"];
    let inputsDarbietung = [];
    let Warenkorb;
    let Bestellung;
    function init() {
        Eissorten = document.getElementById("Eissorten");
        Toppings = document.getElementById("Toppings");
        Darbietungsform = document.getElementById("Darbietungsform");
        Warenkorb = document.getElementById("Warenkorb");
        Bestellung = document.getElementById("sendOrder");
        createProduktauswahl();
        Eissorten.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Darbietungsform.addEventListener("change", change);
        Bestellung.addEventListener("click", sendOrder);
    }
    function sendOrder() {
        let Korrektur = ["Bitte überprüfen/ergänzen Sie folgende Eingaben \n"];
        let Vorname = document.getElementById("Vorname");
        let Nachname = document.getElementById("Nachname");
        let Strasse = document.getElementById("Strasse");
        let PLZ = document.getElementById("PLZ");
        let Ort = document.getElementById("Ort");
        let Mail = document.getElementById("Mail");
        let Telefon = document.getElementById("Telefon");
        let Anrede = document.getElementById("Anrede");
        let Lieferart = document.getElementById("Lieferart");
        if (Anrede.value != "Herr" && Anrede.value != "Frau")
            Korrektur.push("Anrede \n");
        if (Vorname.validity.valid == false)
            Korrektur.push("Vorname \n");
        if (Nachname.validity.valid == false)
            Korrektur.push("Nachname \n");
        if (Strasse.validity.valid == false)
            Korrektur.push("Straße \n");
        if (PLZ.validity.valid == false)
            Korrektur.push("Postleitzahl \n");
        if (Ort.validity.valid == false)
            Korrektur.push("Ort \n");
        if (Mail.validity.valid == false)
            Korrektur.push("Email-Adresse \n");
        if (Telefon.validity.valid == false)
            Korrektur.push("Telefonnummer \n");
        if (Lieferart.value != "Lieferung" && Lieferart.value != "Selbstabholung")
            Korrektur.push("Lieferart \n");
        let Eiskugeln = 0;
        let Darbietung = 0;
        for (let i = 0; i < inputsEis.length; i++) {
            if (parseInt(inputsEis[i].value) > 0)
                Eiskugeln += 1;
        }
        if (Eiskugeln == 0)
            Korrektur.push("Eissorten\n");
        for (let i = 0; i < inputsDarbietung.length; i++) {
            if (inputsDarbietung[i].checked)
                Darbietung += 1;
        }
        if (Darbietung == 0)
            Korrektur.push("Behältnis");
        if (Korrektur.length > 1) {
            for (let i = 0; i < Korrektur.length; i++)
                Korrektur.push;
            alert(Korrektur.join(""));
        }
        else {
            alert("Vielen Dank für Ihre Bestellung!");
        }
    }
    function createProduktauswahl() {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i = 0; i < sorts.length; i++) {
            createInput(sorts[i]);
        }
        for (let i = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i = 0; i < darbietung.length; i++) {
            createRadio(darbietung[i]);
        }
    }
    function createInput(_sort) {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _sort;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "number";
        input.min = "0";
        input.value = "0";
        input.name = _sort;
        label.id = _sort;
        Eissorten.appendChild(label);
        inputsEis.push(input);
    }
    function createCheckbox(_topping) {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _topping;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "checkbox";
        label.id = _topping;
        Toppings.appendChild(label);
        inputsTopping.push(input);
    }
    function createRadio(_darbietung) {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _darbietung;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "radio";
        input.name = "darbietung";
        input.required = true;
        label.id = _darbietung;
        Darbietungsform.appendChild(label);
        inputsDarbietung.push(input);
    }
    // Wenn sich etwas ändert, summiere die Werte aller inputs auf und gebe
    // das Ergebnis auf der Konsole aus
    function change() {
        let sum = 0;
        for (let i = 0; i < inputsEis.length; i++) {
            sum += parseInt(inputsEis[i].value);
        }
        for (let i = 0; i < inputsTopping.length; i++) {
            if (inputsTopping[i].checked) {
                sum += 2;
            }
        }
        for (let i = 0; i < inputsDarbietung.length; i++) {
            if (inputsDarbietung[i].checked) {
                sum += 1.5;
            }
        }
        changeWarenkorb(sum);
    }
    function changeWarenkorb(_sum) {
        let Warenliste = document.getElementById("Warenliste");
        Warenliste.innerText = "";
        for (let i = 0; i < inputsEis.length; i++) {
            if (parseInt(inputsEis[i].value) > 0) {
                Warenliste.innerText += sorts[i] + " " + (parseInt(inputsEis[i].value) * 1) + "€" + "\n";
            }
        }
        for (let i = 0; i < inputsTopping.length; i++) {
            if (inputsTopping[i].checked) {
                Warenliste.innerText += toppings[i] + " 2€" + "\n";
            }
        }
        for (let i = 0; i < inputsDarbietung.length; i++) {
            if (inputsDarbietung[i].checked) {
                Warenliste.innerText += darbietung[i] + " 1,5€" + "\n";
            }
        }
        let summeHtml = document.getElementById("Summe");
        summeHtml.innerText = _sum.toString() + " €";
    }
})(saveInput || (saveInput = {}));
//# sourceMappingURL=Aufgabe_9.js.map