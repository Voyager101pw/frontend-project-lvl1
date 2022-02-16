import startQuiz from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const calcGcd = (num1, num2) => (num2 === 0 ? num1 : calcGcd(num2, num1 % num2));

const generationQA = () => {
  const [num1, num2] = [getRandomNumber(1, 50), getRandomNumber(1, 50)];
  const question = `${num1} ${num2}`;
  const correctAnswer = String(calcGcd(num1, num2));
  return [question, correctAnswer];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';
const startGame = () => startQuiz(gameDescription, generationQA);

export default startGame;
