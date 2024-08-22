const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToAp = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToAp', () => {
  it('sendPaymentRequestToAp uses the caiculateNumber func', () =>{
    const spying = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToAp(100, 200);
    expect(spying.calledOnceWithExactly('SUM', 100, 200)).to.be.true;
    spying.restore();
  });
});
