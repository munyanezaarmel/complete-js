'use strict';
const openBtn = document.querySelectorAll('.show-modal');
const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const close = function () {
         model.classList.remove('hidden');
         overlay.classList.remove('hidden');
}
const add = function () {
      model.classList.add('hidden');
      overlay.classList.add('hidden');
}
for (let i = 0; i < openBtn.length; i++){
    openBtn[i].addEventListener('click', close)
}
closeBtn.addEventListener('click', add)
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape"&& !model.classList.contains('hidden')) {
         add()
   }
})