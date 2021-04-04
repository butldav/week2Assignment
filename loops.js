// Print all even numbers 0 - 100.
console.log('Printing even numbers between 0 and 100...')
var loopCount = 0;
while(loopCount <= 100) {
    // Even numbers are numbers divisible by 2.
    if(loopCount % 2 == 0) {
        console.log(loopCount);
    }
    
    loopCount++;
}

// Print every third number starting at 100.
console.log('Printing every third number between 100 and 0...')
var thirdNumCount = 100;
while(thirdNumCount > 0) {    
    console.log(thirdNumCount);
    thirdNumCount = thirdNumCount - 3;

}

// Print every other number from 1 - 100
console.log('Printing every other number from 1 to 100...')
for(i = 1; i <= 100; i = i + 2) {
    console.log(i);
}

// Print every other number from 0 to 100 
for(i = 0; i <= 100; i++) {
    var outputText = i;
    if(i % 3 == 0 && i % 5 == 0) {
        outputText = 'HelloWorld';
    } else if(i % 3 == 0 && i % 5 != 0) {   // Print Hello if number divisible by 3
        outputText = 'Hello';
    } else if(i % 5 == 0 && i % 3 != 0) {   // Print World if number divisible by 5
        outputText = 'World';
    } else {
        outputText = i;
    }
    console.log(outputText);
}