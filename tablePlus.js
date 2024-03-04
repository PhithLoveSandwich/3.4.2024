function tablePlus() {
    number = parseInt(document.getElementById("tp").value);
    outputDiv = document.getElementById("output");
    i = 1;
    table = "";

    outputDiv.innerHTML = "";

    while (i <= 12) {
        table += number + "x" + i + " = " + number * i + "<br>";
        i++;
    }

    outputDiv.innerHTML = table;
}
