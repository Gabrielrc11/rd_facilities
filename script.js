// Script para abrir e fechar o pop-up de contato
document.getElementById('contact-button').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('contact-popup').style.display = 'none';
});

// Fechar o pop-up ao clicar fora do conteúdo
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('contact-popup')) {
        document.getElementById('contact-popup').style.display = 'none';
    }
});
