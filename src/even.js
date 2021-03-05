import readlineSync from 'readline-sync';

const getCorrectAnswer = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const getRandom = (num) => Math.floor(Math.random() * Math.floor(num));

const evenGame = (name) => {
  const maxAttepmt = 3;
  const maxNumber = 30;

  let numberAttempt = 0;
  let hasWrongAnswer = false;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (numberAttempt < maxAttepmt && !hasWrongAnswer) {
    const num = getRandom(maxNumber);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(num);
    if (correctAnswer === answer) {
      console.log('Correct!');
      numberAttempt += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      hasWrongAnswer = true;
    }
  }
  if (!hasWrongAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default evenGame;
