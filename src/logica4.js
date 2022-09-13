// Array que realiza a busca de numeros faltantes e preenche
const givenArray = [9, 2, 3, 1, 4];

var missingNum = [];
const maxNum = Math.max(...givenArray);

for (let i = 0; i < maxNum; i++) {
  if (!givenArray.includes(i)) {
    missingNum.push(i);
  }
}

const wholeArray = [...givenArray, ...missingNum];

document.getElementById(`app4`).innerHTML =
  `<p>Unsorted</p><p>` +
  wholeArray +
  `</p>
  <p>Sorted</p><p>` +
  wholeArray.sort((a, b) => a - b) +
  `</p>
  `;
