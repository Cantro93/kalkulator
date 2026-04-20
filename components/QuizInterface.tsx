import React from 'react';

interface QuizInterfaceProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
}

const QuizInterface: React.FC<QuizInterfaceProps> = ({ question, options, onAnswer }) => {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {options.map(option => (
                    <li key={option} onClick={() => onAnswer(option)}>{option}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuizInterface;