
const childDiv = document.querySelectorAll('.child');
const parent = document.querySelector('.parent');
let player1 = 'X'
let player2 = 'O'
let currentPlayer = player1;
childDiv.forEach(child => {
    child.addEventListener('click', () => {
        if(!child.textContent){
            child.textContent = currentPlayer;
            if(winner()){
                alert(`Congratulations! Player${currentPlayer === player1 ? '1' : '2'} wins`)
                reset();
            } else if (draw()) {
                alert("Draw!");
                reset();
        } else{
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
        }  
}) 
})

function winner(){
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for(let array of arr){
        const [a, b, c] = array;

        if(childDiv[a].textContent && childDiv[a].textContent === childDiv[b].textContent &&
        childDiv[a].textContent === childDiv[c].textContent){
            return true;
        }
    }
    return false;
}

function draw(){
    return [...childDiv].every(child => child.textContent !== '');
}

function reset(){
    childDiv.forEach(child => {
        child.textContent = '';
    });
    currentPlayer = player1;
}


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorimg = document.querySelector("[data-cursor-img]");


window.addEventListener("mousemove" , function(e) {
    const posX = e.pageX;
    const posY = e.pageY;


    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorimg.style.left = `${posX}px`;
    cursorimg.style.top = `${posY}px`;
})