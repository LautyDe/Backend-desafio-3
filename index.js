const express = require("express");
const Contenedor = require("./contenedor.js");
const productos = new Contenedor("productos.txt");
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(
    `Servidor ehttp escuchando en el puerto ${server.address().port}`
  );
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (req, res) => {
  res.send("<h1>Bienvenido a mi nueva entrega! 😎</h1>");
});

app.get("/productos", (req, res) => {
  const ejecutar = async () => {
    const arrayProductos = await productos.getAll();
    let card = ``;
    arrayProductos.map(
      (item) =>
        (card += `<h1>Nombre: ${item.title}</h1>/n <h2>Precio: ${item.price}</h2>/n <img src"${item.thumbnail}">`)
    );
    res.send(card);
  };
  ejecutar();
});

app.get("/random", (req, res) => {
  const ejecutar = async () => {
    const arrayProductos = await productos.getAll();
    let numero = Math.floor(Math.random() * arrayProductos.length);
    let random = [];
    arrayProductos.map((item, index) => index === numero && random.push(item));
    let card = `<h1>Nombre: ${random[0].title}</h1>/n <h2>Precio: ${random[0].price}</h2>/n <img src="${random[0].thumbnail}">`;
    res.send(card);
  };
  ejecutar();
});
