'use strict';

const title = document.querySelector('.title');
const block = document.querySelector('.square');
const widthInput = document.querySelector('.width');
const heightInput = document.querySelector('.height');
const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
   if (
      widthInput.value == '' ||
      isNaN(widthInput.value) ||
      widthInput.value > 500 ||
      heightInput.value == '' ||
      isNaN(heightInput.value) ||
      heightInput.value > 500
   ) {
      title.innerText = `Enter a number less than 500.`;
   } else {
      block.style.width = widthInput.value + 'px';
      block.style.height = heightInput.value + 'px';
   }
});
