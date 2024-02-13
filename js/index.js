const categoriesDate = document.querySelector('.categories__date');
let date = new Date();
console.log();
const dateString = date.toDateString().split(' ');
const newStringDate =
  dateString[1] + ' ' + dateString[2] + ', ' + dateString[3];

categoriesDate.innerText = newStringDate;

// ===========
console.log(window.innerWidth);
let event = null;

document.addEventListener('touchstart', function (e) {
  event = e;
});
document.addEventListener('touchstart', function (e) {
  if (event) {
    console.log(e.touches[0].pageX);
  }
});
document.addEventListener('touchend', function (e) {
  if (event) {
    console.log(event.touches[0].pageX);
  }
});
// document.addEventListener('touchmove', function (e) {
//   if (event) {
//     console.log('Move delta: ' + (e.touches[0].pageX - event.touches[0].pageX));
//   }
// });
document.addEventListener('touched', function (e) {
  event = null;
});
// const firstItem = document.querySelector('.mazes__item--main');
// document.addEventListener('touchmove', () => {
//   firstItem.style.marginLeft = -100 + '%';
// });
// document.addEventListener('touchstart', () => {
//   console.log(firstItem.pageYOffset);
//   console.log(window.pageXOffset);
// });
// document.addEventListener('touchend', () => {
//   console.log(firstItem.pageYOffset);
//   console.log(window.pageXOffset);
// });
