// console.log('Hola Card!')

const redColor = document.querySelector('.red')
const grayColor = document.querySelector('.gray')
// const cardButton = document.querySelector('#button')
const cardButton = document.getElementById('button')
const cardButtonFeedback = document.getElementById('feedback')
const cardImage = document.querySelector('.card__image img')
const cardDescription = document.querySelector('.card__description')
const cardPrice = document.querySelector('.card__price')

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

// TODO: agrgar el evento click al boton black

// Crear etiqueta h3, agregarle una clase, un texto y lo vamos a incrustar en el html desde JS

// appendChild
const etiquetaH3 = document.createElement('h3')
etiquetaH3.className = 'tag'
etiquetaH3.textContent = 'Card'
// etiquetaH3.innerHTML = '<u>Card</u>'
// cardDescription.appendChild(etiquetaH3)

// insertBefore
const cardDescriptionH2 = document.querySelector('h2')
cardDescription.insertBefore(etiquetaH3, cardDescriptionH2)

// Cambiando el contenido del price
cardPrice.innerHTML = '$200,000.00'

cardButton.addEventListener('click', function () {
  cardButton.style.display = 'none'
  cardButtonFeedback.style.display = 'block'
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 1 }
  })
})

cardButtonFeedback.addEventListener('click', function () {
  cardButton.style.display = 'block'
  cardButtonFeedback.style.display = 'none'
})