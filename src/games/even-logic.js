import startQuiz from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

export default () => {
  const generationQA = () => {
    const number = getRandomNumber(0, 100);
    const question = number;
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  startQuiz(gameDescription, generationQA);
};
