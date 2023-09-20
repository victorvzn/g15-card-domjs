// console.log('Hola Card!')

const redColor = document.querySelector('.red')
// const cardButton = document.querySelector('#button')
const cardButton = document.getElementById('button')

console.log(redColor)

redColor.addEventListener('click', () => {
  console.log('Elegiste el color rojo')
  cardButton.style.backgroundColor = 'red'
})