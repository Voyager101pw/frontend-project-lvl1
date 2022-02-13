#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!
Answer "yes" if the number is even, otherwise answer "no".`);

for (let i = 0, number = null; i <= 2; i += 1) {
  number = Math.random().toFixed(2).slice(2);
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    break;
  }
}
