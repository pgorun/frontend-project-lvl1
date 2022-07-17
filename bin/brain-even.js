#!/usr/bin/env node
import readlineSync from 'readline-sync';

const maxValue = 10;
const gamesForWin = 3;

const getRandomValue = () => Math.floor(Math.random() * maxValue);

const isCorrectAnswer = (askValue, answer) => (askValue % 2 === 0 && answer === 'yes')
    || (askValue % 2 !== 0 && answer === 'no');

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let sumCorrectAnswer = 0;
while (sumCorrectAnswer < gamesForWin) {
    const askValue = getRandomValue();
    console.log(`Question: ${askValue}`);
    const answer = readlineSync.question('Your answer: ');
    if (isCorrectAnswer(askValue, answer)) {
        console.log('Correct!');
        sumCorrectAnswer += 1;
    } else {
        const correctAnswer = askValue % 2 === 0 ? 'yes' : 'no';
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}\nLet's try again, ${userName}!`);
        break;
    }
}

if (sumCorrectAnswer === gamesForWin) {
    console.log(`Congratulations, ${userName}!`);
}
