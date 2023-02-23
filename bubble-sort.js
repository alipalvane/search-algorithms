//* Bubble Sort

function sort(arr) {
  const resultArray = [...arr];
  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer];

    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner];

      if (outerEl > innerEl) {
        resultArray[outer] = innerEl;
        resultArray[inner] = outerEl;

        outerEl = resultArray[outer]
        innerEl = resultArray[inner]
      }
    }
  }

  return resultArray
}

const sortedArray = sort([10, 5, 15, 0, 45]);

console.log(sortedArray);
