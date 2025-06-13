const nuevo = document.createElement("p")
nuevo.textContent = "Este es un párrafo creado dinámicamente"
document.body.appendChild(nuevo)

const boton = document.querySelector("#eliminar")
boton.addEventListener("click", () => {
  const parrafo = document.querySelector("p")
  if (parrafo) {
    parrafo.remove()
  }
})