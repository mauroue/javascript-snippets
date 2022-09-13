import * as tree from "./tree.json";

// Variavel que realiza a busca na arvore. Opcoes: maçã, morango,
// goiaba, limão, pêra, abacaxi, laranja, banana e cebola
const searchVar = "pêra";

const search = (node, value, str = node.data) => {
  if (!node) return "";
  if (node.data === value) return str;
  return (
    search(node.left, value, str + " => " + node.left.data) ||
    search(node.right, value, str + " => " + node.right.data)
  );
};

document.getElementById(`app2`).innerHTML =
  `<p>` + search(tree, searchVar) + `</p>`;
