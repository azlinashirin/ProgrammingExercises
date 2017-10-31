function arrayOfNumbersDigits(input){
    var numberString = input.toString();
    return Array.from(numberString).map(Number);
}

arrayOfNumbersDigits(123);
