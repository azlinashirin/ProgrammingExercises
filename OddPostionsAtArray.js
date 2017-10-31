function elementsAtOddPositions(array){
    var oddPositionsArray =[];
    
    for(var i= 0;i<array.length;i++){
        
        if(i%2!=0){
            oddPositionsArray.push(array[i]);
        }
    }
    return oddPositionsArray;
}

elementsAtOddPositions(array);
