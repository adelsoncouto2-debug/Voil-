const eyeIcons = document.querySelectorAll(".eye-icon");
eyeIcons.forEach(icon => {
    icon.addEventListener("click", () => {
    const input = icon.previousElementSibling;
    if (input.type === "password") {
        input.type = "text";
        icon.src = "../img/eye-off.svg";
    } else {
        input.type = "password";
        icon.src = "../img/eye.svg";
    }
    });
});
document.querySelectorAll('input[type="text"]').forEach(input => {
    if (input.previousElementSibling.textContent === "Nome" || input.previousElementSibling.textContent === "Sobrenome") {
        input.addEventListener("input", () => {
            input.value = input.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, '');
        });
    }
});
const cpf = document.getElementById("cpf");
cpf.addEventListener("input", () => {
    let valor = cpf.value.replace(/\D/g, "");
    valor = valor.slice(0, 11);
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    cpf.value = valor;
});
const telefone = document.getElementById("telefone");
telefone.addEventListener("input", () => {
    let valor = telefone.value.replace(/\D/g, "");
    valor = valor.slice(0, 11);
    valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    telefone.value = valor;
});
const cep = document.getElementById("cep");
cep.addEventListener("input", ()=>{
    let valor = cep.value.replace(/\D/g,"");
    valor = valor.slice(0,8);
    valor = valor.replace(/(\d{5})(\d)/,"$1-$2");
    cep.value = valor;
});
const numero = document.getElementById("numero");
numero.addEventListener("input", ()=>{
    numero.value = numero.value.replace(/\D/g,"");
});
const email = document.getElementById("email");
email.addEventListener("blur", ()=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email.value)){
        alert("E-mail inválido.");
    }
});
const nascimento = document.getElementById("nascimento");
nascimento.addEventListener("input", () => {
    let valor = nascimento.value.replace(/\D/g, "");
    valor = valor.slice(0, 8);
    if (valor.length > 2)
        valor = valor.replace(/(\d{2})(\d)/, "$1/$2");
    if (valor.length > 5)
        valor = valor.replace(/(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
    nascimento.value = valor;
});
const openLogin = document.getElementById("open-login");
const loginModal = document.querySelector(".login-modal");
const closeButton = document.querySelector(".login-close");
openLogin.addEventListener("click", function(e){
    e.preventDefault();
    loginModal.classList.add("open");
});
closeButton.addEventListener("click", function(){
    loginModal.classList.remove("open");
});
loginModal.addEventListener("click", function(e){
    if(e.target === loginModal){
        loginModal.classList.remove("open");
    }
});