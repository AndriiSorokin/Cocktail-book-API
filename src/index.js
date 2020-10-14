import css from "./css/style.css";
// import './js/render.js'
// import './js/signUp.js'
import refs from './js/refs.js'
import debounce from 'lodash.debounce'


const myArr = []

function pushElems(arr, num){
  for(let i = 1; i <= num; i++){
    arr.push(`elem-${i}`)
  }
  return arr
}
console.log(pushElems(myArr, 5))

const bc_24 = []

refs.input.addEventListener('input', debounce((e)=>{
  // console.log(e.target.value)
  let elem = e.target.value;
  console.log(elem)

  bc_24.push(elem)

  console.log(bc_24)

}, 800))

refs.signUpForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  // console.dir(e.currentTarget)
  // console.dir(e.currentTarget.elements)
  console.dir(e.currentTarget.elements.login.value)
  console.dir(e.currentTarget.elements.password.value)
  // console.dir(e.target)
})

  refs.showBtn.addEventListener('click', (e)=>{
    console.dir(refs.passwordInput)
    let a = refs.passwordInput

    if(a.type === 'text'){
      a.type = "password"
      //
    } else {
      a.type = "text"
    }
  })



const closeBtn = document.createElement('button')
closeBtn.textContent = 'x'
closeBtn.classList.add('button-close-js')
refs.divForm.prepend(closeBtn)

refs.btnModal.addEventListener('click', (e) => {
  refs.divForm.classList.toggle('is-open')
})