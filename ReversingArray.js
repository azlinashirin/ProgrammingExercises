function reversingArray(array){
    var newArray = new Array();
    var n = array.length-1;
    
    for(var i=array.length-1;i>=0;i--){
        var element = array[i];
        newArray.push(element);
    }
    return newArray;
}

reversingArray(array);
