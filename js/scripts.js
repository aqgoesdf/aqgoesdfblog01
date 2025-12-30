const form = document.getElementById("formContato");

form.addEventListener("submit", function(event){
    event.preventDefault();

    alert("Mensagem enviar com sucesso!");
    form.releasePointerCapture();
});

//Menu responsivo
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");


menuToggle.addEventListener("click", () =>{
    menu.ClassList.toggle("active");
});