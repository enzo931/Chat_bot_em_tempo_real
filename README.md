Chat em Tempo Real
Este é um simples chat em tempo real desenvolvido com JavaScript, Node.js, Socket.io, e HTML/CSS. O objetivo deste projeto é permitir que múltiplos usuários interajam em um chat, enviando mensagens com seu nome de usuário e horário de envio.

Funcionalidades
Nome de usuário: O usuário pode digitar seu nome para ser exibido junto à mensagem.
Envio de mensagens: O usuário pode enviar mensagens que são exibidas em tempo real para todos os participantes.
Horário das mensagens: Cada mensagem é acompanhada pelo horário exato em que foi enviada.
Design Responsivo e Interativo: O site possui um layout moderno com animações e transições suaves, além de suporte para dispositivos móveis.
Tecnologias Usadas
Node.js: Framework do JavaScript para rodar o servidor.
Socket.io: Para comunicação em tempo real entre cliente e servidor.
HTML/CSS: Para a estrutura e estilo da página.
JavaScript: Para interatividade no lado do cliente e do servidor.
Como Rodar o Projeto
1. Clonar o Repositório
bash
Copiar
Editar
git clone https://github.com/seuusuario/chat-em-tempo-real.git
2. Instalar Dependências
No diretório do projeto, instale as dependências usando o npm:

bash
Copiar
Editar
cd chat-em-tempo-real
npm install
3. Rodar o Servidor
Para iniciar o servidor, use o comando:

bash
Copiar
Editar
npm start
Isso vai iniciar o servidor na porta 3000, e você poderá acessar o chat em http://localhost:3000.

Estrutura do Projeto
bash
Copiar
Editar
chat-em-tempo-real/
│
├── public/
│   ├── index.html      # Página principal com o chat
│   ├── script.js       # Lógica de envio e recebimento de mensagens
│   └── styles.css      # Estilo do chat
│
├── server.js           # Arquivo principal do servidor Node.js
└── package.json        # Dependências do projeto
Como Funciona
O usuário digita seu nome no campo de entrada ao iniciar o chat.
Uma vez que o nome for preenchido, o chat será liberado e as mensagens podem ser enviadas.
As mensagens, juntamente com o nome do usuário e o horário de envio, são compartilhadas com todos os participantes do chat em tempo real, usando Socket.io.
O layout e a animação são feitos com CSS, proporcionando uma experiência visual mais agradável.
