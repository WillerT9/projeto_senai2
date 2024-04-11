//let titulo = document.querySelector('h1');
//titulo.innerHTML = "Jogo do Número Secreto";

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Insira um número de 1 a 10";
    //variavel      //função
let numeroSecreto = gerarNumeroSecreto();
let i = 0;

function exibirTextoNaTela(tag, texto){//parametro
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Insira um número de 1 a 10');
}
exibirTextoInicial();


function validarChute(){//sem parametro
    let chute = document.querySelector('input').value;
    i++
    limparCampo();
    let palavraTentativa = i>1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${i} ${palavraTentativa}`;
        mensagemTentativa;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns, você é um bananão!');
        exibirTextoNaTela('p', mensagemTentativa);
        //if(i>1){
        //   exibirTextoNaTela('p', `Você acertou o número secreto, com ${i} tentativas!`);
        //}else{
        //exibirTextoNaTela('p', `Você acertou o número secreto, com ${i} tentativa!`);
        //}
        document.getElementById('reiniciar').removeAttribute('disabled');
        alterarImagem('imagem','./img/aceto.png');
    }
    else if(chute < numeroSecreto){
        exibirTextoNaTela('p','O número secreto é maior!');
    }
    else{
        exibirTextoNaTela('p','O número secreto é menor!');
    }
}
function gerarNumeroSecreto(){
    return parseInt(Math.random() * 10+1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    i = 0;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    alterarImagem2('imagem','./img/chupetaDog.png');
}

function alterarImagem(objeto, caminhoImagem){
    document.getElementById(objeto).src = caminhoImagem;
}

function alterarImagem2(objeto, caminhoImagem){
    document.getElementById(objeto).src = caminhoImagem;
}

