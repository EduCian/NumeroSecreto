let listaDeNumeroSorteado = [];
let limiteLista = 50
let numeroSecreto = gerarNumero();
console.log (numeroSecreto)
let nTentativa = 1


//let titulo = document.querySelector("h1")
//titulo.innerHTML = "Bem Vindo ao jogo do numero secreto!"

////let paragrafo = document.querySelector("p")
//paragrafo.innerHTML = "Chute um numero entre 1 ao 10"

function exibirTexto (tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.3})
}
function textoInicial () {
    exibirTexto ("h1", "Bem Vindo ao jogo do numero secreto!");
    exibirTexto ("p", `Chute um numero entre 1 ao ${limiteLista}`); 
}

textoInicial();

function verificarChute() {
    let chute = document.querySelector ("input").value;
    
    if (chute > numeroSecreto) {
        exibirTexto ("h1", "Você errou!");
        exibirTexto ("p", "O numero secreto é menor");
    } else{
        if (chute < numeroSecreto) {
            exibirTexto ("h1", "Você errou!");
            exibirTexto ("p", "O numero secreto é maior");
        }
        
    }
    limparCampo()
    
    if (chute == numeroSecreto){

        exibirTexto ("h1", "ACERTOU!!");
        let palavraTentativa = nTentativa > 1 ? "tentativas" : "tentativa";
        let txtTentativa = (`Parabens, você ganhou o jogos dos numeros secretos com ${nTentativa} ${palavraTentativa} `);
        document.getElementById ("reiniciar").removeAttribute ("disabled");
        exibirTexto ("p", txtTentativa);
    }
    nTentativa++;
} 


function limparCampo() {
    chute = document.querySelector ("input");
    chute.value = ""
}

function gerarNumero() {
    let numeroEscolhido = parseInt (Math.random () * limiteLista + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == limiteLista) {
        listaDeNumeroSorteado = []
    }

    if (listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumero (); 
    } else {
        listaDeNumeroSorteado.push (numeroEscolhido);
        console.log (listaDeNumeroSorteado)
        return numeroEscolhido;
    }
}

function reiniciarJogo () {
    numeroSecreto = gerarNumero();
    limparCampo()
    nTentativa = 1
    textoInicial ()
    document.getElementById("reiniciar").setAttribute("disabled", true)
}