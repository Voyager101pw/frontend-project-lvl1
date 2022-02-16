import startQuiz from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const generationQA = () => {
  const operation = ['+', '-', '*'][getRandomNumber(0, 2)];
  const [num1, num2] = [getRandomNumber(1, 10), getRandomNumber(1, 10)];

  const question = `${num1} ${operation} ${num2}`;
  let correctAnswer = null;

  switch (operation) {
    case '+':
      correctAnswer = String(num1 + num2);
      return [question, correctAnswer];
    case '-':
      correctAnswer = String(num1 - num2);
      return [question, correctAnswer];
    default:
      correctAnswer = String(num1 * num2);
      return [question, correctAnswer];
  }
};

const gameDescription = 'What is the result of the expression?';
const startGame = () => startQuiz(gameDescription, generationQA);

export default startGame;
