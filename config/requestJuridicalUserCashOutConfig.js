const request = require('request');
const readJson = require('../tools/readJson');
const juridicalUserCashOutConfigSchema = require('../schemas/juridicalUserCashOutConfigSchema');

const getJuridicalUserCashOutConfig = async function getJuridicalUserCashOutConfigFromTaskApi() { return new Promise((resolve, reject) => {
  Promise.resolve()

  .then(() => { return new Promise((resolve, reject) => {
    request('http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/juridical', function (error, response, body) {
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
    juridicalUserCashOutConfigSchema(config).then(() => {
      return resolve(config);
    }).catch((err) => {
      return reject("INVALID JURIDICAL USER CASH OUT CONFIG");
    })
  })})

  .then((config) => { return resolve(config); })
  .catch((err) => { return reject(err); })

})}

module.exports = getJuridicalUserCashOutConfig;
