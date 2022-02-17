// TODO List


// Global Variables

let cellTotal = 16 * 16;

// DOM Cache

const sketchContainer = document.getElementById('sketch-container');

const clearButton = document.getElementById('clearBtn');

// Event Listeners

clearButton.addEventListener('click', function() {
    clearCanvas();
    newGridCount();
});

// Methods

function canvasDivGenerator(cellTotal) {

    sketchContainer.innerHTML = '';

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

        if (node.getAttribute('data-filled') === 'true') {
            
            // place all of the 'data-r' etc. values into variables
            let valueR = node.getAttribute('data-r');
            let valueG = node.getAttribute('data-g');
            let valueB = node.getAttribute('data-b');

            // regex that grabs the current rgb values of the cell
            let rgb = node.style.backgroundColor;

            rgb = rgb.replace(/[^\d,]/g, '').split(',');

            node.style.backgroundColor = `rgb(${Math.round(rgb[0] - (valueR * .10))}, ${Math.round(rgb[1] -(valueG *.10))}, ${Math.round(rgb[2] - (valueB *.10))})`;
            return;
        }

        node.style.backgroundColor = `rgb(${randomRGBValue()}, ${randomRGBValue()}, ${randomRGBValue()})`;

        // regex that separates the initial rgb value into separate values
        let rgb = node.style.backgroundColor;

        rgb = rgb.replace(/[^\d,]/g, '').split(',');

        // setting initial data attributes to be manipulated
        // goal is to decrease each value by 10% each time the mouse hovers over an already filled cell
        node.setAttribute('data-filled', 'true');
        node.setAttribute('data-r', `${rgb[0]}`);
        node.setAttribute('data-g', `${rgb[1]}`);
        node.setAttribute('data-b', `${rgb[2]}`);

    }));
}

function clearCanvas() {
    let cellList = document.querySelectorAll('.cell');
    cellList.forEach(node => {
        node.style.backgroundColor = '';
        node.removeAttribute('data-filled');
    });
}

function newGridCount() {
    let gridRows = prompt('How many cells per row? pick between 16 and 100');

    if (gridRows === null || gridRows === '') {
        console.log('ok fine then');
        alert('Clearing the canvas.')
        return;
    } else {
        console.log(gridRows);
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

function randomRGBValue() {
    return Math.floor(Math.random() * 255);
}

function decreaseBy10Percent(value) {
    return Math.round(value - (value * .10));
}


// Initialize the canvas

canvasDivGenerator(cellTotal);

// console.log test zone


