const socket = io();
let nomeUsuario = "";

// Função para pegar o nome e começar a conversar
function entrarNoChat() {
    nomeUsuario = document.getElementById("nomeInput").value.trim();

    if (nomeUsuario !== "") {
        document.getElementById("nomeContainer").style.display = "none";  // Esconde a entrada de nome
        document.getElementById("msgInput").style.display = "block";       // Mostra o input para mensagens
    } else {
        alert("Por favor, digite seu nome!");
    }
}

// Função para enviar a mensagem
function enviarMensagem() {
    const input = document.getElementById("msgInput");
    const mensagem = input.value.trim();

    if (mensagem !== "") {
        const horaEnvio = new Date().toLocaleTimeString(); // Formato de hora
        socket.emit("mensagem", { nome: nomeUsuario, mensagem: mensagem, hora: horaEnvio });
        input.value = "";
    }
}

// Escuta as mensagens do servidor
socket.on("mensagem", (data) => {
    const chatBox = document.getElementById("chatBox");
    const div = document.createElement("div");
    div.classList.add("mensagem");
    div.innerHTML = `<strong>${data.nome}</strong> <span class="hora">[${data.hora}]</span>: ${data.mensagem}`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
});
