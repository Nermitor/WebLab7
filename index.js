'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const dictionary = {
    venus: 'Венера',
    jupyter: 'Юпитер',
    earth: 'Земля',
    mars: 'Марс'
  }

  const lists = {
    humanoids: ['venus', 'earth'],
    others: ['jupyter', 'mars'],

    get all() {
      return [...this.humanoids, ...this.others];
    }
  }

  const buttons = document.querySelectorAll('.navbar__item')
  const planetList = document.querySelector('.planets')
  planetList.innerHTML = getList(lists.all);


  for (const button of buttons) {
    button.addEventListener('click', (event) => {
      planetList.innerHTML = getList(lists[event.currentTarget.id]);
    })
  }

  function getList(list) {
    let out = '';
    for (let elem of list) {
      out += `<li><a href="${elem}.html" class="planets__item">${dictionary[elem]}</a></li>`;
    }
    return out;
  }
})


