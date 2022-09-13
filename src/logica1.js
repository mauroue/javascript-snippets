import "./styles.css";

// Lista de numeros cujo 1 será ordenado pra esquerda.
var list = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];

const onesToTheLeft = (list) => {
  var pos = list.length - 1;
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i] !== 1) {
      let temp = list[pos];
      list[pos] = list[i];
      list[i] = temp;
      pos--;
    }
  }
  return list;
};

document.querySelector(`#app1`).innerHTML =
  `
  <p>[` +
  onesToTheLeft(list) +
  `]<p>`;

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
