// Selection of elements from the index.html file
const generateBtn = document.getElementById("generateButton");
const resetBtn = document.getElementById("resetButton");
const spellArea = document.getElementById("spellArea");
const ingredientsItems = document.querySelectorAll("#ingredientsList li");

let timer; // Declared outside so both event listeners can access and clear it

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
//`Math.random()` is used to generate a random decimal number, multiplies it by 256 (0 (completely dark/off) to 255 (maximum brightness)), and uses `Math.floor()` to round it down to a whole number between 0 and 255. It repeats this process three times to get values for Red, Green, and Blue, then pieces them together into a standard CSS string: `rgb(R, G, B)`.

generateBtn.addEventListener("click", function () {
  // Disables the button during the countdown so the user can't spam click it
  generateBtn.disabled = true;

  let countdown = 3; // Starts the countdown at 3
  spellArea.innerText = countdown; // Starts the display at 3

  // Start a timer that runs every second
  timer = setInterval(function () {
    countdown--;

    if (countdown > 0) {
      // Update the text to 2, then 1
      spellArea.innerText = countdown;
    } else {
      // The countdown hit 0, reveals the spell.
      clearInterval(timer); // Stops the countdown timer

      // Pick a random ingredient from the list array
      const randomIndex = Math.floor(Math.random() * ingredientsItems.length);
      const randomIngredient = ingredientsItems[randomIndex].innerText;

      // Displays the ingredient and change background color
      spellArea.innerText = ` 🕯 CASTING: ${randomIngredient} 🕯`;
      spellArea.style.backgroundColor = getRandomColor();

      // Re-enable the button for the next spell
      generateBtn.disabled = false;
    }
  }, 1000);
});

resetBtn.addEventListener("click", function () {
  clearInterval(timer); // Stops the countdown if it's currently running
  spellArea.innerText = ""; // Clear text
  spellArea.style.backgroundColor = ""; // Reset background to default
  generateBtn.disabled = false; // Ensure generate button is usable
});
