const chai = require('chai');
const expect = chai.expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromApi', (done) => {
  it('resolve case', () =>{
    getPaymentTokenFromAPI(true).then((response) =>{
      expect(response).to.include({data: 'Successful response from the API'});
      done();
    });
  });
})