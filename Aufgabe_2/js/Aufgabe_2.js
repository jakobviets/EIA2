document.addEventListener('DOMContentLoaded', function () {
    var x = 0;
    var y = 0;
    var n = 64;
    var size = 170;
    var row = 1;
    var farbe;
    var reis = 1;
    for (var i = 0; i < n; i++) {
        if (row % 2 != 0) {
            if (i % 2 == 0) {
                farbe = "#000";
            }
            else {
                farbe = "#fff";
            }
        }
        else {
            if (i % 2 == 0) {
                farbe = "#fff";
            }
            else {
                farbe = "#000";
            }
        }
        x = (i % 8) * size;
        y = (row - 1) * size;
        placeDiv(farbe, x, y, size, i);
        var div = document.getElementsByTagName("div");
        div[i].innerText = "" + reis;
        reis *= 2;
        if (x == (7 * size)) {
            row++;
        }
    }
    function placeDiv(_farbe, _x, _y, _size, _koerner) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
        s.position = "absolute";
        s.display = "inline-block";
        s.textAlign = "center";
        s.fontSize = "1em";
        s.lineHeight = "170px";
        s.backgroundColor = _farbe;
        s.width = _size + "px";
        s.height = _size + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
});
//# sourceMappingURL=Aufgabe_2.js.map