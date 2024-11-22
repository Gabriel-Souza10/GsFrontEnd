// Exibir/Ocultar Texto Adicional
document.getElementById('toggle-text').addEventListener('click', function () {
    const extraText = document.getElementById('extra-text');
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

// Gráficos com Chart.js
// Gráfico de Eficiência
const ctxEfficiency = document.getElementById('efficiencyChart').getContext('2d');
new Chart(ctxEfficiency, {
    type: 'doughnut',
    data: {
        labels: ['Energia Recuperada', 'Energia Perdida'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#4caf50', '#f44336'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

// Gráfico de Consumo de Energia
const ctxEnergy = document.getElementById('energyChart').getContext('2d');
new Chart(ctxEnergy, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Consumo de Energia (MW)',
            data: [1.2, 1.3, 1.1, 1.5, 1.4, 1.6],
            borderColor: '#007bff',
            fill: false,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
});

// Gráfico de Análise Preditiva
const ctxPredictive = document.getElementById('predictiveChart').getContext('2d');
new Chart(ctxPredictive, {
    type: 'bar',
    data: {
        labels: ['Hoje', '1 Semana', '2 Semanas', '1 Mês'],
        datasets: [{
            label: 'Eficiência Prevista (%)',
            data: [90, 88, 85, 83],
            backgroundColor: '#ffc107',
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            }
        }
    }
});
