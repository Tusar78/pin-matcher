
const getPin = () => {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

const keyPad = document.getElementById('key-pad');
keyPad.addEventListener('click', event => {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-number');
    const previousInput = calcInput.value;
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    } else {
        calcInput.value = previousInput + number;
    }
})

const generatePin = () => {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
}

const matchPin = () => {
    const generatePin = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('type-number').value;
    const isMatch = generatePin == typedPin;
    return isMatch;
}

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', event => {
    const matchResult = matchPin();
    const successMsg = document.getElementById('success-msg');
    const errorMsg = document.getElementById('error-msg');
    if (matchResult) {
        successMsg.style.display = 'block';
        errorMsg.style.display = 'none';
    } else {
        successMsg.style.display = 'none';
        errorMsg.style.display = 'block';
    }
})