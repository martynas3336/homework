let regexFilter = /\,(?=\s*?[\}\]])/g;
const readJson = function readJsonFunction(rawData='') {
  let data = rawData.toString();
  data = data.replace(regexFilter, '');
  let dataJson = JSON.parse(data);
  return dataJson;
}

module.exports = readJson;
