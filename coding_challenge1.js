
//Coding Challenge 1
const heightJohn = 1.95
const massJohn = 92

const heightMark = 1.69
const massMark = 78

const BMIMARK = massMark / heightMark ** 2
const BMIJOHN = massJohn / (heightJohn * heightJohn)
const markHigherBMI = BMIMARK > BMIJOHN
console.log(BMIJOHN)
console.log(BMIMARK)
console.log(markHigherBMI)

//Coding Challenge 2
if (BMIJOHN < BMIMARK){
    console.log("Mark's BMI is higher than John's")
    console.log("Mark's BMI ", BMIMARK)
    console.log("John's BMI ", BMIJOHN)
}else{
    console.log("John's BMI is higher than Mark's")
    console.log("John's BMI ", BMIJOHN)
    console.log("Mark's BMI ", BMIMARK)
}

//Coding Challenge 3

const dolphinsScore = [96 + 108 + 89] /3;
const koalasScore = [88 + 91 + 110] /3 ; 
console.log(dolphinsScore)
console.log(koalasScore)
if( dolphinsScore < koalasScore){
    console.log("Koalas Win by " + (koalasScore - dolphinsScore  ))
}else{
    console.log("Dolphins Win by " + (dolphinsScore - koalasScore))
}

const dolphinsScore1 = [97 + 112 + 101] /3;
const koalasScore1 = [109 + 95 + 123] /3;
console.log(dolphinsScore1);
console.log(koalasScore1);

if (dolphinsScore1 < koalasScore1 && koalasScore1 >= 100){
    console.log("Koalas Win");
} else if(koalasScore1 < dolphinsScore1 && dolphinsScore1 >= 100){
console.log("Dolphins Win");
} else if(dolphinsScore1 === koalasScore1 && dolphinsScore1 >= 100 && koalasScore1 >= 100){
console.log("Both win!!");
}else{
    console.log("No one Wins ☹")
}

//Coding Challenge 4