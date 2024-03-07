let inputs = document.querySelectorAll('.input');

// Adiciona um ouvinte de evento para cada input selecionado
inputs.forEach(function(input) {
    input.addEventListener('focus', function() {
        // Altera a cor de fundo para preto quando o usuário começar a digitar
        input.style.backgroundColor = '#F5D22C';
    });
});