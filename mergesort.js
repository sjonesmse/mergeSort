function split(wholeArray) {
	/* your code here to define the firstHalf and secondHalf arrays */

	const midPoint = Math.floor(wholeArray.length / 2);
	const firstHalf = wholeArray.slice(0, midPoint);
	const secondHalf = wholeArray.slice(midPoint);

	return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
	const returnArr = [];
	let firstIndex = 0;
	let secondIndex = 0;

	while (firstIndex < arr1.length && secondIndex < arr2.length) {
		if (arr1[firstIndex] < arr2[secondIndex]) {
			returnArr.push(arr1[firstIndex]);
			firstIndex++;
		} else {
			returnArr.push(arr2[secondIndex]);
			secondIndex++;
		}
	}
	return returnArr.concat(
		arr1.slice(firstIndex).concat(arr2.slice(secondIndex)),
	);
}
