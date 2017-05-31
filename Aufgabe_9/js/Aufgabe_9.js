var saveInput;
(function (saveInput) {
    window.addEventListener("load", init);
    let sorts = ["Erdbeer", "Himbeer", "Melone", "Mango", "Pfirsich", "Schokolade", "Haselnuss", "Walnuss", "Nougat"];
    let Produktauswahl;
    let toppings = ["Sahne", "Streusel", "Schokosoße", "Erdbeersoße"];
    let inputsEis = [];
    let inputsTopping = [];
    let darbietung = ["Waffel", "Becher"];
    let inputsDarbietung = [];
    let Warenkorb;
    function init() {
        Produktauswahl = document.getElementById("Auswahl");
        Warenkorb = document.getElementById("Warenkorb");
        createInputs();
        createCheckboxes();
        createRadios();
        Produktauswahl.addEventListener("change", change);
        console.log(inputsEis);
        console.log(inputsTopping);
        console.log(inputsDarbietung);
    }
    function createInputs() {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i = 0; i < sorts.length; i++) {
            console.log(sorts[i]);
            createInput(sorts[i]);
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
        Produktauswahl.appendChild(label);
        inputsEis.push(input);
    }
    function createCheckboxes() {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createCheckbox(toppings[i]);
        }
    }
    function createCheckbox(_topping) {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = _topping;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "checkbox";
        Produktauswahl.appendChild(label);
        inputsTopping.push(input);
    }
    function createRadios() {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i = 0; i < darbietung.length; i++) {
            console.log(darbietung[i]);
            createRadio(darbietung[i]);
        }
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
        Produktauswahl.appendChild(label);
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
        console.log(sum);
        changeWarenkorb(sum);
    }
    function changeWarenkorb(_sum) {
        for (let i = 0; i < inputsEis.length; i++) {
            if (parseInt(inputsEis[i].value) > 0) { }
        }
        for (let i = 0; i < inputsTopping.length; i++) {
            if (inputsTopping[i].checked) { }
        }
        for (let i = 0; i < inputsDarbietung.length; i++) {
            if (inputsDarbietung[i].checked) { }
        }
        let summeHtml = document.getElementById("Summe");
        let Ausgabe = document.createElement("p");
        Ausgabe.innerText = _sum.toString();
        summeHtml.appendChild(Ausgabe);
    }
})(saveInput || (saveInput = {}));
//# sourceMappingURL=Aufgabe_9.js.map