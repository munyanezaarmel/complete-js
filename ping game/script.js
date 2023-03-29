'use strict';
let score0 = document.getElementById('score--1');
let score1 = document.getElementById('score--0');
const roll = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
const hold = document.querySelector('.btn--hold');
let currentEl0 = document.querySelector('#current--0');
let currentEl1 = document.querySelector('#current--1');

score0.textContent = 0;
score1.textContent = 0;

let current = 0;
let state = 0;
roll.addEventListener('click', function () {
  const randomDice = Math.trunc(Math.random() * 6 + 1);
  dice.src = `dice-${randomDice}.png`;
  dice.classList.remove('hidden');
  if (randomDice !== 1) {
    current += randomDice;
    document.getElementById(`current--${state}`).textContent = current;
  } else {
    document.getElementById(`current--${state}`).textContent = 0;
    current = 0;
    state = state === 0 ? 1 : 0;
  }
});
