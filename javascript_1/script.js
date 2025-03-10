document.getElementById('add-btn').addEventListener('click', function () {
    performCalculation('add');
});

document.getElementById('subtract-btn').addEventListener('click', function () {
    performCalculation('subtract');
});

document.getElementById('multiply-btn').addEventListener('click', function () {
    performCalculation('multiply');
});

document.getElementById('divide-btn').addEventListener('click', function () {
    performCalculation('divide');
});

function performCalculation(operation) {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers!');
        return;
    }

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                alert('Cannot divide by zero!');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Invalid operation!');
            return;
    }

    document.getElementById('result-message').innerText = `The result is: ${result}`;
}
