// *************** Set Grid Size ***************

const gridContainer = document.querySelector("#grid-container");

let gridHeight = 700;
let gridWidth = 700;
gridContainer.style.height = `${gridHeight}px`;
gridContainer.style.width = `${gridWidth}px`;

// *************** Add Grid Items ***************

let gridResolution = 60;

document.addEventListener('DOMContentLoaded', populateGrid);

function populateGrid() {
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



