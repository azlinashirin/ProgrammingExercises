function pigLatinTranslate(inputString){
    var pigLatin = "";
    var ch;
    var arrString = inputString.split(" ");

    for(var i=0;i<arrString.length;i++){
        ch = arrString[i].charAt(0).toLowerCase();
        arrString[i]= arrString[i].substr(1)+ch+"ay";
        pigLatin = arrString.join(" ");
    }
    return pigLatin;
}

pigLatinTranslate("Give an input string");
