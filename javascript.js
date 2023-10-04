/**Create a 16x16 grid of square divs using JavaScript, to be 
 * kept inside a container div which goes directly into html-file.
 */

const container = document.querySelector('.GridContainer');

/*Calculate percent to set correct flex-value*/
function getGridPercent(gridsize){
    return 100 / gridsize;
}


/**Set divs in grid to class gridDiv, set flex-basis(?) depending on the size of the grid */
function setGridStyle(grid, gridsize) {
    let gridprcnt = getGridPercent(gridsize);
    grid.setAttribute('class', 'gridDiv');
    grid.setAttribute('style', `border: 2px solid black;  flex: 0 0 calc(${gridprcnt}% - 4px)`);
    grid.textContent = 'hej';
}


/** Should add a grid of divs, 16x16. */
function addGrid(gridsize){
    for (let i = 0; i <(gridsize*gridsize); i++){
        let gridDiv = document.createElement('div');
        setGridStyle(gridDiv, gridsize);
        container.appendChild(gridDiv);
    }
}

addGrid(2);



/**Set up hover effect so that the grid disv change color when your mouse 
 * passes over them, leaving a trail trough the grid. 
 * 
 * Hovering is what happens when mous enters a div and ends when it leaves, 
 * can be set up with event listeners for either of those events as starting points.
 * 
 * change color by: adding a new class to the div or changing the
 * divs background color using javascript.
 */


/** Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 
 * Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) 
 * so that you’ve got a new sketch pad. 
 * 
 * Tip: Set the limit for the user input to a maximum of 100.
 * A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
 * 
 * 
 * 
 * Research button tags in HTML and how you can make a JavaScript function run when one is clicked. Also check out prompts.
 * You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used
 */