let count = 0;
const countDisplay = document.getElementById('count');
const errorMsg = document.getElementById('errorMsg');
const incBtn = document.getElementById('incrementBtn');
const decBtn = document.getElementById('decrementBtn');
const clearBtn = document.getElementById('clearBtn');
function updateDisplay(){
countDisplay.textContent = count;
clearBtn.style.display = count === 0 ? 'none' : 'inline-block';
}
incBtn.addEventListener('click', ()=>{
count++;
errorMsg.style.display = 'none';
updateDisplay();
});

decBtn.addEventListener('click', ()=>{
if(count > 0){
count--;
errorMsg.style.display = 'none';
} else {
// already 0
errorMsg.style.display = 'block';
}
updateDisplay();
});


clearBtn.addEventListener('click', ()=>{
count = 0;
errorMsg.style.display = 'none';
updateDisplay();
});


// init
updateDisplay();