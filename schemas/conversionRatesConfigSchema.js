const Validator = require('jsonschema').Validator;
let v = new Validator();

let conversionRates = {
  "id":"/ConversionRates",
  "type":"object",
  "properties":{
    "EUR":{
      "type":"object",
      "properties":{
        "USD":{
          "type":"number"
        },
        "JPY":{
          "type":"number"
        }
      },
      "required":["USD", "JPY"]
    }
  },
  "required":["EUR"]
}

v.addSchema(conversionRates, '/ConversionRates');

const conversionRatesConfigSchema = async function validateConversionRatesConfigSchema(conversionRates) { return new Promise((resolve, reject) => {
  if(conversionRates === undefined)
  {
    return reject("CONVERSION RATES CONFIG UNDEFINED")
  }
  let result = v.validate(conversionRates, '/ConversionRates');
  if(result.errors.length)
  {
    return reject(result.errors);
  }
  return resolve();
})}

module.exports = conversionRatesConfigSchema;
