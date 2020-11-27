// Question 1
for(i = 0; i <=25; i+=2){
    console.log(i) };


// Question 2
function iAmaFunction(){
    console.log('I am a function')
};

var innerFunction = iAmaFunction;

function outerFunction(oneArgument){
oneArgument()
}

outerFunction(innerFunction);
