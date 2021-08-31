// Problem 5
function countMissingNumbers(arr) {

	let arrLength = arr.length;
	let minNumber = Infinity;
	let maxNumber = -Infinity;

	for(let i = 0; i < arrLength ; i++) {
		maxNumber = Math.max(arr[i], maxNumber);
		minNumber = Math.min(arr[i], minNumber);
	}

	let totalCount = maxNumber - minNumber + 1;
	return totalCount - arrLength;
}
let arr = [1,2,3,9];

countMissingNumbers(arr);