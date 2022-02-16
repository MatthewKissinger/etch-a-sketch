// TODO List
// 1) have each initial pass into a cell change the background color to a random RGB value
// 2) have each subsequent pass add another 10% to the black value
//   - after 10 passes the square should become blacked out

// Global Variables

let cellTotal = 16 * 16;
console.log(cellTotal);

// DOM Cache

const sketchContainer = document.getElementById('sketch-container');

const clearButton = document.getElementById('clearBtn');

// Event Listeners

clearButton.addEventListener('click', function() {
    console.log('you clicked me');
    clearCanvas();
    newGridCount();
});


// Methods

function canvasDivGenerator(cellTotal) {

    for (let i = 0; i < cellTotal; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('cell');
        
        sketchContainer.appendChild(newCell);
    }

    let cellList = document.querySelectorAll('.cell');
    addHoverEffect(cellList);
}

function addHoverEffect(nodelist) {
    nodelist.forEach(node => node.addEventListener('mouseenter', function() {
        node.style.backgroundColor = 'teal';
    }));
}

function clearCanvas() {
    let cellList = document.querySelectorAll('.cell');
    cellList.forEach(node => node.style.backgroundColor = '');
}

function newGridCount() {
    let gridRows = prompt('How many cells per row? pick between 16 and 100');

    if (gridRows === null) {
        console.log('ok fine then');
        alert('Clearing the canvas. Original row count of 16 cells being established.')
        return;
    } else {
        gridRows = parseInt(gridRows);
    }

    while (gridRows < 16 || gridRows > 100) {
        gridRows = parseInt(prompt(`C'mon now. Pick a number between 16 and 100`));
    }

    sketchContainer.style.gridTemplateColumns = `repeat(${gridRows}, ${(800/gridRows).toFixed(4)}px)`;
    sketchContainer.style.gridTemplateRows = `repeat(${gridRows}, ${(800/gridRows).toFixed(4)}px)`;

    cellTotal = gridRows * gridRows;
    canvasDivGenerator(cellTotal);

}

canvasDivGenerator(cellTotal);

