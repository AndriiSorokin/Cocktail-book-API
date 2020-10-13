// Здесь файл для работы! импортим файлы другие джс

import refs from './refs.js'
import fetch from './fetch.js'
import template from '../template/cocktail.hbs'
import debounce from 'lodash.debounce'


refs.input.addEventListener('input', debounce((event) => {
  refs.list.innerHTML = ''
  fetch.search = event.target.value
  fetch.getFetch().then(data => {
    console.log(data.drinks)
    renderTemplate(data.drinks)
  })
}, 1000))

function renderTemplate(data) {
   const drinks = template(data)
    refs.list.insertAdjacentHTML('beforeend', drinks)
    const ingredients = document.querySelectorAll('.ingredients li')
    console.log(ingredients);
    ingredients.forEach(el => {
      if (el.textContent === '') {
        el.style.display = 'none'
      }
    })
}