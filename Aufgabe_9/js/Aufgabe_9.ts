namespace saveInput {
    window.addEventListener("load", init);

    let sorts: string[] = ["Erdbeer", "Himbeer", "Melone", "Mango", "Pfirsich", "Schokolade", "Haselnuss", "Walnuss", "Nougat"];
    let Eissorten: HTMLElement;
    let Toppings: HTMLElement;
    let Darbietungsform: HTMLElement;
    let toppings: string[] = ["Sahne", "Streusel", "Schokosoße", "Erdbeersoße"];
    let inputsEis: HTMLInputElement[] = [];
    let inputsTopping: HTMLInputElement[] = [];
    let darbietung: string[] = ["Waffel", "Becher"];
    let inputsDarbietung: HTMLInputElement[] = [];
    let Warenkorb: HTMLElement;
    let Kundendaten: HTMLElement = <HTMLButtonElement> document.getElementById("checkData");


    function init(): void {
        Eissorten = document.getElementById("Eissorten");
        Toppings = document.getElementById("Toppings");
        Darbietungsform = document.getElementById("Darbietungsform");
        Warenkorb = document.getElementById("Warenkorb");
        
        createProduktauswahl();
        console.log(inputsTopping);
        
        Eissorten.addEventListener("change", change);
        Toppings.addEventListener("change", change);
        Darbietungsform.addEventListener("change", change);
        
        checkData();
        
        Kundendaten.addEventListener("click", checkData);
    }

    
    function checkData(): void {
        let Korrektur: string[] = ["Bitte überprüfen Sie folgende Eingaben \n"];
        let Vorname: HTMLInputElement = <HTMLInputElement> document.getElementById("Vorname");
        if(Vorname.validity.valid == false)
        {Korrektur.push("Vorname \n");}
        let Nachname: HTMLInputElement = <HTMLInputElement> document.getElementById("Nachname");
        if(Vorname.validity.valid == false)
        {Korrektur.push("Nachname \n");}
        let Strasse: HTMLInputElement = <HTMLInputElement> document.getElementById("Strasse");
        if(Vorname.validity.valid == false)
        {Korrektur.push("Straße \n");}
        let PLZ: HTMLInputElement = <HTMLInputElement> document.getElementById("PLZ");
        if(Vorname.validity.valid == false)
        {Korrektur.push("Postleitzahl \n");} 
        let Ort: HTMLInputElement = <HTMLInputElement> document.getElementById("Ort");
        if(Vorname.validity.valid == false)
        {Korrektur.push("Ort \n");}
        let Mail: HTMLInputElement = <HTMLInputElement> document.getElementById("Mail");
        if(Vorname.validity.valid == false)
        {Korrektur.push("Email-Adresse \n");}
        let Telefon: HTMLInputElement = <HTMLInputElement> document.getElementById("Telefon");
        if(Vorname.validity.valid == false)
        {Korrektur.push("Telefonnummer \n");}
        
        if(Korrektur.length > 1)
        for(let i: number = 0; i < Korrektur.length; i++)
        {Korrektur.push}
        alert(Korrektur);
    }
    
    
    function createProduktauswahl(): void {
        // Erstelle pro Sorte Kuchen einen Input
        for (let i: number = 0; i < sorts.length; i++) {
            createInput(sorts[i]);
        }
        for (let i: number = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
        for (let i: number = 0; i < darbietung.length; i++) {
            createRadio(darbietung[i]);
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
        label.id = _sort;

        Eissorten.appendChild(label);
        inputsEis.push(input);
    }

    function createCheckbox(_topping: string): void {
        // Ein Label ist ein Text den man anklicken kann um damit den Input auszulösen
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _topping;
        label.appendChild(input);
        // Die Art des Inputs wird über den Typ definiert
        input.type = "checkbox";
        label.id= _topping;
        
        Toppings.appendChild(label);
        inputsTopping.push(input);
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
        label.id = _darbietung;

        Darbietungsform.appendChild(label);
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
        
        changeWarenkorb(sum);

    }
    
    function changeWarenkorb(_sum: number): void {
        
        let Warenliste: HTMLElement = document.getElementById("Warenliste");
        Warenliste.innerText = "";
        
        for (let i: number = 0; i < inputsEis.length; i++) {
            if(parseInt(inputsEis[i].value) > 0)
            {
                Warenliste.innerText += sorts[i] + " " + (parseInt(inputsEis[i].value)*1) + "€" + "\n";
            }
        }
        for (let i: number = 0; i < inputsTopping.length; i++) {
            if(inputsTopping[i].checked)
            {
                Warenliste.innerText += toppings[i] + " 2€" + "\n";
            }
        }
        for (let i: number = 0; i < inputsDarbietung.length; i++) {
            if(inputsDarbietung[i].checked)
            {
                Warenliste.innerText += darbietung[i] + " 1,5€" + "\n";
            }
        }    
        
        
        let summeHtml: HTMLElement = document.getElementById("Summe");
        summeHtml.innerText = _sum.toString() + " €";
        
        
    }
    
    
}