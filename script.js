const campoSenha = document.getElementById("campo-senha");
const botaoGerar = document.getElementById("botao-gerar");
const rangeCaracteres = document.getElementById("range-caracteres");
const numeroCaracteres = document.getElementById("numero-caracteres");

const maiusculas = document.getElementById("maiusculas");
const minusculas = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

rangeCaracteres.addEventListener("input", () => {
    numeroCaracteres.textContent = rangeCaracteres.value;
});

botaoGerar.addEventListener("click", () => {
    let caracteres = "";
    if (maiusculas.checked) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (minusculas.checked) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (numeros.checked) caracteres += "0123456789";
    if (simbolos.checked) caracteres += "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    if (caracteres === "") {
        campoSenha.value = "Selecione ao menos 1 opção!";
        return;
    }

    let senha = "";
    for (let i = 0; i < parseInt(rangeCaracteres.value); i++) {
        const index = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[index];
    }

    campoSenha.value = senha;
});
