// TODO List


// DOM Cache

const sketchContainer = document.getElementById('sketch-container');



// Methods

function canvasDivGenerator() {

    for (let i = 0; i < 256; i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('cell');
        newCell.innerText = `${i}`;
        
        sketchContainer.appendChild(newCell);
    }

    let cellList = document.querySelectorAll('.cell');
    addHoverEffect(cellList);
}

function addHoverEffect(nodelist) {
    nodelist.forEach(node => node.addEventListener('mouseenter', function() {
        node.style.backgroundColor = 'black';
    }));
}


canvasDivGenerator();

