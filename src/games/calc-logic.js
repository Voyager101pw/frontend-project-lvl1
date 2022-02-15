import { startQuiz, getRandomNumber } from '../index.js';

export default () => {
  const generationQA = () => {
    const operation = ['+', '-', '*'][getRandomNumber(0, 2)];
    const [num1, num2] = [getRandomNumber(0, 10), getRandomNumber(0, 10)];

    switch (operation) {
      case '+':
        return [`${num1} + ${num2}`, num1 + num2];
      case '-':
        return [`${num1} - ${num2}`, num1 - num2];
      default:
        return [`${num1} * ${num2}`, num1 * num2];
    }
  };

  const settingQuiz = {
    gameDescription: 'What is the result of the expression?',
    qa: [generationQA(), generationQA(), generationQA()],
  };
  startQuiz(settingQuiz);
};
