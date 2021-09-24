import gameEngine from '../gameEngine.js';

const randomNumber = (min = 1, max = 99) => Math.floor(Math.random() * (max - min + 1) + min);

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const generateQuestion = () => {
  const num = randomNumber();
  const correctUnswer = isPrime(num) ? 'yes' : 'no';

  return [`${num}`, correctUnswer];
};

const prime = () => {
  const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameEngine(taskDescription, generateQuestion);
};

export default prime;
