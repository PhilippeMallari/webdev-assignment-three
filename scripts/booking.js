/********* create variables *********/
// Useful variables: the cost per day, the number of days selected, and elements on the screen that will be clicked or need to be modified.
const dayButtons = document.querySelectorAll('.day-selector li');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCostElement = document.getElementById('calculated-cost');

let fullDayRate = 40;
let halfDayRate = fullDayRate / 2;
let currentRate = fullDayRate;
let selectedDays = new Map(); // Using Map to store day and its type (full/half)

/********* colour change days of week *********/
// When the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// Added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            selectedDays.set(button.id, currentRate === fullDayRate ? 'full' : 'half');
        } else {
            button.classList.remove('clicked');
            selectedDays.delete(button.id);
        }
        updateTotalCost();
    });
});

/********* clear days *********/
// When the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click', () => {
    dayButtons.forEach(button => button.classList.remove('clicked'));
    selectedDays.clear();
    updateTotalCost();
});

/********* change rate *********/
// When the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfButton.addEventListener('click', () => {
    currentRate = halfDayRate;
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    updateSelectedDaysRate();
    updateTotalCost();
});

// When the full-day button is clicked, the daily rate is set back to $40, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullButton.addEventListener('click', () => {
    currentRate = fullDayRate;
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    updateSelectedDaysRate();
    updateTotalCost();
});

/********* calculate *********/
// When a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function updateTotalCost() {
    let totalCost = 0;
    selectedDays.forEach((type, day) => {
        totalCost += type === 'full' ? fullDayRate : halfDayRate;
    });
    calculatedCostElement.textContent = totalCost;
}

// Update the rate of selected days when the rate button is clicked
function updateSelectedDaysRate() {
    selectedDays.forEach((type, day) => {
        selectedDays.set(day, currentRate === fullDayRate ? 'full' : 'half');
    });
}
