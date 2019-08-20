const Validator = require('jsonschema').Validator;
let v = new Validator();

let juridicalUserCashOut = {
  "id":"/JuridicalUserCashOut",
  "type":"object",
  "properties":{
    "percents":{
      "type":"number",
      "minimum":0
    },
    "min":{
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
    }
  },
  "required":["percents", "min"]
}

v.addSchema(juridicalUserCashOut, '/JuridicalUserCashOut');

const juridicalUserCashOutConfigSchema = async function validateJuridicalUserCashOutConfigSchema(cashOut) { return new Promise((resolve, reject) => {
  if(cashOut === undefined)
  {
    return reject("JURIDICAL USER CASH OUT CONFIG UNDEFINED")
  }
  let result = v.validate(cashOut, '/JuridicalUserCashOut');
  if(result.errors.length)
  {
    return reject(result.errors);
  }
  return resolve();
})}

module.exports = juridicalUserCashOutConfigSchema;
