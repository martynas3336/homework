const Validator = require('jsonschema').Validator;
let v = new Validator();

let cashIn = {
  "id":"/CashIn",
  "type":"object",
  "properties":{
    "percents":{
      "type":"number",
      "minimum":0
    },
    "max":{
      "type":"object",
      "properties":{
        "amount":{
          "type":"number",
          "minimum":0
        },
        "currency":{
          "type":"string",
          "enum":["EUR"]
        }
      },
      "required":["amount", "currency"]
    },
  },
  "required":["percents", "max"]
}

v.addSchema(cashIn, '/CashIn');

const cashInConfigSchema = async function validateCashInConfigSchema(cashIn={}) { return new Promise((resolve, reject) => {
  if(cashIn === undefined)
  {
    return reject("CASH IN CONFIG UNDEFINED")
  }
  let result = v.validate(cashIn, '/CashIn');
  if(result.errors.length)
  {
    return reject(result.errors);
  }
  return resolve();
})}

module.exports = cashInConfigSchema;
