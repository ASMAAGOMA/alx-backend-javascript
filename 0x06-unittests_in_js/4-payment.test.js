const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToAp = require('./4-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToAp', () => {
  it('sendPaymentRequestToAp uses the caiculateNumber func', () =>{
    const stubbb = sinon.stub(Utils, 'calculateNumber').returns(10);
    const conSpy = sinon.spy(console, 'log');

    sendPaymentRequestToAp(100, 20);
    expect(stubbb.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(conSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    stubbb.restore();
    conSpy.restore();
  });
});
