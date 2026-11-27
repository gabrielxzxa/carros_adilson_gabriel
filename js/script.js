const formularioContato = document.querySelector('#contact-form');

if (formularioContato) {
  const campos = formularioContato.querySelectorAll('[required]');
  const status = document.querySelector('#status-formulario');

  formularioContato.addEventListener('submit', (evento) => {
    evento.preventDefault();

    campos.forEach((campo) => {
      campo.setCustomValidity(
        campo.value.trim() ? '' : 'Preencha este campo.'
      );
    });

    if (!formularioContato.reportValidity()) return;

    status.className = 'status-formulario success';
    status.textContent = 'Formulário demonstrativo: sua mensagem não foi enviada a um servidor.';

    formularioContato.reset();
  });

  campos.forEach((campo) => {
    campo.addEventListener('input', () => campo.setCustomValidity(''));
  });
}