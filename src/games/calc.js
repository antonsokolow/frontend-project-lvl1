import gameEngine from '../gameEngine.js';

const randomNumber = () => {
  const min = 1;
  const max = 99;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateQuestion = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const correctUnswer = String(num1 + num2);

  return [`${num1} + ${num2}`, correctUnswer];
};

const calc = () => {
  const taskDescription = 'What is the result of the expression?';

  gameEngine(taskDescription, generateQuestion);
};

export default calc;
