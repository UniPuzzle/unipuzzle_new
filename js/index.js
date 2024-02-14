const categoriesDate = document.querySelector('.categories__date');
let date = new Date();
console.log();
const dateString = date.toDateString().split(' ');
const newStringDate =
  dateString[1] + ' ' + dateString[2] + ', ' + dateString[3];

categoriesDate.innerText = newStringDate;
