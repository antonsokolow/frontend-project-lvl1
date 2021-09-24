import readlineSync from 'readline-sync';

const attemptsToWin = 3;

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

const gameEngine = (taskDescription, generateQuestion) => {
  let numberOfAnswers = 0;
  let inGame = true;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(taskDescription);

  while (inGame) {
    const [question, correctUnswer] = generateQuestion();
    inGame = common(`${question}`, correctUnswer, name);
    if (inGame) {
      numberOfAnswers += 1;
      if (numberOfAnswers === attemptsToWin) {
        inGame = false;
        console.log(`Congratulations, ${name}!`);
      }
    }
  }
};

export default gameEngine;
