#!/usr/bin/env node
import { welcomeAndAskName } from '../src/index.js';
import calc from '../src/games/calc.js';

const gamesForWin = 3;

const userName = welcomeAndAskName();
console.log('What is the result of the expression?');

let sumCorrectAnswer = calc(userName);

if (sumCorrectAnswer === gamesForWin) {
    console.log(`Congratulations, ${userName}!`);
}