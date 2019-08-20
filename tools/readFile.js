const path = require('path');
const fs = require('fs');

const readFile = function readFileFunction(fileName='') {
  try {
    let rawData = fs.readFileSync(path.join(process.cwd(), fileName));
    return rawData;
  } catch(err) {
    throw "UNABLE TO READ FILE";
  }
}

module.exports = readFile;
