// AQUI ELIMINE EL IMPORT PORQUE NO HACE FALTA YA QUE ESTAS IMPORTANDO LOS ESTILOS EN EL ARCHIVO CSS
import { MOCKDATA } from "./mock.js";
import { renderProducts } from "./helpers.js";

//DEFINO CONSTANTES
const catalogue = document.getElementById("catalogue");
const products = MOCKDATA.sort((a, b) => b.price - a.price);

const asc = document.getElementById("asc");
const desc = document.getElementById("desc");
//logica botones asc and desc
asc.addEventListener("click", () => {
  asc.className = "btn btn-success disable";
  desc.className = "btn btn-online-success ";
  renderProducts(products.sort((a, b) => a.price - b.price)), catalogue;
});
desc.addEventListener("click", () => {
  desc.className = "btn btn-success disable";
  asc.className = "btn btn-online-success ";
  renderProducts(products.sort((a, b) => b.price - a.price)), catalogue;
});

renderProducts(products, catalogue);
