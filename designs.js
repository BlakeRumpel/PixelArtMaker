const color = document.getElementById("colorPicker");
const submit = document.querySelector("input[type=\"submit\"]");
const table = document.getElementById("pixelCanvas");

function makeGrid(e) {
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;

    resetGrid();

    for (let h = 0; h < height; h++) {
        let row = table.insertRow();
        
        for (let w = 0; w < width; w++) {
            row.insertCell();
        }
    }

    e.preventDefault();
}

function colorSquare(e) {
    if (e.target.tagName === "TD") {
        e.target.style.backgroundColor = color.value;
    }
}

function resetGrid() {
    table.innerHTML = "";
}

submit.addEventListener("click", makeGrid);

table.addEventListener("click", colorSquare);
