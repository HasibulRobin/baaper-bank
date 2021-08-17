// add event handler in withdraw button
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositAmount = parseFloat(depositText);
    console.log(depositAmount);
})