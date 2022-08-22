// code for get input field value by id
function getInputFieldValueById(id){
    let inputField = document.getElementById(id);
    let inputFieldString = inputField.value;
    let inputFieldValue = parseFloat(inputFieldString);
    // inputField.value = '';
    return inputFieldValue;
}
// code for get element value by id
function getElementValueById(id){
    let element = document.getElementById(id);
    let elementString = element.innerText;
    let elementValue = parseFloat(elementString);
    return elementValue;
}
// code for set element value
function setElementValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// code for player card selections
let selectedPlayer = [];
let count = 0;

let playerBtn = document.querySelectorAll('.player-btn');
for (const btn of playerBtn) {
    btn.addEventListener('click', function(event){
        if(count < 5){
            count++;
            let player = btn.parentElement.children[0].innerText;
            let playerList = document.getElementById('player-list');
            let addPlayer = document.createElement('li');
            addPlayer.innerText = player;
            playerList.appendChild(addPlayer);
            btn.setAttribute('disabled', true);
            btn.style.background='#5f778d';
            selectedPlayer.push(player);
            
        }
        else{
            alert('You already selected five players!');
        }
        
    })
}


// code for calculate per player expense
document.getElementById('calculate-btn').addEventListener('click',function(){
    const perPlayerExpense = getInputFieldValueById('player-expense-field');
    if(isNaN(perPlayerExpense) || perPlayerExpense <= 0) {
        alert('Please enter a valid number');
        return;
    }
    const playerExpense = selectedPlayer.length * perPlayerExpense;
    setElementValue('player-expence-display',playerExpense);
})

// code for calculate total expense
document.getElementById('calculate-total').addEventListener('click', function(){
    const allPlayerExpense = getElementValueById('player-expence-display');
    const managerExpense = getInputFieldValueById('manager-field');
    if(isNaN(managerExpense) || managerExpense <= 0){
        alert('Enter a valid number in Manager input field');
        return;
    }
    const coachExpense = getInputFieldValueById('coach-field');
    if(isNaN(coachExpense) || coachExpense <= 0){
        alert('Enter a valid number in Coach Expense input field');
        return;
    }
    const calculateTotal = allPlayerExpense + managerExpense + coachExpense;
    setElementValue('total-expense', calculateTotal);
})