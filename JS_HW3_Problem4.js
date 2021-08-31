// Problem 4
function contiguousSubStrings(str, n) {
	for(let i = 0; i + n - 1 < str.length; i++) {
		console.log(str.substr(i, n))
	}
	
}

contiguousSubStrings("abcdfghz", 7);