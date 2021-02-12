import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

// Criando a porta que a nossa aplicação deve rodar
const PORT = process.env.PORT || 8000;
const app = express();

// Criando a estrutura para a nossa aplicação rode no servidor, na pasta build, onde vai rodar a página index.html. Caso dê algum erro vamos receber uma messagem avisando que ocorreu um erro na hora da renderização
app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Aconteceu algum erro para renderizar a página");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    );
  });
});
// Passando o caminho da página estática
app.use(express.static(path.resolve(__dirname, '..', 'build')))

// Fazendo a ligação do servidor
app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});
