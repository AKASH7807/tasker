function color(color){
    document.body.style.background = color;
}

const input = document.getElementById('input')
const button = document.getElementById('btn')
const list = document.querySelector('.list')

button.addEventListener('click',()=>{
    const li = document.createElement('li')
    li.innerHTML = input.value
    list.appendChild(li)
})

const tap = document.querySelector(".switch")
const body = document.querySelector(".body")

tap.addEventListener('click',()=>{
    body.classList.toggle('dark')
 
})