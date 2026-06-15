const slider = document.getElementById("slider");
const showValue = document.getElementById("showValue");

function updateSliderValue() {
    showValue.textContent = slider.value;

    let value =
        (slider.value - slider.min) /
        (slider.max - slider.min) * 100;

    showValue.style.left = value + "%";
}

updateSliderValue();

slider.addEventListener("input", updateSliderValue);