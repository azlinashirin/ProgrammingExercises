function fibanacciSeries(numberCount){
    var firstElement = -1;
    var secondElement = 1;
    var seriesNumber = 0;
    var fibnocciArray =[];
    
    for(var i=1;i<=numberCount;i++){
        seriesNumber = firstElement+secondElement;
        fibnocciArray.push(seriesNumber);
        firstElement = secondElement;
        secondElement = seriesNumber;
    }
    return fibnocciArray;
}

fibanacciSeries(10);
