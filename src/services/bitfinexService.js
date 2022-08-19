const axios = require('axios')

const baseUrl = "https://api-pub.bitfinex.com/v2/";

async function getBooks(pairName) {
  const pathParams = `book/${pairName}/P0`;
  const queryParams = "len=100";
  const res = await axios.get(`${baseUrl}/${pathParams}?${queryParams}`)
    .then(response => {
        return response.data;
    }, error => {
        console.log(error);
    })
  return res;
}

module.exports = {
  getBooks
}