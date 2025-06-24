const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

console.log(botoes)
botoes[0].onclick = diminuiTamanho;
function diminuiTamanho(){
   if tamanhoSenha >1 = tamanhoSenha-1;
    numeroSenha.textContent = tamanhoSenha;
        numeroSenha.textContent = tamanhoSenha;
}
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;+
function aumentaTamanho(){
    tamanhoSenha = tamanhoSenha+1;
    numeroSenha.textContent = tamanhoSenha;
}