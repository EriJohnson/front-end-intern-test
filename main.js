// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  contactForm.addEventListener('submit', function() {
 
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;

    if (!nameValue) {
      window.alert('Preencha com o seu Nome')
      nameInput.focus()
    } else if (!emailValue || emailValue.indexOf('@') == -1) {
      window.alert('Preencha com um email válido.\n\nExemplo:\n\n"exemplo@provedor.com"')
      emailInput.focus()
    } else if (!messageValue) {
      window.alert('Digite uma mensagem!') 
      messageInput.focus()
    } else{
      window.alert('Mensagem enviada com sucesso!')
    }
     
  });
})();
