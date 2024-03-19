const seasonText = document.querySelector('.header .letter__text');
const headerIntroLetter = document.querySelector(
  '.header .intro__title-letter',
);

const date = new Date();

// =====seasons and first letter=====

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
headerIntroLetter.style.width = headerIntroLetter.clientHeight + 'px';

// ==========burger-menu===========
const headerMenu = document.querySelector('.header-menu');
const body = document.querySelector('.body');
const burgerBtn = document.querySelector('.burger__btn');

burgerBtn.addEventListener('click', () => {
  headerMenu.classList.toggle('show');
  burgerBtn.classList.toggle('close');
});
