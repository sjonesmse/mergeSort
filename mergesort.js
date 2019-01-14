function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */

  let midPoint = Math.floor(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midPoint);
  let secondHalf = wholeArray.slice(midPoint);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let returnArr = [];
  let firstIndex = 0;
  let secondIndex = 0;

  while (firstIndex < arr1.length && secondIndex < arr2.length) {
    debugger;
    if (arr1[firstIndex] < arr2[secondIndex]) {
      returnArr.push(arr1[firstIndex]);
      firstIndex++;
    } else {
      returnArr.push(arr2[secondIndex]);
      secondIndex++;
    }
  }
  return returnArr;
}
