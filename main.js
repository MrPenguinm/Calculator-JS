const display = document.getElementById("display");

function clearDisplay() {
    display.value = "";
}


function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}


function appendValue(value) {
    display.value += value;
}


function calculateResult() {
   
    const displayValue = display.value.trim();

    if (displayValue === "") {
        display.value = "";
        return;

    }

    try {
        display.value = eval(display.value); 
    } catch (error) {
        if(display.value == undefined) {
            display.value = 'wtf'
        }
        display.value = "❌"; 
    }
};


function playSound(sound) {
    const clicksound = new Audio(sound);
    clicksound.currentTime = 0;
    clicksound.play();
}