const request = require('request');
const readJson = require('../tools/readJson');
const naturalUserCashOutConfigSchema = require('../schemas/naturalUserCashOutConfigSchema');

const getNaturalUserCashOutConfig = async function getNaturalUserCashOutConfigFromTaskApi() { return new Promise((resolve, reject) => {
  Promise.resolve()

  .then(() => { return new Promise((resolve, reject) => {
    request('http://private-38e18c-uzduotis.apiary-mock.com/config/cash-out/natural', function (error, response, body) {
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
    naturalUserCashOutConfigSchema(config).then(() => {
      return resolve(config);
    }).catch((err) => {
      return reject("INVALID NATURAL USER CASH OUT CONFIG")
    })
  })})

  .then((config) => { return resolve(config); })
  .catch((err) => { return reject(err); })

})}

module.exports = getNaturalUserCashOutConfig;
