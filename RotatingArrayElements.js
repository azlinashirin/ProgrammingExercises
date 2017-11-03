function rotatingArrayElements(array,rotateBy){
    var rotatedElement=0;

    if(rotateBy<=array.length){

        for(var i=0;i<array.length,rotateBy>0;i++){
            rotatedElement = array.shift();
            array.push(rotatedElement);
            rotateBy--;
        }
        return array; 
    }
    else{
        return "Index value out of Array length";
    }
}

rotatingArrayElements(array,number);
