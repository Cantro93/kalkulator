// index.tsx

import { useEffect, useState } from 'react';
import { generateQuestion } from './api/question';

const QuizApp = () => {
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        setQuestion(generateQuestion());
    }, []);

    return <div>{question ? question.question : 'Loading...'}</div>;
};

export default QuizApp;