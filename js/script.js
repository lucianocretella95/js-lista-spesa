const spesa = document.getElementById("item");
const lista = ["verdure", "latte", "pane", "pasta", "legumi", "uova"];
for (let i = 0; i < lista.length; i++) {
  const element = lista[i];
  console.log(i, element);
  spesa.innerHTML += `<li>${i, element}</li>`;
}

// let i = 0;
// while (i < lista.length) {
//   const element = lista[i];
//   console.log(i, element);
//   i++;
// }
