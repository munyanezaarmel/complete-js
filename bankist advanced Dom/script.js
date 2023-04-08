'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header=document.querySelector('.header')

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const learnBtn = document.querySelector('.btn--scroll-to');
const section01 = document.getElementById('section--1');

//modern browsers
learnBtn.addEventListener('click', function (e) {
  section01.scrollIntoView()
})
const links = document.querySelectorAll('.nav__link');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behaviour:"smooth"})
})
});
   

