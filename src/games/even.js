import { getRandomValue, isCorrectAnswer, getAnswer} from '../index.js';

const gamesForWin = 3;

const even = (userName) => {
    let sumCorrectAnswer = 0;
    while (sumCorrectAnswer < gamesForWin) {
        const askValue = getRandomValue();
        console.log(`Question: ${askValue}`);
        const answer = getAnswer();
        if (isCorrectAnswer(askValue, answer , 'even')) {
            console.log('Correct!');
            sumCorrectAnswer += 1;
        } else {
            const correctAnswer = askValue % 2 === 0 ? 'yes' : 'no';
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}\nLet's try again, ${userName}!`);
            break;
        }
    }
    return sumCorrectAnswer;
};

export default even;