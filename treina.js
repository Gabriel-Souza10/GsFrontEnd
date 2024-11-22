// Exibir/Ocultar Texto Adicional
document.getElementById('toggle-tema1').addEventListener('click', function () {
    const extraText = document.getElementById('extra-tema1');
    if (extraText.style.display === 'none') {
        extraText.style.display = 'block';
        this.textContent = 'Leia menos';
    } else {
        extraText.style.display = 'none';
        this.textContent = 'Leia mais';
    }
});

document.getElementById('toggle-tema2').addEventListener('click', function () {
    const extraText = document.getElementById('extra-tema2');
    if (extraText.style.display === 'none') {
        extraText.style.display = 'block';
        this.textContent = 'Leia menos';
    } else {
        extraText.style.display = 'none';
        this.textContent = 'Leia mais';
    }
});

// Validação do Formulário de Contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    alert('Mensagem enviada com sucesso! Obrigado por entrar em contato.');
    this.reset();
});
