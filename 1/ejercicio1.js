const div = document.getElementById("info")
console.log(div)

const parrafo = document.querySelector(".detalle")
console.log(parrafo)
parrafo.textContent = "Este es un detalle modificado"

const parrafos = document.querySelectorAll("p")
console.log(parrafos)  

const p = document.querySelector("p")
p.style.backgroundColor="lightblue"