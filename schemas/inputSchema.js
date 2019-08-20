const Validator = require('jsonschema').Validator;
let v = new Validator();

let input = {
  "id":"/Input",
  "type":"array",
  "items":{
    "type":"object",
    "properties":{
      "date":{
        "type":"string",
        "format":"date"
      },
      "user_id":{
        "type":"number"
      },
      "user_type":{
        "type":"string",
        "enum":["natural", "juridical"]
      },
      "type":{
        "type":"string",
        "enum":["cash_in", "cash_out"]
      },
      "operation":{
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
    "required":['date', 'user_id', 'user_type', 'type', 'operation']
  }
}

v.addSchema(input, '/Input');

const inputSchema = async function validateInputSchema(input) { return new Promise((resolve, reject) => {
  if(input === undefined)
  {
    return reject("INPUT CONFIG UNDEFINED")
  }
  let result = v.validate(input, '/Input');
  if(result.errors.length)
  {
    return reject(result.errors);
  }
  return resolve();
})}

module.exports = inputSchema;
