var swappingTwoNumbers = function(array,i,j){
    var temp =0;

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}

module.exports = {swappingTwoNumbers};
