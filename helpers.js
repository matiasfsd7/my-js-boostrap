export const renderProducts = (array, id) => {
  id.innerHTML = " ";
  array.forEach((data) => {
    const card = document.createElement("div");
    card.className = "card w-25 p-3 m-3 shadow"; // Preguntar el colum para que quede prolijo
    card.innerHTML = `
  <!--AQUI BORRE EL DIV QUE ENCERRABA TODO EL CONTENIDO PORQUE NO HACIA FALTA YA QUE AHORA LO ENCERRARA EL DIV QUE SE CREA ANTES-->
  <article class= "card h-100">
  <h6 class="pt-2 px-2"><span class="badge bg-${
    data.category === "electronics" ? "secundary" : "primary"
  } text-uppercase">${data.category}</span></h6>
  <img src=${data.image} class="objet-fit-contain pt-2 px-2" alt=${
      data.title
    } style="height: 300px">
  <div class="card-body">
    <h6 class="card-title">${data.title}</h6>
    </div>
    <div class="card-footer d-flex flex-column">
    <p class="h5 text-end">${data.price}</p>

    <button class="btn btn-primary" onClick="alert("comprado!");">COMPRAR!</button>
  </div>
  </article>
`;
    console.log(card);
    catalogue.appendChild(card);
  });
};
// const pillTheme = (category) => {
//   switch (category) {
//     case "electronics":
//       return "primary";
//   }
// };
