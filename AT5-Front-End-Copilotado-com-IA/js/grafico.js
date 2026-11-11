const elementoGrafico = document.getElementById('graficoDados');
let instanciaGrafico = null;

if (elementoGrafico && typeof Chart !== 'undefined') {
    instanciaGrafico = new Chart(elementoGrafico, {
        type: 'bar',
        data: {
            labels: ['Estresse', 'Microgerenciamento'],
            datasets: [
                {
                    label: 'Sabem que são monitorados',
                    data: [51, 47],
                    backgroundColor: '#0d6efd'
                },
                {
                    label: 'Não monitorados ou não sabem',
                    data: [38, 23],
                    backgroundColor: '#fd9f1c'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#212529' } } },
            scales: {
                x: { ticks: { color: '#212529' } },
                y: { beginAtZero: true, max: 100, ticks: { color: '#212529' } }
            }
        }
    });
}

function atualizarCoresGrafico() {
    if (!instanciaGrafico) return;

    const cor = document.body.classList.contains('dark-mode') ? '#f8f9fa' : '#212529';
    instanciaGrafico.options.plugins.legend.labels.color = cor;
    instanciaGrafico.options.scales.x.ticks.color = cor;
    instanciaGrafico.options.scales.y.ticks.color = cor;
    instanciaGrafico.update();
}
