#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js';

const isEven = (num) => num % 2 === 0;

const playGame = () => {
  const name = getName();
  console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

  const roundsToWin = 3;
  let correctAnswers = 0;

  const startGame = () => {
    const randomNum = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      correctAnswers = 0;
    }

    if (correctAnswers === roundsToWin) {
      console.log(`Congratulations, ${name}!`);
      return;
    }

    startGame();
  };

  startGame();
};

playGame();
