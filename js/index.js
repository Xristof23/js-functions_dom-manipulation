const box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box when the button is clicked.
*/

redButton.addEventListener("click", () => {
  function removeAllColors() {
    box.classList.remove("red");
    box.classList.remove("green");
    box.classList.remove("blue");
    box.classList.remove("gray");
  }
  function addColorRed() {
    box.classList.add("red");
  }
  removeAllColors();
  addColorRed();
});

blueButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "blue"
  function removeAllColors() {
    box.classList.remove("red");
    box.classList.remove("green");
    box.classList.remove("blue");
    box.classList.remove("gray");
  }
  function addColorBlue() {
    box.classList.add("blue");
  }
  removeAllColors();
  addColorBlue();
});

greenButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "green"
  function removeAllColors() {
    box.classList.remove("red");
    box.classList.remove("green");
    box.classList.remove("blue");
    box.classList.remove("gray");
  }
  function addColorGreen() {
    box.classList.add("green");
  }
  removeAllColors();
  addColorGreen();
});

grayButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "gray"
  function removeAllColors() {
    box.classList.remove("red");
    box.classList.remove("green");
    box.classList.remove("blue");
    box.classList.remove("gray");
  }
  function addColorGray() {
    box.classList.add("gray");
  }
  removeAllColors();
  addColorGray();
});

// Write your two functions below:
function removeAllColors() {
  box.classList.remove("red");
  box.classList.remove("green");
  box.classList.remove("blue");
  box.classList.remove("gray");
}
function addColorGray() {
  box.classList.add("gray");
}
