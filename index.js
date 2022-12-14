const express = require("express");
const Contenedor = require("./contenedor.js");
const productos = new Contenedor("productos.txt");
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(PORT, () => {
  console.log(
    `Servidor ehttp escuchando en el puerto ${server.address().port}`
  );
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align: center">Bienvenido a mi nueva entrega! 😎</h1>`
  );
});

/* app.get("/productos", (req, res) => {
  const ejecutar = async () => {
    const arrayProductos = await productos.getAll();
    let card = ``;
    arrayProductos.map(
      (item) =>
        (card += `<div style="background-color: black; color: white; text-align: center; height: auto; width: 300px"><h2>Nombre: ${item.title}</h2> <h3>Precio: $${item.price}</h3> <img style="margin-bottom: 10px"height="250px" src="${item.thumbnail}"></div>`)
    );
    res.send(
      `<h1 style="text-align: center">Todos los productos:</h1><section style="display: flex; justify-content: space-around">${card}</section>`
    );
  };
  ejecutar();
});

app.get("/random", (req, res) => {
  const ejecutar = async () => {
    const arrayProductos = await productos.getAll();
    let numero = Math.floor(Math.random() * arrayProductos.length);
    let random = [];
    arrayProductos.map((item, index) => index === numero && random.push(item));
    let card = `<div style="background-color: black; color: white; text-align: center; height: auto; width: 300px"><h2>Nombre: ${random[0].title}</h2> <h3>Precio: ${random[0].price}</h3> <img style="margin-bottom: 10px"height="250px" src="${random[0].thumbnail}"></div>`;
    res.send(
      `<h1 style="text-align: center">Producto al azar:</h1><section style="display: flex; justify-content: space-around">${card}</section>`
    );
  };
  ejecutar();
}); */

app.get("/productos", (req, res) => {
  const ejecutar = async () => {
    try {
      const arrayProductos = await productos.getAll();
      res.json(arrayProductos);
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
  };
  ejecutar();
});

app.get("/random", (req, res) => {
  const ejecutar = async () => {
    try {
      const arrayProductos = await productos.getAll();
      let numero = Math.floor(Math.random() * arrayProductos.length);
      let random = [];
      arrayProductos.map(
        (item, index) => index === numero && random.push(item)
      );
      res.json(random);
    } catch (error) {
      console.log(`Hubo un error: ${error}`);
    }
  };
  ejecutar();
});
