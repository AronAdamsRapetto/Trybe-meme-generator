const inputTexto = document.getElementById('text-input');
const inputArquivo = document.getElementById('meme-insert');
const botaoBordaFire = document.getElementById('fire');
const botaoBordaWater = document.getElementById('water');
const botaoBordaEarth = document.getElementById('earth');

function adicionaTexto() {
  const textoImagem = document.getElementById('meme-text');
  textoImagem.innerText = inputTexto.value;
}

// Solução para resolver erro do fakepath oriunda link disponibilizado no redme do projeto (https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977)
function addImagem(event) {
  document.getElementById('meme-image').src = URL.createObjectURL(event.target.files[0]);
}

function alteraBorda(event) {
  document.getElementById('meme-image-container').style.border = event.target.style.border;
  console.log(document.getElementById('meme-image-container').style.border);
  console.log(event.target.style.border);
}

inputArquivo.addEventListener('change', addImagem);

inputTexto.addEventListener('keyup', adicionaTexto);

botaoBordaFire.addEventListener('click', alteraBorda);
botaoBordaWater.addEventListener('click', alteraBorda);
botaoBordaEarth.addEventListener('click', alteraBorda);
