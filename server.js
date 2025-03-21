const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("Usuário conectado:", socket.id);

    socket.on("mensagem", (data) => {
        io.emit("mensagem", data); // Envia a mensagem para todos com nome e hora
    });

    socket.on("disconnect", () => {
        console.log("Usuário desconectado:", socket.id);
    });
});

server.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
