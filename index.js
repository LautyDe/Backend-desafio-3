const express = require("express");

const app = express();

const PORT = 8080;

const fs = require("fs");

const productos = [
  {
    title: "Silla Gamer",
    price: 60000,
    thumbnail:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/720/526/products/diseno-sin-titulo-5121-bd311cff4d158548d516372654110148-1024-1024.jpg",
    id: 1,
  },
  {
    title: "Joystick PS5",
    price: 25000,
    thumbnail:
      "https://images.fravega.com/f1000/a23c2e9cbe114eca833fc5f7288457fc.jpg",
    id: 2,
  },
  {
    title: "Auriculares PS5",
    price: 42000,
    thumbnail:
      "https://arsonyb2c.vtexassets.com/arquivos/ids/348062/PS5_WHS_Pshot_A.jpg?v=637363806123470000",
    id: 3,
  },
];

const server = app.listen(PORT, () => {
  console.log(
    `Servidor ehttp escuchando en el puerto ${server.address().port}`
  );
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

app.get("/", (req, res) => {
  res.send({ mensaje: "Hola mundo!" });
});

app.get("/productos", (req, res) => {
  res.send("holaa");
});

const producto1 = {
  title: "Silla Gamer",
  price: 60000,
  thumbnail:
    "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/720/526/products/diseno-sin-titulo-5121-bd311cff4d158548d516372654110148-1024-1024.jpg",
};

const producto2 = {
  title: "Joystick PS5",
  price: 25000,
  thumbnail:
    "https://images.fravega.com/f1000/a23c2e9cbe114eca833fc5f7288457fc.jpg",
};

const producto3 = {
  title: "Auriculares PS5",
  price: 42000,
  thumbnail:
    "https://arsonyb2c.vtexassets.com/arquivos/ids/348062/PS5_WHS_Pshot_A.jpg?v=637363806123470000",
};
