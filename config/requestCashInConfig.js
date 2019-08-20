const request = require('request');
const readJson = require('../tools/readJson');

const getCashInConfig = async function getCashInConfigFromTaskApi() { return new Promise((resolve, reject) => {
  request('http://private-38e18c-uzduotis.apiary-mock.com/config/cash-in', function (error, response, body) {
    if(error)
    {
      return reject(error);
    }
    if(response.statusCode !== 200)
    {
      return reject(response.statusCode);
    }
    return resolve(readJson(body));
  });
})}

module.exports = getCashInConfig;
