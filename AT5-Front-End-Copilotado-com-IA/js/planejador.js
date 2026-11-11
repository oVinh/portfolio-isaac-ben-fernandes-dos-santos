const formulario = document.getElementById('formularioPausas');
const resultado = document.getElementById('resultadoPausas');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const horas = Number(document.getElementById('horasTrabalho').value);
    const intervalo = Number(document.getElementById('intervaloPausas').value);
    const duracao = Number(document.getElementById('duracaoPausas').value);

    if (!Number.isInteger(horas) || horas < 1 || horas > 12 ||
        !Number.isInteger(intervalo) || intervalo < 15 || intervalo > 180 ||
        !Number.isInteger(duracao) || duracao < 1 || duracao > 30) {
        resultado.textContent = 'Confira os números informados.';
        return;
    }

    const quantidade = Math.floor((horas * 60 - 1) / intervalo);
    const totalMinutos = quantidade * duracao;

    resultado.textContent = 'Em ' + horas + ' horas de trabalho, você pode planejar ' +
        quantidade + ' pausas de ' + duracao + ' minutos, totalizando ' +
        totalMinutos + ' minutos.';
});
