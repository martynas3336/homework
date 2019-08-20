const getFileName = require('./tools/getFileName');
const readFile = require('./tools/readFile');
const readJson = require('./tools/readJson');
const getConfig = require('./config/getConfig');
const action = require('./action');

const task = async function mainTask() { return new Promise((resolve, reject) => {
  let fileName = getFileName(process.argv);
  let data = readJson(readFile(fileName));
  let feeConfig = {};

  Promise.resolve()

  .then(() => { return new Promise((resolve, reject) => {
    getConfig().then((conf) => {
      feeConfig = conf;
      return resolve();
    }).catch((err) => {
      return reject(err);
    })
  })})

  .then(() => { return action({operationsData:data, feeConfig}); })

  .then((result) => {
    result.forEach((res) => {
      console.log(res.toFixed(2));
    })
  })

  .then(() => { return resolve(); })
  .catch((err) => { return reject(err); })

})}

module.exports = task;
