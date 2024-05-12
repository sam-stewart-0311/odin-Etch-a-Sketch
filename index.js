// *************** Set Grid Size ***************

const gridContainer = document.querySelector("#grid-container");

let gridHeight = 600;
let gridWidth = 600;
gridContainer.style.height = `${gridHeight}px`;
gridContainer.style.width = `${gridWidth}px`;

// *************** Add Grid Items ***************

let gridResolution = 16;
let gridItemsArr = gridContainer.childNodes;

document.addEventListener('DOMContentLoaded', populateGrid);

function populateGrid() {

  gridContainer.innerHTML = "";

  for (let i = 0; i < (gridResolution ** 2); i++) {
    const gridItem = document.createElement("div");
  
    gridItem.className = "grid-item";
    gridItem.style.height = `${gridHeight / gridResolution}px`;
    gridItem.style.width = `${gridWidth / gridResolution}px`;

    gridItem.addEventListener("mouseover", changeColour, true);
  
    gridContainer.appendChild(gridItem);
  };

  gridItemsArr = gridContainer.childNodes;
};

function changeColour(event) {
  event.target.style.backgroundColor = `${colour}`;
};

// *************** Update Grid ***************

const gridResInput = document.querySelector("#grid-range");
const gridXReadout = document.querySelector("#grid-x");
const gridYReadout = document.querySelector("#grid-y");
const updateGridBtn = document.querySelector("#update-grid-btn");

gridResInput.addEventListener("input", () => {
  let inputValue = gridResInput.value;
  let inputValueString = inputValue.toString();

  gridXReadout.textContent = inputValueString;
  gridYReadout.textContent = inputValueString;
  gridResolution = inputValue;
});

updateGridBtn.addEventListener("click", populateGrid);

// *************** Update Colour ***************

const colourInput = document.querySelector("#colour-input");
let colour = "#000000";

colourInput.addEventListener("input", () => {
  colour = colourInput.value;
});

// *************** Randomise Colour ***************

const randomColourInput = document.querySelector("#random-colour");

let randomColourInputActive = false;

randomColourInput.addEventListener("change", () => {
  if(randomColourInputActive === false) {
    randomColourInputActive = true;
    
    gridItemsArr.forEach((gridItem) => {
      gridItem.addEventListener("mouseover", randomiseColour, true);
    });

  } else if (randomColourInputActive === true) {
    randomColourInputActive = false;
    
    gridItemsArr.forEach((gridItem) => {
      gridItem.removeEventListener("mouseover", randomiseColour, true);
    });

  }
  
});

function randomiseColour() {
  const hexCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

  let hexArr = [];
  let hexString = "";
  let randomNumber = 0;

  for (let i = 0; i < 6; i++) {
    randomNumber = Math.floor(Math.random() * 16);
    
    hexArr.push(hexCharacters[randomNumber]);
  }

  hexString = `#${hexArr.toString().replaceAll(",", "")}`;
  
  colour = hexString;
  colourInput.value = hexString;

  hexArr = [];
  
};
// *************** Shift Key Functionality ***************

document.addEventListener("keydown", (e) => {
  if (e.key === "Shift") {
    gridItemsArr.forEach((gridItem) => {
      gridItem.removeEventListener("mouseover", changeColour, true);
    });
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "Shift") {
    gridItemsArr.forEach((gridItem) => {
      gridItem.addEventListener("mouseover", changeColour, true);
    });
  }
});
