const botaoTema = document.getElementById('temaToggle');

if (localStorage.getItem('tema') === 'escuro') {
    document.body.classList.add('dark-mode');
}

function atualizarTema() {
    const escuro = document.body.classList.contains('dark-mode');
    botaoTema.textContent = escuro ? 'Tema claro' : 'Tema escuro';
    botaoTema.setAttribute('aria-pressed', String(escuro));
    atualizarCoresGrafico();
}

botaoTema.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const escuro = document.body.classList.contains('dark-mode');
    localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
    atualizarTema();
});

atualizarTema();
