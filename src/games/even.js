import gameEngine from '../gameEngine.js';

const randomNumber = () => {
  const min = 1;
  const max = 99;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isOdd = (num) => num % 2;

const generateQuestion = () => {
  const num = randomNumber();
  const correctUnswer = isOdd(num) ? 'no' : 'yes';

  return [`${num}`, correctUnswer];
};

const even = () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameEngine(taskDescription, generateQuestion);
};

export default even;
