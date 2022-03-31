function doubleIt(num) {
    const result = num * 2;
    return result;

};
const fiveDouble = doubleIt(5);
const severDouble = doubleIt(7);
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear the input field
    inputField.value = '';
    return amountValue;
};
function updateTotalField(totalFieldId, amount) {
    //debugger
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;

};

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
};

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', withdrawAmount);
    updateBalance(depositAmount, true);
});



document.getElementById('withdraw-button').addEventListener('click', function () {



    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);
});