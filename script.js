/**
 * Created by h205p2 on 9/15/17.
 */
/* this function calculates whether you can sleep in based on whether it is a
weekday, vacation, or neither
 */
function sleep_in(weekday, vacation) {
    if(weekday.length == 0 || vacation.length == 0){
        return(false);
    }else if(vacation == true){
        return(true);
    }else if(weekday == false){
        return(true);
    }else if(weekday == true && vacation == false){
        return (false);
    }else if(weekday == 'true' && vacation == 'false'){
        return(false);
    }
}

/* this function determines whether you are in trouble. you are in trouble
if both monkeys are smiling or if neither monkey is smiling.
 */
function monkey_trouble(a_smile, b_smile) {
    if(a_smile == true && b_smile == true){
        return(true);
    }else if(a_smile == false && b_smile == false){
        return(true);
    }else if(a_smile == true || b_smile == true){
        return(false);
    }else{
        return(false);
    }
}

// this function will repeat a string you feed it n times
function string_times(string, n) {
    var longerString = string;
    if(n > 0){
        for (var i = 0; i < (n - 1); i++) {
            longerString = longerString + string;
        }
        return(longerString);
    }else if(n == 0){
        return("");
    }
}

// this function will repeat the first 3 letters of a string n times
function front_times(word, n) {
    var longerFront = word.substring(0, 3);
    if(n > 0){
        for (var i = 0; i < (n - 1); i++) {
            longerFront = longerFront + word.substring(0, 3);
        }
        return(longerFront);
    }else if(n == 0){
        return("");
    }
}

//  this function returns every other character of a string
function string_bits(word) {
    if(word.length > 0){
        var everyOther = word.substring(0, 1);
        for(var i = 0; i < (word.length - 1); i = i + 2){
            everyOther = everyOther + word.substring((i + 2), (i + 3));
        }
        return(everyOther);
    }else if(word.length == 0){
        return("");
    }
}

/* this function determines if you get no ticket (0, less than or equal to 60 mph),
a small ticket (1, 61-80 mph), or a large ticket (2, 81 + mph). if it's your birthday,
you get 5 extra miles per hour before each ticket threshold.
 */
function caughtSpeeding(speed, birthday) {
    if(!birthday){
        if(speed <= 60){
            return(0);
        }else if(61 <= speed && speed <= 80){
            return(1);
        }else if(speed >= 81){
            return(2);
        }
    }else if(birthday) {
        if(speed <= 65){
            return (0);
        } else if (66 <= speed && speed <= 85) {
            return (1);
        } else if(speed >= 86) {
            return (2);
        }
    }
}

/* this function takes a number and returns FizzBuzz if the number is divisible
by both 5 and 3, Fizz if it's divisible by 3, Buzz if it's divisible
by 5, and the number with an exclamation point if it's not divisible by 3 or 5
 */
function fizz_buzz(number){
    if(number % 3 == 0 && number % 5 == 0){
        return("FizzBuzz");
    }else if(number % 3 == 0){
        return("Fizz");
    }else if(number % 5 == 0){
        return("Buzz");
    }else{
        return(number + "!");
    }
}

/* this function takes the number of tea and candy and returns whether it's
a bad party (0, tea or candy is less than 5), a great party (2, more than
2x as much of one as the other), or a good party (1, both are greater than
or equal to 5).
 */
function teaParty(tea, candy){
    if(tea < 5 || candy < 5){
        return(0);
    }else if(tea >= candy * 2 || candy >= tea * 2){
        return(2);
    }else if(tea >= 5 && candy >= 5){
        return(1);
    }
}

/* this function takes two numbers and returns whichever number is
closest to 21 without going over.
 */
function blackjack(first, second){
    if(first > 21 && second > 21) {
        return(0);
    }else if(first > 21) {
        return(second);
    }else if(second > 21){
        return(first);
    }else if(first >= second){
        return(first);
    }else if(second >= first){
        return(second);
    }
}

/* this function takes three numbers and returns the sum, but any
repeated numbers do not count towards the sum.
 */
function loneSum(first, second, third){
    if(first == second && first == third){
        return(0);
    }else if(first == second){
        return(third);
    }else if(second == third){
        return(first);
    }else if(first == third){
        return(second);
    }else{
        return(first + second + third);
    }
}

function tester() {

    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output2").innerHTML = monkey_trouble(true, false);
    document.getElementById("output3").innerHTML = string_times('okay ' , 12);
    document.getElementById("output4").innerHTML = front_times('okay again' , 12);
    document.getElementById("output5").innerHTML = string_bits('okay again');
    document.getElementById("output6").innerHTML = fizz_buzz(22);
    document.getElementById("output7").innerHTML = caughtSpeeding(93, true);
    document.getElementById("output8").innerHTML = teaParty(7, 6);
    document.getElementById("output9").innerHTML = blackjack(24, 18);
    document.getElementById("output10").innerHTML = loneSum(24, 18, 18);

}
