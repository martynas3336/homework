const User = require('../User');
let users = [];
let result = [];
const action = async function mainTaskProcess({operationsData, feeConfig}) { return new Promise((resolve, reject) => {
  operationsData.forEach((operationData) => {
    let user = new User({user_id:operationData.user_id});
    let userFilter = users.find(user => user.user_id === operationData.user_id);
    if(userFilter !== undefined)
    {
      user = userFilter;
    } else {
      users.push(user);
    }
    result.push(user.operation({operationData, feeConfig}));
  })
  return resolve(result);
})}

module.exports = action;
