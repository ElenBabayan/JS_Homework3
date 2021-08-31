// Problem1
function flattenNestedArrays2(arr) {

    return arr.reduce(function (arr1, arr2) {

      return arr1.concat( Array.isArray(arr2) ? flattenNestedArrays2(arr2) : arr2);

    }, []);

  }

  flattenNestedArrays2([1, 2, [3, 4, [5, 6]]]);

  function concatArrays(arr1, arr2) {

    let arr3 = [];

    for(let i = 0; i < arr1.length; i++) {
        arr3[i] = arr1[i];
    }

    let index = arr1.length;

    for(let j = 0; j < arr2.length; j++) {
        arr3[index] = arr2[j];
        index++;
    }

    return arr3;
}