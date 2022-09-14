const Contenedor = require("./contenedor.js");
const productos = new Contenedor("productos.txt");

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
