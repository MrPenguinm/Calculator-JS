// Get The Display Element
const display = document.getElementById("display");
let resultDisplay = false;
// Function to clear the display => AC
function clearDisplay() {
  display.value = "";
  resultDisplay = false;
}
// Function to delete the last character => Del
function deleteLast() {
  if (display.value.length > 0) {
    display.value = display.value.slice(0, -1);
  }
}

// Function to append the value to the display
function appendValue(value) {
  if (display.value === "❌") {
    display.value = "";
  }
  if (resultDisplay && !isNaN(value)) {
    display.value = "";
  }
  display.value += value;
  resultDisplay = false;
}

// Function to calculate the result
function calculateResult() {
  const displayValue = display.value.trim();

  if (displayValue === "") {
    display.value = "";
    return;
  }

  try {
    if (!/^[0-9+\-*/().\s]+$/.test(displayValue)) {
      throw new Error("Wrong Input!");
    }

    const result = Function(`"use strict"; return (${displayValue})`)();

    if (!isFinite(result) || isNaN(result)) {
      throw new Error("Invalid Input!");
    }

    display.value = result;
    resultDisplay = true;
  } catch (error) {
    display.value = "❌";
  }
}
//  Add Effects Sound
function playSound(sound) {
  const clicksound = new Audio(sound);
  clicksound.currentTime = 0;
  clicksound.play();
}
