import readlineSync from 'readline-sync';
import common from './common.js';

const randomNumber = (min = 1, max = 99) => Math.floor(Math.random() * (max - min + 1) + min);

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const prime = () => {
  let numberOfAnswers = 0;
  let inGame = true;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  while (inGame) {
    const num = randomNumber();
    const correctUnswer = isPrime(num) ? 'yes' : 'no';

    inGame = common(`${num}`, correctUnswer, name);
    if (inGame) {
      numberOfAnswers += 1;
      if (numberOfAnswers === 3) {
        inGame = false;
        console.log(`Congratulations, ${name}!`);
      }
    }
  }
};

export default prime;
