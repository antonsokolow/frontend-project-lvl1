import readlineSync from 'readline-sync';
import common from './common.js';

const randomNumber = () => {
  const min = 1;
  const max = 99;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const calcGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return calcGcd(b, a % b);
};

const gcd = () => {
  let numberOfAnswers = 0;
  let inGame = true;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  while (inGame) {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const correctUnswer = String(calcGcd(num1, num2));

    inGame = common(`${num1} ${num2}`, correctUnswer, name);
    if (inGame) {
      numberOfAnswers += 1;
      if (numberOfAnswers === 3) {
        inGame = false;
        console.log(`Congratulations, ${name}!`);
      }
    }
  }
};

export default gcd;
