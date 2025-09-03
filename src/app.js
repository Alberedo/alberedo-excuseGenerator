import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  

let who = ["Mi perro ", "Mi padre ", "Un señor que pasaba por la calle ", "La madre de Javier, el primo de Lourdes ", "El raton de la cocina ", "El ratoncito Perez "]
let action= ["se ha comido ", "ha perdido ", "me ha pedido urgentemente ", "ha explotado ", "ha cambiado ", "intentó hacer sin exito "]
let what= ["mis deberes ", "mi coche ", "el avión familiar ", "a la abuela ", "una ballena beluga "]
let when= ["al salir de clase.", "esta mañana al amanecer.", "cuando he llegado a casa.", "despues de los examenes.", "en una dimensión paralela."]
let excuses = [who, action, what, when]


function generateExcuse(){{
  let excuse=""
  for(let element of excuses){
    excuse += element[Math.floor(Math.random()*element.length)]    
  }
  return excuse
}}

document.getElementById("excuse").innerHTML = generateExcuse()

};