import { getRandomValue, isCorrectAnswer, getAnswer } from '../index.js';

const gamesForWin = 3;

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const prime = (userName) => {
  let sumCorrectAnswer = 0;
  while (sumCorrectAnswer < gamesForWin) {
    const askValue = getRandomValue();
    console.log(`Question: ${askValue}`);
    const answer = getAnswer();
    const askResult = isPrime(askValue) ? 'yes' : 'no';
    if (isCorrectAnswer(askResult, answer)) {
      console.log('Correct!');
      sumCorrectAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${askResult}'\nLet's try again, ${userName}!`);
      break;
    }
  }
  return sumCorrectAnswer;
};

export default prime;
