import readlineSync from 'readline-sync';

const randomNumber = () => {
  const min = 1;
  const max = 99;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const isOdd = (num) => num % 2;

const even = () => {
  let numberOfAnswers = 0;
  let inGame = true;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (inGame) {
    const num = randomNumber();
    console.log('Question:', num);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctUnswer = isOdd(num) ? 'no' : 'yes';

    if (userAnswer === correctUnswer) {
      console.log('Correct!');
      numberOfAnswers += 1;
      if (numberOfAnswers === 3) {
        inGame = false;
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctUnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      inGame = false;
    }
  }
};

export default even;
