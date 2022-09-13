//Variavel de busca
const numSum = 17;

const sum = [1, 15, 2, 7, 2, 5, 7, 1, 4];

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return true;
    }
  }
  return false;
};

document.getElementById(`app3`).innerHTML =
  `<p>` + twoSum(sum, numSum) + `</p>`;
