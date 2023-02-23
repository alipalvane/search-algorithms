//* Linear Search Algorithm

function findElement(arr, element) {
  let index = 0;
  for (const item of arr) {
    if (item === element) {
      return index;
    }
    index++;
  }
}

const numbers = [10, 5, 0, 51, 30];

console.log(findElement(numbers, 0));
