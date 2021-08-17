// add event handler in withdraw button
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);
    // import previous deposit amount and add with new
    const previousDeposit = document.getElementById('deposit-amount');
    const previousDepositText = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const totalDepositAmount = previousDepositAmount + depositAmount;
    // set the total amount into the deposit 
    previousDeposit.innerText = totalDepositAmount;
    depositInput.value = '';
    // add the value of deposit with balance
    const balance = document.getElementById('balance');
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    const totalBalanceAmount = balanceAmount + depositAmount;
    balance.innerText = totalBalanceAmount;

    // console.log(depositAmount);
})