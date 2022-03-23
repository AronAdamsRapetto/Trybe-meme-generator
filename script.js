const inputTexto = document.getElementById('text-input');

function adicionaTexto() {
  const textoImagem = document.getElementById('meme-text');
  textoImagem.innerText = inputTexto.value;
}

inputTexto.addEventListener('keyup', adicionaTexto);
