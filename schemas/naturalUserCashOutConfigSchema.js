const Validator = require('jsonschema').Validator;
let v = new Validator();

let naturalUserCashOut = {
  "id":"/NaturalUserCashOut",
  "type":"object",
  "properties":{
    "percents":{
      "type":"number",
      "minimum":0
    },
    "week_limit":{
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
  "required":["percents", "week_limit"]
}

v.addSchema(naturalUserCashOut, '/NaturalUserCashOut');

const naturalUserCashOutConfigSchema = async function validateNaturalUserCashOutConfigSchema(cashOut) { return new Promise((resolve, reject) => {
  if(cashOut === undefined)
  {
    return reject("NATURAL USER CASH OUT CONFIG UNDEFINED")
  }
  let result = v.validate(cashOut, '/NaturalUserCashOut');
  if(result.errors.length)
  {
    return reject(result.errors);
  }
  return resolve();
})}

module.exports = naturalUserCashOutConfigSchema;
