import startQuiz from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const generationQA = () => {
  const length = getRandomNumber(5, 10);
  const unknowPos = getRandomNumber(0, length - 1);
  const rate = getRandomNumber(1, 100);
  let array = [getRandomNumber(1, 20)];

  for (let i = 0; i < length - 1; i += 1) {
    array = [...array, array[array.length - 1] + rate];
  }

  const correctAnswer = String(array[unknowPos]);
  array[unknowPos] = '..';
  const question = array.join(' ');

  return [question, correctAnswer];
};

const gameDescription = 'What number is missing in the progression?';
const startGame = () => startQuiz(gameDescription, generationQA);
export default startGame;
