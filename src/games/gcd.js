import { getRandomValue, isCorrectAnswer, getAnswer } from '../index.js';

const gamesForWin = 3;

const getGCD = (a, b) => {
    if (!b) {
        return a;
    }
    return getGCD(b, a % b);
};

const gcd = (userName) => {
    let sumCorrectAnswer = 0;
    while (sumCorrectAnswer < gamesForWin) {
        const val1 = getRandomValue(100);
        const val2 = getRandomValue(100);
        console.log(`Question: ${val1} ${val2}`);
        const answer = getAnswer();
        const result = String(getGCD(val1, val2));
        if (isCorrectAnswer(result, answer, 'gcd')) {
            console.log('Correct!');
            sumCorrectAnswer += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${userName}!`);
            break;
        }
    }
    return sumCorrectAnswer;
};

export default gcd;
