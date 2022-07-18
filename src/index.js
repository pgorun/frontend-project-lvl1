import readlineSync from 'readline-sync';

const oper = ['+', '-', '*'];

const welcomeAndAskName = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
};

const getRandomValue = (maxValue = 10) => Math.floor(Math.random() * maxValue);

const getRandomExpression = () => {
    const val1 = getRandomValue();
    const operator = oper[getRandomValue(3)];
    const val2 = getRandomValue();
    let result = val1;
    switch (operator) {
        case '+':
            result += val2;
            break;
        case '-':
            result -= val2;
            break;
        default:
            result *= val2;
            break;
    }
    return [`${val1} ${operator} ${val2}`, String(result)];
};

const isCorrectAnswer = (askValue, answer, gameName) => {
    if (gameName === 'calc') {
        return askValue === answer;
    } else if (gameName === 'even') {
        return (askValue % 2 === 0 && answer === 'yes')
        || (askValue % 2 !== 0 && answer === 'no');
    }
}

const getAnswer = () => readlineSync.question('Your answer: ');

export { welcomeAndAskName, getRandomExpression, isCorrectAnswer, getAnswer, getRandomValue };