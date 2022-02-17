import startQuiz from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) return 'no';
  }
  return 'yes';
};

const generationQA = () => {
  const question = getRandomNumber(2, 1000);
  const correctAnswer = isPrime(question);
  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startGame = () => startQuiz(gameDescription, generationQA);

export default startGame;
