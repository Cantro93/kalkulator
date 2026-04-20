// API route for handling questions
import type { NextApiRequest, NextApiResponse } from 'next';

const questions = [
  { id: 1, question: 'What is 2 + 2?', answer: 4 },
  { id: 2, question: 'What is the capital of France?', answer: 'Paris' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(questions);
}