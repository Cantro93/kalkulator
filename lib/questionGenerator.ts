function generateRandomMathQuestion() {
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);

    let question = '';
    let answer = 0;

    switch (operator) {
        case '+':
            answer = num1 + num2;
            question = `${num1} + ${num2} = ?`;
            break;
        case '-':
            answer = num1 - num2;
            question = `${num1} - ${num2} = ?`;
            break;
        case '*':
            answer = num1 * num2;
            question = `${num1} * ${num2} = ?`;
            break;
    }

    return { question, answer };
}

// Example Usage
const randomQuestion = generateRandomMathQuestion();
console.log(randomQuestion);