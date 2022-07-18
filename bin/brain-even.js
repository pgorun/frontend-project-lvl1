#!/usr/bin/env node
import { welcomeAndAskName } from '../src/index.js';
import even from '../src/games/even.js';

const gamesForWin = 3;

const userName = welcomeAndAskName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const sumCorrectAnswer = even(userName);

if (sumCorrectAnswer === gamesForWin) {
    console.log(`Congratulations, ${userName}!`);
}
