// *************** Set Grid Size ***************

const gridContainer = document.querySelector("#grid-container");

let gridHeight = 600;
let gridWidth = 600;
gridContainer.style.height = `${gridHeight}px`;
gridContainer.style.width = `${gridWidth}px`;

// *************** Add Grid Items ***************

let gridResolution = 16;

document.addEventListener('DOMContentLoaded', populateGrid);

function populateGrid() {

  // Clear Grid Before Populating
  gridContainer.innerHTML = "";

  for (let i = 0; i < (gridResolution ** 2); i++) {
    const gridItem = document.createElement("div");
  
    gridItem.className = "grid-item";
    gridItem.style.height = `${gridHeight / gridResolution}px`;
    gridItem.style.width = `${gridWidth / gridResolution}px`;

    gridItem.addEventListener("mouseenter", () => changeColour(gridItem));
  
    gridContainer.appendChild(gridItem);
  };
};

function changeColour(gridItem) {
  gridItem.style.backgroundColor = "black";
}

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

