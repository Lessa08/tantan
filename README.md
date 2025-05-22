<head>
 <link rel="stylesheet" href="style.css">
    </head>
<div class="parametro-senha">
    <h4 class="parametro-senha__titulo">Número de caracteres</h4>
    <div class="parametro-senha-botoes">
        <button class="parametro-senha__botao">-</button>
        <p class="parametro-senha__texto">12</p>
        <button class="parametro-senha__botao">+</button>
    </div>
</div>  
<div class="parametro-senha">
    <h4 class="parametro-senha__titulo">Características da senha</h4>
    <div class="parametro-senha-checkbox">
        <input name="maiusculo" type="checkbox" checked>
        <label for="maiusculo">Letras maiúsculas</label>
    </div>
    <div class="parametro-senha-checkbox">
        <input name="minusculo" type="checkbox">
        <label for="minusculo">Letras minúsculas</label>
    </div>
    <div class="parametro-senha-checkbox">
        <input name="numero" type="checkbox">
        <label for="numero">Números</label>
    </div>
    <div class="parametro-senha-checkbox">
    <input name="simbolo" type="checkbox">
        <label for="simbolo">Símbolos</label>
        <div class="parametro-senha">
    <h4 class="parametro-senha__titulo">Força da senha</h4>
    <div class="barra"></div>
    <div class="forca forte"></div>
    <div class="parametro-senha-textos">
        <p>Fraca</p>
        <p>Média</p>
        <p>Forte</p>
    </div>
</div>
    </div>
</div>


    .parametro-senha-botoes{
    display: flex;
    justify-content: center;
}
    .parametro-senha__botao{
    background-color: var(--fundo-texto);
    color: var(--branco);
    border: 2px solid var(--borda);
    padding: 24px;
    font-size: 24px;
}
   .parametro-senha__botao{
    background-color: var(--fundo-texto);
    color: var(--branco);
    border: 2px solid var(--borda);
    padding: 24px;
    font-size: 24px;
    cursor: pointer;
}
label{
    font-size: 20px;
}
.checkbox{
    width: 20px;
    height: 20px;
    cursor: pointer;
}
.barra{
    background-color: var(--fundo-senha);
    height: 30px;
    width: 100%;
}
.forca{
    height: 30px;
    position: relative;
    bottom: 30px;
}
.fraca{
    width: 25%;
    background-color: #E71B32; 
}
.parametro-senha-textos{
    display: flex;
    justify-content: space-between;
}
.media{
    background-color: #FAF408;
    width: 50%;
}
.forte{
    background-color: #00FF85;
    width: 100%;
}



const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 20){
       // tamanhoSenha = tamanhoSenha+1;
       tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}
