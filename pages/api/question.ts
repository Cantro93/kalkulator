// question.ts

// Function to generate a random math question
export function generateQuestion() {
    const operations = ['+', '-', '*', '/'];
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operation = operations[Math.floor(Math.random() * operations.length)];
    return { question: `${num1} ${operation} ${num2}`, answer: eval(`${num1} ${operation} ${num2}`) };
}