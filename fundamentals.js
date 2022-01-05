
// PART 1
let country = "Spain";
let continent = "Europe";
let population = 10;

console.log(country);
console.log(continent);
console.log(population);

// PART DATA TYPES

const isIsland = false
let language

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language)

//LECTURE: let, const and var

language = "Spanish";
// const country = "Spain";
// const continent = "Europe";
// const isIsland = false;
// isIsland = true

// LECTURE: Basic Operators

console.log(population / 2)
population++;
console.log(population);
console.log(population > 6);
console.log(population < 33)

const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1)


// LECTURE: Strings and Template Literals

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
if (population > 33) {
    console.log(`${country} is above average`)
} else {
    console.log(`${country} is ${33 - population} millon below average`)
}

// LECTURE: Type Conversion and Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Equality Operators: == vs. ===

let numNeighbours = prompt('How many neighbour countries does your countryhave?')
// let numNeighbours = 1
// if (numNeighbours === 1){
if (numNeighbours == 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1) {
    console.log('More than 1 border in case')
} else {
    console.log('No borders')
}

//LECTURE: Logical Operators

if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}