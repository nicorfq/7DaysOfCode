alert('Bienvenido! Por favor responda las siguientes preguntas')
const nombre   = prompt('¿Cuál es tu nombre')
const edad     = prompt('¿Cuántos años tienes')

const lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?')
alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`)
document.getElementById('h1').textContent = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}`

let teGusta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SI o 2 para NO`)
console.log(teGusta);

if (teGusta == 1) {
  document.getElementById('h2').textContent = 'Elegiste 1: ¡Muy bien! Sigue estudiando y tendrás mucho éxito.'
} else if (teGusta == 2) {
  document.getElementById('h2').textContent = 'Elegiste 2: Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?'
} else {
  alert('Ingrese número válido')
}



