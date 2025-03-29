let slideConteudo = ``
const itemSlide = (dados) => {
    return `<div class="mySlides fade"> <img src="${dados.img}" style="width:100%; cursor:pointer" onclick="openModal('${dados.img}','${dados.descricao}')"> <div class="w3-display-bottomleft w3-large w3-container w3-padding-16 w3-black"> ${dados.descricao} </div> </div>`
}

let slidesDados = dados.apresentacoes
for( let x =0; x < slidesDados.length; x++) {
    slideConteudo += itemSlide(slidesDados[x])
}
slideConteudo += `<button class="w3-btn w3-display-left" onclick="plusSlides(-1)">&#10094;</button>
<button class="w3-btn w3-display-right" onclick="plusSlides(1)">&#10095;</button>`

document.querySelector(".qstitulo").textContent = dados.quemsomos.titulo
document.querySelector(".qsconteudo").textContent = dados.quemsomos.conteudo

document.querySelector(".msconteudo").textContent = dados.missao.conteudo

document.querySelector(".containerSlides").innerHTML = slideConteudo

let slideIndex = 1;
let slideInterval;

// Inicia o slideshow
showSlides(slideIndex);

// Função principal do slideshow
function plusSlides(n) {
  clearInterval(slideInterval); // Pausa o slideshow automático
  showSlides(slideIndex += n);
  slideInterval = setInterval(() => plusSlides(1), 5000); // Reinicia após navegação manual
}

// Mostra slide específico
function currentSlide(n) {
  clearInterval(slideInterval); // Pausa o slideshow automático
  showSlides(slideIndex = n);
  slideInterval = setInterval(() => plusSlides(1), 5000); // Reinicia após navegação manual
}

// Controla a exibição dos slides
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
    
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
    
  slides[slideIndex-1].style.display = "block";
    
  // Configura o slideshow automático apenas na primeira chamada
  if (!slideInterval) {
    slideInterval = setInterval(() => plusSlides(1), 5000);
  }
}

// Abre o modal com a imagem ampliada
function openModal(imgSrc, imgDesc) {
  document.getElementById("modalImage").src = imgSrc;
  document.getElementById("modalDesc").textContent = imgDesc
  document.getElementById("imageModal").style.display = "block";
}
