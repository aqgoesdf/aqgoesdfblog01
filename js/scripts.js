const form = document.getElementById("formContato");

form.addEventListener("submit", function(event){
    event.preventDefault();

    alert("Mensagem enviar com sucesso!");
    form.releasePointerCapture();
});

