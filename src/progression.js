import readlineSync from 'readline-sync';
import common from './common.js';

const randomNumber = (min = 1, max = 99) => Math.floor(Math.random() * (max - min + 1) + min);

const generateProgression = (length) => {
  const skippedNum = randomNumber(0, length - 1);
  const a1 = randomNumber();
  const d = randomNumber(1, 9);
  let result = '';
  let correctUnswer;
  for (let i = 0; i < length; i += 1) {
    if (skippedNum === i) {
      result += ' ..';
      correctUnswer = `${a1 + i * d}`;
    } else {
      result += ` ${a1 + i * d}`;
    }
  }
  return [result, correctUnswer];
};

const progression = () => {
  let numberOfAnswers = 0;
  let inGame = true;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  while (inGame) {
    const [question, correctUnswer] = generateProgression(10);

    inGame = common(`${question}`, correctUnswer, name);
    if (inGame) {
      numberOfAnswers += 1;
      if (numberOfAnswers === 3) {
        inGame = false;
        console.log(`Congratulations, ${name}!`);
      }
    }
  }
};

export default progression;
