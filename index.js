var isHotOutside = true;
console.log('Is it hot outside? - ' + isHotOutside);

var isWeekday = false;
console.log('Is it a week day? - ' + isWeekday);

var hasMoneyInPocket = true;
console.log('Do I have money in my pocket? - ' + hasMoneyInPocket);

var costOfMilk = 2.49;
console.log('Cost of milk: $' + costOfMilk);

var moneyInWallet = 40;
console.log('Money in wallet: $' + moneyInWallet);

var thirstLevel = 5;
console.log('Thirst level: ' + thirstLevel);

var shouldBuyIceCream = false;
if(isHotOutside && hasMoneyInPocket) {
    shouldBuyIceCream = true;
}
console.log('Should I buy ice cream? - ' + shouldBuyIceCream);

var willGoSwimming = false;
if(isHotOutside && isWeekday == false){
    willGoSwimming = true;
}
console.log('Will I go swimming? - ' + willGoSwimming);

var isAGoodDay = false;
if(isHotOutside && hasMoneyInPocket && isWeekday == false){
    isAGoodDay = true;
}
console.log('Is today a good day? - ' + isAGoodDay);

var willBuyMilk = false;
if(isHotOutside && thirstLevel >= 3 && moneyInWallet >= (2 * costOfMilk)){
    willBuyMilk = true;
}
console.log('Do I need to buy milk? - ' + willBuyMilk);