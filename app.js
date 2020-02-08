const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const random = document.querySelector('.random');
const colSize = document.querySelector('.colSize');
let verify = false;


// Create the grid

function createGrid(gridSize){
for(let i = 0; i < gridSize; i++){
   row = document.createElement('div');
   row.classList.add('grid-row');
   container.appendChild(row);

   for (let j = 0; j < gridSize; j++) {
    column = document.createElement('div');
    column.classList.add('grid-column');
    column.style.backgroundColor = '#fff';
    row.appendChild(column);
    }
  }

}

// Add functionality to grid

function colorGrid(e){
    if(e.target.classList == 'grid-column'){
      if(verify){
        e.target.style.backgroundColor = '#' + randomColor();
      } else {
        e.target.style.backgroundColor = 'red';
      }
    }
}

// Reset the grid

function resetGrid(){
  let cols = document.querySelectorAll('.grid-column');
  cols.forEach((col) => {
    col.style.backgroundColor = 'white';
    verify = false;
  })
}

// Random grid color value

  function randomColor(){
    verify = true;
    let rand = Math.floor(Math.random()*16777215).toString(16);
    return rand;
  }


 // Change grid size

  function changeInput(){
    let val = prompt('How many columns? Max 64');
    if(val > 64){
      alert('Number can\'t be larger than 64!');
      createGrid(16);
    }
    while(container.firstChild && val != 0){
    container.removeChild(container.firstChild); }
    createGrid(val);
    verify = false;
  }

// Events

window.addEventListener('load', createGrid(16));
container.addEventListener('mouseover', colorGrid);
reset.addEventListener('click', resetGrid);
colSize.addEventListener('click', changeInput);
random.addEventListener('click', randomColor);


