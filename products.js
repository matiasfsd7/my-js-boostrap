import { MOCKDATA } from "./js";
const paramers = new URL(window.location.href).searchParams.get("id");
const products = MOCKDATA.find((data) => data.id === parseInt(paramersId));
console.log(products);
