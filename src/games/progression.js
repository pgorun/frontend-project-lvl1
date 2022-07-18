import { getRandomValue, isCorrectAnswer, getAnswer } from '../index.js';

const gamesForWin = 3;
const progressionLength = 10;
const maxNumber = 5;

const generateProgression = () => {
  const pg = [];
  const n = getRandomValue(maxNumber);
  let startNumber = getRandomValue();
  for (let i = 0; i < progressionLength; i += 1) {
    startNumber += n;
    pg.push(startNumber);
  }
  const indexForRemove = getRandomValue(progressionLength);
  const result = pg[indexForRemove];
  pg[indexForRemove] = '..';
  return [pg.join(' '), result];
};

const progression = (userName) => {
  let sumCorrectAnswer = 0;
  while (sumCorrectAnswer < gamesForWin) {
    const [exp, result] = generateProgression();
    console.log(`Question: ${exp}`);
    const answer = getAnswer();
    if (isCorrectAnswer(String(result), answer)) {
      console.log('Correct!');
      sumCorrectAnswer += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${userName}!`);
      break;
    }
  }
  return sumCorrectAnswer;
};

export default progression;
