// Seleção dos elementos do DOM
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentSlide = 0;
// Tempo em milissegundos para a troca automática (7000ms = 7s)
const autoPlayTime = 7000; 
let slideInterval;

// Função principal: Mostra o slide baseado no índice fornecido
function showSlide(index) {
    // 1. Remove a classe 'active' do slide que está aparecendo agora
    slides[currentSlide].classList.remove('active');
    
    // 2. Calcula o próximo índice (Lógica de loop infinito)
    // Se for maior que o total, volta para 0. Se for menor que 0, vai para o último.
    currentSlide = (index + slides.length) % slides.length;

    // 3. Adiciona a classe 'active' ao novo slide
    slides[currentSlide].classList.add('active');
}

// Funções de navegação
function nextSlide() {
    showSlide(currentSlide + 1);
    resetInterval(); // Reinicia o contador automático ao clicar
}

function prevSlide() {
    showSlide(currentSlide - 1);
    resetInterval(); // Reinicia o contador automático ao clicar
}

// Eventos de clique nos botões
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Configuração do AutoPlay (Mudar slide automaticamente)
function startInterval() {
    slideInterval = setInterval(nextSlide, autoPlayTime);
}

function resetInterval() {
    // Limpa o intervalo antigo e começa um novo
    clearInterval(slideInterval);
    startInterval();
}

// Inicia o carrossel automático ao carregar a página
startInterval();