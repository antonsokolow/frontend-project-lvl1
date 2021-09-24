import gameEngine from '../gameEngine.js';

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

const generateQuestion = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const correctUnswer = String(calcGcd(num1, num2));

  return [`${num1} ${num2}`, correctUnswer];
};

const gcd = () => {
  const taskDescription = 'Find the greatest common divisor of given numbers.';

  gameEngine(taskDescription, generateQuestion);
};

export default gcd;
