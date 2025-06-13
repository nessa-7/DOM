const input = document.getElementById("nuevaTarea")
const boton = document.getElementById("btnagregar")
const lista = document.getElementById("listaTareas")

boton.addEventListener("click", () => {
    const texto = input.value.trim()
    if (texto === "") {
        Swal.fire({
            title: "Tarea Vacia",
            text: "Ingrese una tarea",
            icon: "info",
            draggable: true
        });
    return
    }

    const divTarea = document.createElement("div");
    divTarea.classList.add("tarea");

    const textoTarea = document.createElement("span");
    textoTarea.textContent = texto;

    const iconoCheck = document.createElement("i");
    iconoCheck.classList.add("fa-solid", "fa-check-square", "icono", "pendiente");
    iconoCheck.title = "Marcar como realizada";

    iconoCheck.addEventListener("click", () => {
    iconoCheck.classList.toggle("pendiente");
    iconoCheck.classList.toggle("realizada");
})

    const iconoEliminar = document.createElement("i");
    iconoEliminar.classList.add("fa-solid", "fa-trash", "icono", "eliminar");
    iconoEliminar.title = "Eliminar tarea";

    iconoEliminar.addEventListener("click", () => {
    Swal.fire({
        title: "¿Estás seguro de eliminar la tarea?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#5CB338",
        cancelButtonColor: "#D84040",
        confirmButtonText: "Sí, bórrala"
    }).then((result) => {
    if (result.isConfirmed) {
      divTarea.remove();
      Swal.fire({
        title:"Tu tarea ha sido eliminada",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    }
    });
})

    divTarea.appendChild(textoTarea)
    divTarea.appendChild(iconoCheck)
    divTarea.appendChild(iconoEliminar)

    lista.appendChild(divTarea)
    input.value = ""

})