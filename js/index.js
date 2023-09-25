// funcion para obtener el angulo del segundero
function anguloSegundero(){
  // obtener los segundos desde el sistema
  let segundos = new Date().getSeconds();
  // obtenemos el valor para el ángulo de la manecilla del segundero.
  let valorAnguloSeg = ((6 * segundos) + 180) % 360;
  // retornamos el valor para la rotación
  return valorAnguloSeg;
}

// funcion para obtener el angulo del minutero
function anguloMinutero(){
  let minutos = new Date().getMinutes();
  let valorAnguloMin = ((6 * minutos) + 180) % 360;
  return valorAnguloMin;
}

// funcion para obtener el angulo de la manecilla de la hora
function anguloHora(){
  let horas = new Date().getHours();
  let valorAnguloHora = ((30 * horas) + 180) % 360;
  return valorAnguloHora;
}

// obtenemos los elementos por su id
const elementoHora = document.querySelector('#hour');
const elementoMinuto = document.querySelector('#minutes');
const elementoSegundo = document.querySelector('#seconds');

setInterval(() => {
  elementoSegundo.style.transform = `rotate(${anguloSegundero()}deg)`;
  elementoMinuto.style.transform = `rotate(${anguloMinutero()}deg)`;
  elementoHora.style.transform = `rotate(${anguloHora()}deg)`;
}, 1000)