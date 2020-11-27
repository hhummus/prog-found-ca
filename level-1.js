// Question 1
var dinner = 'tomato soup';
    console.log(dinner)

// Question 2
    var person = {
        hair: 'brown',
        married: true 
    };

// Question 3
var outOfStock = true;

if(outOfStock === true){
    console.log('Out of Stock')
}else{
    console.log('In Stock')
}

// Question 4
var weekdays = [1,2,3,4,5];
    
for(i = 0; i < weekdays.length; i++){
    console.log(weekdays.length) };

// Question 5 
for(i = 15; i <= 25; i++){
    console.log(i) };


// Question 6 ---  Which of these are correct / the preferred way? 
for(i = 15; i <= 25; i++){
    if(i === 20)console.log(i)};


for(i = 15; i <= 25; i++){
    if(i === 20){
    console.log(i)}};



// Question 7
var pets = [
    {
        name: 'Mike',
        age: 1,
        fur: true
    },

    {
        name:'Kitty',
        age: 12,
        fur: false
    }
];

for(var i = 0; i < pets.length; i++) {
    console.log(pets[i].age)
    console.log(pets[i].fur)
};



// Question 8
function whatIDontLike(dontLike){
    console.log("I don't like " + dontLike);
};

whatIDontLike('meatballs')


// Question 9 
function mathProblem(argument1,argument2){
    console.log(argument2 - argument1)
};

mathProblem(100,300);

// Question 10
var emptyArray = []

function notEmptyArray(argument){
 console.log(emptyArray = [argument])
};

notEmptyArray('Whats up??')

