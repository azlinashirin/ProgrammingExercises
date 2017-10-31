function squaringNumbers(numberCount){
    var squareNumberArray= [];
    var number = 0;
    var squares = 0;
    
    for(var i=0;i<numberCount;i++){
        number = number+1;
        squares = Math.pow(number,2);
        squareNumberArray.push(squares);
    }
    return squareNumberArray;
}

squaringNumbers(2);
