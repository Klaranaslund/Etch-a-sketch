const container = document.querySelector('.GridContainer');
let mode = '';
let size = 16;

let sizebutton = document.querySelector('#size');
let blackbutton = document.querySelector('#black');
let erasebutton = document.querySelector('#erase');
let clearbutton = document.querySelector('#clear');

blackbutton.addEventListener('click', () => setDrawingMode('black'));
erasebutton.addEventListener('click', () => setDrawingMode('erase'));
clearbutton.addEventListener('click', () => clearGrid());
sizebutton.addEventListener('click', () => setSize());

addGrid(size); 

function setDrawingMode(newMode){
    mode = newMode;
}

/*Calculate percent to set correct flex-value*/
function getGridPercent(gridsize){
    return 100 / gridsize;
}

function setSize(){
    let newSize = prompt('Type size of grid!');
    removeGrid();
    addGrid(newSize)
}

/**Set divs in grid to class gridDiv, set flex-basis(?) depending on the size of the grid */
function setGridStyle(grid, gridsize) {
    let gridprcnt = getGridPercent(gridsize);
    grid.setAttribute('class', 'gridDiv');
    grid.setAttribute('style', `flex: 0 0 calc(${gridprcnt}%)`);
}


/** Should add a grid of divs, 16x16. */
function addGrid(gridsize){
    for (let i = 0; i <(gridsize*gridsize); i++){
        let gridDiv = document.createElement('div');
        setGridStyle(gridDiv, gridsize);
        gridDiv.addEventListener('mouseover', () => drawOnGrid(gridDiv));
        container.appendChild(gridDiv);
    }
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function clearGrid() {
    document.querySelectorAll('.gridDiv').forEach(gridDiv => {
        gridDiv.style.backgroundColor = 'white';
    });
}

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
  