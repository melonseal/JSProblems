/**
 * Created by Sarah Blankespoor on 9/21/17. JavaScript problems 11-20.
 */

/* this function takes an array of numbers and returns true if 6 is the first or last,
false if 6 is not the first or last number.
 */
function firstLast6(numbers) {
    if(numbers[0] == 6 || numbers[numbers.length - 1] == 6){
        return(true);
    }else{
        return(false);
    }
}

/* this function takes an array of two numbers and returns true if a 2 or 3 is present.
otherwise, it returns false.
 */
function has23(setOfTwo) {
    if(setOfTwo[0] == 2 || setOfTwo[0] == 3){
        return(true);
    }else if(setOfTwo[1] == 2 || setOfTwo[1] == 3){
        return(true);
    }else{
        return(false);
    }
}

/* this function takes an array of three numbers and, if there is a 3 directly after a 2,
returns the array with a zero in place of the three. otherwise, it returns the array.
 */
function fix23(setOfThree) {
    if(setOfThree[0] == 2 && setOfThree[1] == 3){
        setOfThree[1] = 0;
        return(setOfThree);
    }else if(setOfThree[1] == 2 && setOfThree[2] == 3){
        setOfThree[2] = 0;
        return(setOfThree);
    }else{
        return(setOfThree);
    }
}

/* given a string, this function counts the number of words ending in y or z in
the string.
 */
function countYZ(someWords) {
    var numberOfYZ = 0;
    for(var i = 0; i < someWords.length; i++){
        if(someWords.substring(i - 1, i + 1) == "y " || someWords.substring(i - 1, i + 1) == "z " ||
            someWords.substring(i - 1, i + 1) == "Z " || someWords.substring(i - 1, i + 1) == "Y "){
            numberOfYZ++;
        }
    }
    if(someWords[someWords.length - 1] == "y" || someWords[someWords.length - 1] == "z" ||
        someWords[someWords.length - 1] == "Y" || someWords[someWords.length - 1] == "Z"){
        numberOfYZ++;
    }
    return(numberOfYZ);
}

/* given two strings, this function returns true if either of the strings appears at the very end
of the other string. this function is not case sensitive.
 */
function endOther(first, second) {
    var newFirst = first.toLowerCase();
    var newSecond = second.toLowerCase();
    if(newFirst.substring((newFirst.length - newSecond.length), newFirst.length) == newSecond){
        return(true);
    }else if(newSecond.substring((newSecond.length - newFirst.length), newSecond.length) == newFirst){
        return(true);
    }else{
        return(false);
    }
}

/* given a word, if there are *'s present, this function removes the star and the characters
adjacent to it.
 */
function starOut(givenWord) {
    var newStarOut = givenWord;
    for(var i = 0; i < (newStarOut.length + 1); i++){
        if(newStarOut[i - 1] == "*"){
            if(newStarOut[i + 2] == "*"){
                newStarOut = newStarOut.substring(i - 10, i - 2) + newStarOut.substring(i + 4, newStarOut.length);
            }else if(newStarOut[i + 1] == "*"){
                newStarOut = newStarOut.substring(i - 10, i - 2) + newStarOut.substring(i + 3, newStarOut.length);
            }else if(newStarOut[i] == "*"){
                newStarOut = newStarOut.substring(i - 10, i - 2) + newStarOut.substring(i + 2, newStarOut.length);
            }else{
                newStarOut = newStarOut.substring(i - 10, i - 2) + newStarOut.substring(i + 1, newStarOut.length);
            }
        }
    }
    return(newStarOut);
}

/* this function takes a string and returns the string that is between the first and last
appearance of "bread" in the given string. it returns an empty string if two pieces of bread
are not present.
 */
function getSandwich(inferiorSandwich) {
    var sandwichContents = inferiorSandwich;
    var breadCount = 0;
    var firstBreadLocation = 0;
    var secondBreadLocation = 0;
    for(var i = 0; i < inferiorSandwich.length; i++){
        if(inferiorSandwich.substring(i - 1, i + 4) == "bread"){
            breadCount++;
            if(breadCount == 1){
                firstBreadLocation = firstBreadLocation + (i + 4);
                break;
            }
        }
    }

    for(var back = inferiorSandwich.length; back > (firstBreadLocation - 1); back--){
        if(inferiorSandwich.substring(back - 4, back + 1) == "bread"){
            breadCount++;
            if(breadCount == 2){
                secondBreadLocation = secondBreadLocation + (back - 4);
                break;
            }
        }
    }
    if(firstBreadLocation == 0 || secondBreadLocation == 0){
        return("");
    }
    return(sandwichContents.substring(firstBreadLocation, secondBreadLocation));
}

/* this function takes an array of numbers and determines whether there is a point
at which the sum of the numbers before that point is equal to the sum of the numbers after it.
it returns true or false.
 */
function canBalance(setOfNumbers) {
    var canItBalance = false;
    var sumSoFar = 0;
    var sumRemaining = 0;
    var totalSum = 0;
    for(var i = 0; i < setOfNumbers.length; i++){
        totalSum = totalSum + setOfNumbers[i];
    }
    for(var j = 0; j < setOfNumbers.length; j++){
        sumSoFar = sumSoFar + setOfNumbers[j];
        sumRemaining = totalSum - sumSoFar;
        if(sumSoFar == sumRemaining){
            canItBalance = true;
            break;
        }
    }
    return(canItBalance);
}

/* this function, given an array, counts the number of clumps in the array. clumps are two
or more numbers repeated.
 */
function countClumps(someMoreNumbers) {
    var numberOfClumps = 0;
    for(var i = 0; i < someMoreNumbers.length; i++){
        if(someMoreNumbers[i] == someMoreNumbers[i + 1]){
            numberOfClumps++;
            for(var k = i; k < someMoreNumbers.length; k++){
                if(someMoreNumbers[k + 1] == someMoreNumbers[k + 2]){
                    i++;
                }else{
                    break;
                }
            }
        }
    }
    return(numberOfClumps);
}

/* given three numbers, this function determines whether they are evenly spaced, then returns
true if they are, false if they aren't.
 */
function evenlySpaced(one, two, three){
    var organizedInput = [one, two, three];
    organizedInput.sort(function(a, b){return a - b});
    if((organizedInput[2] - organizedInput[1]) == (organizedInput[1] - organizedInput[0])){
        return(true);
    }else{
        return(false);
    }
}

function tester2() {

    document.getElementById("output11").innerHTML = firstLast6([6, 6, 7, 3]);
    document.getElementById("output12").innerHTML = has23([2, 5]);
    document.getElementById("output13").innerHTML = fix23([1, 2, 3]);
    document.getElementById("output14").innerHTML = countYZ("ack why yxzzz");
    document.getElementById("output15").innerHTML = endOther("okayAbc", "abC");
    document.getElementById("output16").innerHTML = starOut("l*t");
    document.getElementById("output17").innerHTML = getSandwich("sadabreadpainbreadlal");
    document.getElementById("output18").innerHTML = canBalance([1, 1, 1, 2, 1]);
    document.getElementById("output19").innerHTML = countClumps([1, 2, 1, 1, 4, 4]);
    document.getElementById("output20").innerHTML = evenlySpaced(24, 52, 22);

}