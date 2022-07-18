#!/usr/bin/env node
import { welcomeAndAskName } from '../src/index.js';
import prime from '../src/games/prime.js';

const gamesForWin = 3;

const userName = welcomeAndAskName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const sumCorrectAnswer = prime(userName);

if (sumCorrectAnswer === gamesForWin) {
    console.log(`Congratulations, ${userName}!`);
}
