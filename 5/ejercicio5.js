function alerta(){
    Swal.fire({
        title: "¡Boton Clikeado!",
        icon: "success",
        draggable: true
});
}

const btnclick = document.getElementById("clickMe")
const btnremove = document.getElementById("removeEvent")

btnclick.addEventListener("click",alerta)

btnremove.addEventListener("click", () => {
    btnclick.removeEventListener("click",alerta)
    Swal.fire({
        title: "Evento eliminado",
        icon: "info",
        draggable: true
});
})