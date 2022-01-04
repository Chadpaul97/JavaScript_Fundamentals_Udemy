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