#!/usr/bin/env node
import { welcomeAndAskName } from '../src/index.js';
import gcd from '../src/games/gcd.js';

const gamesForWin = 3;

const userName = welcomeAndAskName();
console.log('Find the greatest common divisor of given numbers.');

const sumCorrectAnswer = gcd(userName);

if (sumCorrectAnswer === gamesForWin) {
  console.log(`Congratulations, ${userName}!`);
}
