import readlineSync from 'readline-sync';

const common = (question, correctUnswer, name) => {
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctUnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctUnswer}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export default common;
