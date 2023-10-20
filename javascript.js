const container = document.querySelector('.GridContainer');
let mode = '';
let size = 16;

const sizebutton = document.querySelector('#size').addEventListener('click', () => setSize());
const clearbutton = document.querySelector('#clear').addEventListener('click', () => clearGrid());

const blackbutton = document.querySelector('#black').addEventListener('click', () => { mode = 'black';})
const erasebutton = document.querySelector('#erase').addEventListener('click', () => { mode = 'erase';})


addGrid(size); 

/*Calculate percent to set correct flex-value*/
function getGridPercent(gridsize){
    return 100 / gridsize;
}

function setSize() {
    let newSize = prompt('Type size of grid!');
    let parsedSize = parseFloat(newSize);

    while (isNaN(parsedSize) || parsedSize < 1 || parsedSize > 100) {
        newSize = prompt('Invalid size! Must be a number, and in the range of 1-100.');
        parsedSize = parseFloat(newSize); 
    }

    removeGrid();
    addGrid(parsedSize);
}


/**Set divs in grid to class gridDiv, set flex-basis depending on the size of the grid */
function setGridStyle(grid, gridsize) {
    let gridprcnt = getGridPercent(gridsize);
    grid.setAttribute('class', 'gridDiv');
    grid.setAttribute('style', `flex: 0 0 calc(${gridprcnt}% - 2px); border: 1px solid black;`);
}



/** Adds a grid of divs to container, size depending on input from user. 
 *  Adds eventlistener and sets the styling for all divs in the grid.
 * */
function addGrid(gridsize){
    for (let i = 0; i <(gridsize*gridsize); i++){
        let gridDiv = document.createElement('div');
        setGridStyle(gridDiv, gridsize);
        gridDiv.addEventListener('mouseover', () => drawOnGrid(gridDiv));
        container.appendChild(gridDiv);
    }
}

/**
 * Removes all divs currently making up the grid.
 */ 
function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

/**
 * Colors all divs white, and reset drawing mode.
 */
function clearGrid() {
    document.querySelectorAll('.gridDiv').forEach(gridDiv => {
        gridDiv.style.backgroundColor = 'white';
        mode = '';
    });
}

/**
 * Allows user to 'draw' on grid with either black or white (erasing), depending on the 
 * current mode set by the user.
 */
function drawOnGrid(gridDiv){
    switch(mode){
        case 'black': 
            gridDiv.style.backgroundColor = 'black';
            break;
        case 'erase': 
            gridDiv.style.backgroundColor = 'white';
            break;
    }
}
  