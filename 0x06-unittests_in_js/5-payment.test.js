const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToAp = require('./5-payment');
const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToAp', () => {
  let conSpy;
  beforeEach(() =>{
    conSpy = sinon.spy(console, 'log');
  });
  afterEach(() =>{
    conSpy.restore();
  })
  it('sendPaymentRequestToAp uses the caiculateNumber func', () =>{
    sendPaymentRequestToAp(100, 20);
    expect(conSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(conSpy.calledOnce).to.be.true;

  });
  it('sendPaymentRequestToAp uses the caiculateNumber func', () =>{
    sendPaymentRequestToAp(10, 10);
    expect(conSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(conSpy.calledOnce).to.be.true;
  });
});
