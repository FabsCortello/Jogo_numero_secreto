let listaDeNumeros = [];
let numeroMaximo = 20;
let numeroSecreto = gerarAleatorio();
let tentativas =1;

function exibirTextoNaTela (Tag, texto){
    let campo = document.querySelector (Tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
    alert ('Você deseja que a tela seja lida? Clique em ok, depois clique em Allow para ativar a leitura ou em Deny para não ativar.')
}

function exibirMensagemInicial() {
        exibirTextoNaTela ('h1', 'Jogo do número secreto');
        exibirTextoNaTela ('p', 'Escolha um número entre 1 e 20');
}
    
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector ('input').value
    
    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1', 'Parabéns!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}` 
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela ('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo ();
    }            
}

function gerarAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementos = listaDeNumeros.length;

    if (quantidadeDeElementos == numeroMaximo){
        listaDeNumeros = []
    }
    if (listaDeNumeros.includes(numeroEscolhido)){
        return gerarAleatorio();
    } else {
        listaDeNumeros.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute('disabled', 'true');
}
