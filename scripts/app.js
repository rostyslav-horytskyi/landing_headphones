$(function() {
  const $gallery = $('.gallery a').simpleLightbox();
});

const button = document.querySelector('.btn');

console.log(button);

button.addEventListener('mousedown', (e) => {
  button.style.boxShadow = 'none';
  button.style.transform = 'translateY(0)';
});

button.addEventListener('mouseup', (e) => {
  button.style = {};
});