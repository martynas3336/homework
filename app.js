const task = require('./task');
const app = async function mainAppFile() { return new Promise((resolve, reject) => {
  task().then(() => {
    return resolve();
  }).catch((err) => {
    return reject(err);
  })
})}

app().then(() => {
  return 0;
}).catch((err) => {
  console.log("ERROR OCCURED");
  if(err)
  {
    console.log(err);
  } else {
    console.log("UNRECOGNIZED ERROR");
  }

  return 0;
})
module.exports = app;
