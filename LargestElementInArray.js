function largestElement(array){
    var largest = 0;
    
    for(var i = 0;i<array.length;i++){
        
        if(array[i]>largest){
        largest = array[i];
        }
}
      return largest;
}

largestElement(array);
