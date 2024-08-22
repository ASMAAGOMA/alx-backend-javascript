function getPaymentTokenFromAPI(success) {
  return new Promise((res, _rej) => {
    if (success) {
      res({data: 'Successful response from the API'});
    }
  })
}
module.exports = getPaymentTokenFromAPI;