
import { getRandomExpression, isCorrectAnswer, getAnswer } from '../index.js';

const gamesForWin = 3;

const calc = (userName) => {
    let sumCorrectAnswer = 0;
    while (sumCorrectAnswer < gamesForWin) {
        const [exp, result] = getRandomExpression();  
        console.log(`Question: ${exp}`);
        const answer = getAnswer();
        if (isCorrectAnswer(result, answer, 'calc')) {
            console.log('Correct!');
            sumCorrectAnswer += 1;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'\nLet's try again, ${userName}!`);
            break;
        }
    }
    return sumCorrectAnswer;
};

export default calc;