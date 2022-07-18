#!/usr/bin/env node
import { welcomeAndAskName } from '../src/index.js';
import progression from '../src/games/progression.js';

const gamesForWin = 3;

const userName = welcomeAndAskName();
console.log('Find the greatest common divisor of given numbers.');

const sumCorrectAnswer = progression(userName);

if (sumCorrectAnswer === gamesForWin) {
  console.log(`Congratulations, ${userName}!`);
}
