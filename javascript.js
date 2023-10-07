const container = document.querySelector('.GridContainer');
let mode = '';
let size = 16;

let sizebutton = document.querySelector('#size');
let blackbutton = document.querySelector('#black');
let erasebutton = document.querySelector('#erase');
let clearbutton = document.querySelector('#clear');

blackbutton.addEventListener('click', () => setDrawingMode('black'));
erasebutton.addEventListener('click', () => setDrawingMode('erase'));
clearbutton.addEventListener('click', () => clearDivs());
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
    clearDivs();
    addGrid(newSize);
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

function clearDivs() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
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
  