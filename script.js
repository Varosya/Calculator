const screen = document.getElementById('summary');
const buttons = document.querySelectorAll('button');

screen.textContent = '0';
let shouldResetScreen = false;

buttons.forEach(button => {
    button.addEventListener('click', () => calculate(button))});

function calculate(button) {
    const value = button.textContent;
    const currentScreen = screen.textContent;

    switch (value) {
        case 'Clear': 
            screen.textContent = '0'; 
            shouldResetScreen = false;
            break;
        case '=': 
            try {
                const sanitized = currentScreen.replace(/[^0-9+\-*/.%()]/g, '');
                const calculation = new Function('return ' + sanitized)();
                screen.textContent = calculation;
                shouldResetScreen = true;
            } catch (error) {
                screen.textContent = 'Error';
                shouldResetScreen = true;
            }
            break;
        default:
            if (shouldResetScreen || currentScreen === '0') {
                screen.textContent = value;
                shouldResetScreen = false;
            }else {
                screen.textContent += value;
            }
            break;
    }
}
