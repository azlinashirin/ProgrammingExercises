var swappingfunction = require("./SwappingTwoNumbers.js");
var selectionSort = function(array){
    var minValue = 0;
    var index = 0;

    for(var i=0;i<array.length;i++){
        minValue = array[i];
        index = i;

        for(var j=i+1;j<array.length;j++){ 

            if(minValue > array[j]){
                minValue = array[j];
                index = j;
            } 
        }
        swappingfunction.swappingTwoNumbers(array,i,index);
    }
    return array;
}

selectionSort(array);

module.exports = {selectionSort};
