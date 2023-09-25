'use strict';
const translated = {
  venus: 'Венера',
  jupyter: 'Юпитер',
  earth: 'Земля',
  mars: 'Марс'
}

const lists = {
  humanoids: ['venus', 'earth'],
  others: ['jupyter', 'mars'],

  get all() {
    return this.humanoids.concat(this.others);
  }
}

const buttons = document.querySelectorAll('.navbar__item')
const planetList = document.querySelector('.planets')
planetList.innerHTML = getList(lists.all);


for (const button of buttons) {
  button.addEventListener('click', (event) => {
    const eventTargetId = event.currentTarget.id;
    planetList.innerHTML = getList(lists[eventTargetId]);
  })
}

function getList(list) {
  let out = '';
  for (let elem of list) {
    out += `<li><a href="${elem}.html" class="planets__item">${translated[elem]}</a></li>`;
  }
  return out;
}

