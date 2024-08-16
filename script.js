const textArea = document.querySelector(".text__area");
const mensagem = document.querySelector(".mensagem");
const paragrafo = document.querySelector(".containerparagrafo");
const subtitulo = document.querySelector(".mensagemsubtitulo");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    ocultarImagem();
    ocultarMensagem();
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    ocultarImagem();
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    mensagem.select(); // Seleciona o texto na área de mensagem
    document.execCommand("copy"); // Copia o texto selecionado para a área de transferência
}

function ocultarImagem() {
    const imagem = document.getElementById("imagem");
    imagem.style.display = "none";
}

function ocultarImagem() {
    mensagem.style.backgroundImage = "none"; // Remove a imagem de fundo
}

function mostrarImagem() {
    mensagem.style.backgroundImage = "url('/assets/boneco.png')"; // Mostra novamente a imagem de fundo
}

function ocultarMensagem() {
    const mensagem = document.querySelector('.mensagemsubtitulo');
    const paragrafo = document.querySelector('.containerparagrafo');

    if (mensagem) {
        mensagem.style.display = 'none';
    }

    if (paragrafo) {
        paragrafo.style.display = 'none';
    }
}
