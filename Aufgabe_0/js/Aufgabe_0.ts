document.addEventListener('DomContentLoaded', function(){
    var name: string = prompt("Bitte geben Sie hier Ihren Namen ein.");
    var gruss: string = "Herzlich Willkommen ";
    document.body.innerHTML = gruss + name;
});