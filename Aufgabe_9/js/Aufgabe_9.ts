namespace saveInput {
    window.addEventListener("load", init);

    let sorts: string[] = ["Erdbeer", "Himbeer", "Melone", "Mango", "Pfirsich", "Schokolade", "Haselnuss", "Walnuss", "Nougat"];
    let Produktauswahl: HTMLElement;
    let toppings: string[] = ["Sahne", "Streusel", "Schokosoße", "Erdbeersoße"];
    let inputsEis: HTMLInputElement[] = [];
    let inputsTopping: HTMLInputElement[] = [];
    let darbietung: string[] = ["Waffel", "Becher"];
    let inputsDarbietung: HTMLInputElement[] = [];
    let Warenkorb: HTMLElement;


    function init(): void {
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

    function createInputs(): void {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i: number = 0; i < sorts.length; i++) {
            console.log(sorts[i]);
            createInput(sorts[i]);
        }
    }
    
    function createInput(_sort: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _sort;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "number";
        input.min = "0";
        input.value = "0";

        Produktauswahl.appendChild(label);
        inputsEis.push(input);
    }

    
    function createCheckboxes(): void {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i: number = 0; i < toppings.length; i++) {
            console.log(toppings[i]);
            createCheckbox(toppings[i]);
        }
    }

    function createCheckbox(_topping: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _topping;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "checkbox";

        Produktauswahl.appendChild(label);
        inputsTopping.push(input);
    }
    
    function createRadios(): void {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i: number = 0; i < darbietung.length; i++) {
            console.log(darbietung[i]);
            createRadio(darbietung[i]);
        }
    }

    function createRadio(_darbietung: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

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
    function change(): void {
        let sum: number = 0;
        for (let i: number = 0; i < inputsEis.length; i++) {
            sum += parseInt(inputsEis[i].value);
        }
        for (let i: number = 0; i < inputsTopping.length; i++) {
            if(inputsTopping[i].checked)
            {sum += 2;}
        }
        for (let i: number = 0; i < inputsDarbietung.length; i++) {
            if(inputsDarbietung[i].checked)
            {sum += 1.5;}
        }        
        console.log(sum);
        
        changeWarenkorb(sum);

    }
    
    function changeWarenkorb(_sum: number): void {
        
        for (let i: number = 0; i < inputsEis.length; i++) {
            if(parseInt(inputsEis[i].value) > 0)
            {}
        }
        for (let i: number = 0; i < inputsTopping.length; i++) {
            if(inputsTopping[i].checked)
            {}
        }
        for (let i: number = 0; i < inputsDarbietung.length; i++) {
            if(inputsDarbietung[i].checked)
            {}
        }    
        
        
        let summeHtml: HTMLElement = document.getElementById("Summe");
        let Ausgabe: HTMLElement = document.createElement("p");
        Ausgabe.innerText = _sum.toString();
        summeHtml.appendChild(Ausgabe);
        
        
    }
    
    
}











