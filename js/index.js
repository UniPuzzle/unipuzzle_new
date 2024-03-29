const categoriesDate = document.querySelector('.categories__date');
const seasonText = document.querySelector('.header .letter__text');
const headerIntroLetter = document.querySelector(
  '.header .intro__title-letter',
);

const date = new Date();

const dateString = date.toDateString().split(' ');
const newStringDate =
  dateString[1] + ' ' + dateString[2] + ', ' + dateString[3];

categoriesDate.innerText = newStringDate;

// ==========

const month = date.getMonth();

switch (month) {
  case 11:
  case 0:
  case 1:
    seasonText.innerText = 'winter';
    headerIntroLetter.classList.add('w');
    break;

  case 2:
  case 3:
  case 4:
    seasonText.innerText = 'spring';
    headerIntroLetter.classList.add('s');
    seasonText.style.marginLeft = '4px';
    break;

  case 5:
  case 6:
  case 7:
    seasonText.innerText = 'summer';
    headerIntroLetter.classList.add('s');
    break;

  case 8:
  case 9:
  case 10:
    seasonText.innerText = 'autumn';
    headerIntroLetter.classList.add('a');
    break;

  default:
    console.log('Invalid month');
}

// ============

headerIntroLetter.style.width = headerIntroLetter.clientHeight + 'px';

// =====================
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('.body');
const burgerBtn = document.querySelector('.burger__btn');

burgerBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('show');
  burgerBtn.classList.toggle('close');

  // if (e.target.classList.contains('burger__btn')) {
  //   headerMenu.classList.toggle('show');
  // }
});
// window.addEventListener('click', e => {
//   if (e.target.classList.contains('close__btn')) {
//     headerMenu.classList.toggle('show');
//     body.style.overflow = 'auto';
//   }
//   if (e.target.classList.contains('burger__btn')) {
//     headerMenu.classList.toggle('show');
//     body.style.overflow = 'hidden';
//   }
// });
