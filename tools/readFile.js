const path = require('path');
const fs = require('fs');

const readFile = function readFileFunction(fileName='') {
  let rawData = fs.readFileSync(path.join(process.cwd(), fileName));
  return rawData;
}

module.exports = readFile;
