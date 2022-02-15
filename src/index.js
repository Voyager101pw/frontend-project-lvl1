import readlineSync from 'readline-sync';

export const startQuiz = (settings) => {
  const { gameDescription, qa } = settings;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${gameDescription}`);

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, correctAnswer] of qa) {
    console.log(`Question: ${question}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min)) + min;
