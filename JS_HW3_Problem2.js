// Problem 2
function sumOfDigits(num) {

    if(num % 9 === 0) {
        return 9;
    }
    else {
        return num % 9;
    }
}

sumOfDigits(9999);

// 2nd solution
function sumOfDigitsRecursion(num) {

    if( num <= 9 && num >= 0) {
        return num;
    }
    else {
        let temp = num;
        let sum = 0;
        while(temp > 0) {
            sum += Math.floor(temp % 10);
            temp = Math.floor(temp / 10);
        }
        return sumOfDigitsRecursion(sum);
    }
}

sumOfDigitsRecursion(999999);