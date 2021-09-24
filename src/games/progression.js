import gameEngine from '../gameEngine.js';

const randomNumber = (min = 1, max = 99) => Math.floor(Math.random() * (max - min + 1) + min);

const generateProgression = (length = 10) => {
  const skippedNum = randomNumber(0, length - 1);
  const a1 = randomNumber();
  const d = randomNumber(1, 9);
  let result = '';
  let correctUnswer;
  for (let i = 0; i < length; i += 1) {
    if (i > 0) {
      result += ' ';
    }
    if (skippedNum === i) {
      result += '..';
      correctUnswer = `${a1 + i * d}`;
    } else {
      result += `${a1 + i * d}`;
    }
  }
  return [result, correctUnswer];
};

const progression = () => {
  const taskDescription = 'What number is missing in the progression?';

  gameEngine(taskDescription, generateProgression);
};

export default progression;
