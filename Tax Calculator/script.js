let phoneAmmount = 30;
let percentageNum = 5;

const tax = 1 + (percentageNum/100);

let priceBeforeTax = 119.95;
let totalPriceAfterTax = (priceBeforeTax * tax) * phoneAmmount;

console.log(`The total price of ${phoneAmmount} phones at an individual price of ${priceBeforeTax}$ and a tax of ${percentageNum}% is ${totalPriceAfterTax}$`);