const categoriesDate = document.querySelector('.categories__date');
let date = new Date();
console.log();
const dateString = date.toDateString().split(' ');
const newStringDate =
  dateString[1] + ' ' + dateString[2] + ', ' + dateString[3];

categoriesDate.innerText = newStringDate;

const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('.body');

window.addEventListener('click', e => {
  if (e.target.classList.contains('close__btn')) {
    headerMenu.classList.toggle('show');
    body.style.overflow = 'auto';
  }
  if (e.target.classList.contains('burger__btn')) {
    headerMenu.classList.toggle('show');
    body.style.overflow = 'hidden';
  }
});
