// console.log('Hola Card!')

const redColor = document.querySelector('.red')
const grayColor = document.querySelector('.gray')
// const cardButton = document.querySelector('#button')
const cardButton = document.getElementById('button')
const cardImage = document.querySelector('.card__image img')

console.log(redColor)

// Agregando el evento addEventListener

redColor.addEventListener('click', () => {
  console.log('Elegiste el color rojo')
  cardButton.style.backgroundColor = 'red'
  cardImage.src = './assets/mercedez_red.jpg'
})

grayColor.addEventListener('click', () => {
  cardButton.style.backgroundColor = 'gray'
  cardImage.src = './assets/mercedez_gray.jpg'
})