//Menu responsivo
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", ()=> {
    menu.classList.toggle("active");
});




/*Mensagem pornalizada campos de menssagem */
const form = document.getElementById("formContato");
const erro = document.getElementById("erro");


form.addEventListener("submit", function(event){
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getAnimations("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem){
        erro.textContent = "Preencha todos os campos!";
        return;
    }

    if (!email.includ("@")) {
        erro.textContent = "Digite um e-mail valido.";
        return;
    }

    erro.textContent = "";
    alert("Mensagem enviada com sucesso")
    form.reset();

});



/*Mudar de cor*/
const darkToggle = document.getElementById("darkToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
});