const requestCashInConfig = require('./requestCashInConfig');
const requestJuridicalUserCashOutConfig = require('./requestJuridicalUserCashOutConfig');
const requestNaturalUserCashOutConfig = require('./requestNaturalUserCashOutConfig');
const requestConversionRates = require('./requestConversionRates');

const requestConfig = function requestConfigFromApiBasedOnTypeArg(type='') {
  switch(type) {
    case "cashIn": {
      return requestCashInConfig();
      break;
    }
    case "juridicalCashOut": {
      return requestJuridicalUserCashOutConfig();
      break;
    }
    case "naturalCashOut": {
      return requestNaturalUserCashOutConfig();
      break;
    }
    case "conversionRates": {
      return requestConversionRates();
      break;
    }
    default: {
      return new Promise((resolve, reject) => {
        return reject("UNRECOGNIZED CONFIG TYPE");
      })
    }
  }
}

module.exports = requestConfig;
