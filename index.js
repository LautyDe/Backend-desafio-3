const express = require("express");

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(
    `Servidor ehttp escuchando en el puerto ${server.address().port}`
  );
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (req, res) => {
  res.send({ mensaje: "Hola mundo!" });
});

app.get("/", (req, res) => {
  res.send({ mensaje: "Hola mundo!" });
});
