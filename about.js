


document.getElementById("count").addEventListener("click", function() {
    let counter = document.getElementById("counterValue");
    let currentValue = parseInt(counter.innerText);
    counter.innerText = currentValue + 1;
});

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("counterValue").innerText = "0";
});

 