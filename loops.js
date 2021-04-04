
var loopCount = 0;
while(loopCount <= 100) {
    
    if(loopCount % 2 == 0) {
        console.log(loopCount);
    }
    
    loopCount++;
}

var thirdNumCount = 100;
while(thirdNumCount > 0) {    
    console.log(thirdNumCount);
    thirdNumCount = thirdNumCount - 3;

}

for(i = 1; i <= 100; i = i + 2) {
    console.log(i);
}

for(i = 1; i <= 100; i++) {
    var outputText = '';

    if(i % 3 == 0) {
    outputText = 'Hello';
    }

    if(i % 5 == 0) {
        outputText += 'World';
    }

    if(i % 3 && i % 5) {
        outputText = i;
    }

    console.log(outputText);
}