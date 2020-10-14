import refs from './refs.js';
import fetch from './fetch.js';
import template from '../template/cocktail.hbs';

import debounce from 'lodash.debounce'

refs.input.addEventListener('input', debounce((e)=>{
  refs.list.innerHTML= ''
  fetch.search = e.target.value
  fetch.getFetch().then(data=>{
    renderTemplate(data.drinks)
  })
refs.input.value = ``
}, 500))

function renderTemplate(data){
  const drink = template(data)
  refs.list.insertAdjacentHTML('beforeend', drink)
  document.querySelectorAll('.ingredients li').forEach(el=>{
    if(el.textContent === ``) {
      el.style.display = `none`
    }
  })

}
