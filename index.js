// Is it hot outside today?
var isHotOutside = true;
console.log('Is it hot outside? - ' + isHotOutside);

// Is today a weekday?
var isWeekday = true;
console.log('Is it a week day? - ' + isWeekday);

// Do we have money on hand?
var hasMoneyInPocket = true;
console.log('Do I have money in my pocket? - ' + hasMoneyInPocket);

// Cost of milk.
var costOfMilk = 2.49;
console.log('Cost of milk: $' + costOfMilk);

// How much money in wallet?
var moneyInWallet = 40;
console.log('Money in wallet: $' + moneyInWallet);

// How thirsty are we on 1 - 10 scale
var thirstLevel = 5;
console.log('Thirst level: ' + thirstLevel);

//Buy ice cream if it is hot outside and we have money on hand.
var shouldBuyIceCream = isHotOutside && hasMoneyInPocket;
console.log('Should I buy ice cream? - ' + shouldBuyIceCream);

//Go swimming if it is hot outside and it is not a weekday.
var willGoSwimming = isHotOutside && !isWeekday;
console.log('Will I go swimming? - ' + willGoSwimming);

//It's a good day if it is hot outside, we have money, and it is not a weekday.
var isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday;
console.log('Is today a good day? - ' + isAGoodDay);

//Buy milk if it's hot outside, if we are thirsty and if we can afford 2 things of milk.
var willBuyMilk = isHotOutside && thirstLevel >= 3 && moneyInWallet >= (2 * costOfMilk);
console.log('Do I need to buy milk? - ' + willBuyMilk);