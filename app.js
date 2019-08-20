const task = require('./task');
const app = async function mainAppFile() { return new Promise((resolve, reject) => {
  task().then(() => {
    return resolve();
    // return 0;
  }).catch((err) => {
    return resolve();
    // return 0;
  })
})}

app();
module.exports = app;
