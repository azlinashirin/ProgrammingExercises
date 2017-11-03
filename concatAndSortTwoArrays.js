var sortFunction = require("./SelectionSort.js");

function concatAndSortingArrays(array1,array2){
    var newArray = array1.concat(array2);
    return sortFunction.selectionSort(newArray); 
}

concatAndSortingArrays(array1,array2);
