import startQuiz from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const generationQA = () => {
  const number = getRandomNumber(0, 100);
  const question = number;
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const startGame = () => startQuiz(gameDescription, generationQA);

export default startGame;
