const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers-container');

generateBtn.addEventListener('click', () => {
    generateNumbers();
});

function generateNumbers() {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
        const circle = document.createElement('div');
        circle.classList.add('number');
        circle.textContent = number;
        circle.style.backgroundColor = getNumberColor(number);
        numbersContainer.appendChild(circle);
    }
}

function getNumberColor(number) {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
}

generateNumbers();
