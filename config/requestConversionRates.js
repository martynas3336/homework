const request = require('request');
const readJson = require('../tools/readJson');
const conversionRatesConfigSchema = require('../schemas/conversionRatesConfigSchema');

const getConversionRates = async function getConversionRatesFromTaskApi() { return new Promise((resolve, reject) => {
  Promise.resolve()

  .then(() => { return new Promise((resolve, reject) => {
    request('http://private-38e18c-uzduotis.apiary-mock.com/rates', function (error, response, body) {
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
  })})

  .then((config) => { return new Promise((resolve, reject) => {
    conversionRatesConfigSchema(config).then(() => {
      return resolve(config);
    }).catch((err) => {
      return reject("INVALID CONVERSION RATES CONFIG");
    })
  })})

  .then((config) => { return resolve(config); })
  .catch((err) => { return reject(err); })

})}

module.exports = getConversionRates;
