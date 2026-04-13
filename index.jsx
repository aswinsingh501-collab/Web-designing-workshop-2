function generatePattern() {
    let n = document.getElementById("numInput").value;
    let output = "";

    if (n <= 0 || n === "") {
        document.getElementById("output").innerText = "Please enter a valid number!";
        return;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            output += j + " ";
        }
        output += "\n";
    }

    document.getElementById("output").innerText = output;
}