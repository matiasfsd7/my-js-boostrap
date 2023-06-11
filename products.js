import { MOCKDATA } from "./mock.js";
const paramersId = new URL(window.location.href).searchParams.get("id");
const product = MOCKDATA.find((data) => data.id === parseInt(paramersId));

console.log(product);
