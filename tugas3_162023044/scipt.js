let selectedTarget = null;
let selectedBgColor = "#466fa3";
let selectedTextColor = "red";

const modal = document.getElementById("colorModal");
const colorPicker = document.getElementById("colorPicker");
const bgBox = document.getElementById("bgBox");
const textBox = document.getElementById("textBox");

bgBox.style.background = selectedBgColor;
textBox.style.background = selectedTextColor;

bgBox.onclick = function() {
    selectedTarget = "background";
    colorPicker.value = selectedBgColor;
    modal.style.display = "block";
};

textBox.onclick = function() {
    selectedTarget = "text";
    colorPicker.value = selectedTextColor;
    modal.style.display = "block";
};

function pilihWarna() {
    if (selectedTarget === "background") {
        selectedBgColor = colorPicker.value;
        bgBox.style.background = selectedBgColor;
    } else if (selectedTarget === "text") {
        selectedTextColor = colorPicker.value;
        textBox.style.background = selectedTextColor;
    }
    modal.style.display = "none";
}

function closeModal() {
    modal.style.display = "none";
}

function simpanWarna() {
    document.body.style.backgroundColor = selectedBgColor;

    document.getElementById("judul").style.color = selectedTextColor;
    document.querySelector("legend").style.color = selectedTextColor;
    document.querySelector("ol").style.color = selectedTextColor;
}