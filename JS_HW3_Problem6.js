// Problem 6
let res = [];
function findAllSubsetsOfLength(arr, subsetLength, currSubset, currIndex, i) {

    // base cases
    // found a combination
    if(currIndex === subsetLength) {

        let str = "";
        for(let j = 0; j < subsetLength; j++) {
            str += currSubset[j];
        }

        res.push(str);
        return;
    }

    // no more elements
    if(i >= arr.length) {
        return;
    }

    currSubset[currIndex] = arr[i];
    // include current element
    findAllSubsetsOfLength(arr, subsetLength, currSubset, currIndex + 1, i + 1);

    // do not include current element
    findAllSubsetsOfLength(arr, subsetLength, currSubset, currIndex, i + 1);

}

function helperFunction(arr, subsetLength) {
    let currSubset = [subsetLength];
    currSubset.fill(0);
    let currIndex = 0;
    let i = 0;
    findAllSubsetsOfLength(arr, subsetLength, currSubset, currIndex, i);
}

 helperFunction([1,2,3,4,5], 3);
