// Adicione este código dentro da sua tag <script>

// Função que será chamada quando o formulário principal for enviado
function enviarFormularioWhatsApp() {
    // 1. Defina o número de telefone para onde a mensagem será enviada
    const telefone = "5548920024952"; // <-- COLOQUE AQUI O SEU NÚMERO com código do país

    // 2. Pegue os valores dos campos do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem-principal").value;

    // 3. Validação simples para ver se os campos não estão vazios
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos do formulário.");
        return; // Interrompe a função se algum campo estiver vazio
    }

    // 4. Formate a mensagem para ficar organizada no WhatsApp
    // Usamos *texto* para deixar em negrito no WhatsApp
    const textoFormatado = `*Nova Mensagem do Site*\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n\n*Mensagem:*\n${mensagem}`;

    // 5. Codifique o texto para a URL
    const textoCodificado = encodeURIComponent(textoFormatado);

    // 6. Crie o link final do WhatsApp
    const urlWhatsApp = `https://wa.me/${telefone}?text=${textoCodificado}`;

    // 7. Abra o link em uma nova aba
    window.open(urlWhatsApp, '_blank');
}

// 8. Adicione um "escutador" de eventos ao formulário
// Isso faz com que a nossa função seja chamada quando o botão "submit" for clicado
// e previne o comportamento padrão de envio do formulário (que causava o erro 405)
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    enviarFormularioWhatsApp(); // Chama nossa função personalizada
});

// Botões do google e facebook ads

function mostrartexto(opcao) {
  const botoes = document.querySelectorAll(".btn");
  const google = document.getElementById("conteudogoogle");
  const facebook = document.getElementById("conteudofacebook");
  const imgGoogle = document.getElementById("imagemgoogle");
  const imgFacebook = document.getElementById("imagemfacebook");

  // remove active dos botões
  botoes.forEach(btn => btn.classList.remove("active"));

  // esconde todos
  [google, facebook, imgGoogle, imgFacebook].forEach(el => {
    el.classList.remove("mostrar");
    el.style.display = "none";
  });

  if (opcao === 1) {
    google.style.display = "block";
    imgGoogle.style.display = "flex";
    setTimeout(() => {
      google.classList.add("mostrar");
      imgGoogle.classList.add("mostrar");
    }, 50);
    botoes[0].classList.add("active");
  } else {
    facebook.style.display = "block";
    imgFacebook.style.display = "flex";
    setTimeout(() => {
      facebook.classList.add("mostrar");
      imgFacebook.classList.add("mostrar");
    }, 50);
    botoes[1].classList.add("active");
  }
}

// Ativa o Google por padrão depois que a página toda carrega
window.addEventListener("DOMContentLoaded", () => {
  mostrartexto(1);
});




