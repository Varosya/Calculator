const result = document.getElementById('summary');
result.innerHTML = 0;

function cal(num) {
    if (result.innerHTML == 0) {
        result.innerHTML = '';
    }
    result.innerHTML += num;
}

document.getElementById('equal').addEventListener('click', () => {
    const calculation = new Function('return ' + result.innerHTML)();
    result.innerHTML = calculation;
});

document.getElementById('clear-button').addEventListener('click', () => {
    result.innerHTML = 0;
});
