const nuevo = document.createElement("div")
nuevo.textContent = "Soy un nuevo div"

const div = document.querySelector("div")

div.parentNode.replaceChild(nuevo,div)

console.log(div)
console.log(nuevo)