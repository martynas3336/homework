const requestConfig = require('./requestConfig');

const getConfig = async function getConfigFromApiAndMergeItIntoObject() { return new Promise((resolve, reject) => {
  let config = {};
  Promise.all([
    new Promise((resolve, reject) => {
      requestConfig("cashIn").then((res) => {
        config.cashIn = res;
        return resolve();
      }).catch((err) => {
        return reject(err);
      })
    }),
    new Promise((resolve, reject) => {
      requestConfig("juridicalCashOut").then((res) => {
        config.juridicalCashOut = res;
        return resolve();
      }).catch((err) => {
        return reject(err);
      })
    }),
    new Promise((resolve, reject) => {
      requestConfig("naturalCashOut").then((res) => {
        config.naturalCashOut = res;
        return resolve();
      }).catch((err) => {
        return reject(err);
      })
    }),
    new Promise((resolve, reject) => {
      requestConfig("conversionRates").then((res) => {
        config.conversionRates = res;
        return resolve();
      }).catch((err) => {
        return reject(err);
      })
    })
  ]).then(() => {
    return resolve(config);
  }).catch((err) => {
    return reject(err);
  })
})}

module.exports = getConfig;
