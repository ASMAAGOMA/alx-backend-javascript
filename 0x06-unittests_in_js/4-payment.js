const Utils = require('./utils');

function sendPaymentRequestToAp(totalAmount, totalShipping) {
    const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${total}`);
}
module.exports = sendPaymentRequestToAp;
