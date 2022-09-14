const Contenedor = require("./desafio.js");
const productos = new Contenedor("productos.txt");

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

const ejecutar = async () => {
  /* >>>> poner el nombre del producto a agregar en el metodo save <<<< */
  await productos.save(producto1);
  /* await productos.getAll(); */
  /* >>>> poner la id a buscar , solo numeros  en el metodo getById <<<< */
  /* await productos.getById(); */
  /* >>>> poner la id a eliminar , solo numeros en el metodo deleteById <<<< */
  /* await productos.deleteById(); */
  /* await productos.deleteAll(); */
};

ejecutar();
