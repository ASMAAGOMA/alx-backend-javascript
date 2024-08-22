const { expect } = require('chai');
const server = require('./api');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('help', () =>{
  it('status 200 check', (done) => {
    chai.request(server)
    .get('/')
    .end((res, err) => {
      expect(res).to.have.status(200);
      done();
    });
  });
  it('text check', (done) => {
    chai.request(server)
    .get('/')
    .end((res, err) => {
      expect(res.text).to.equal('Welcome to the payment system');
      done();
    });
  });
});