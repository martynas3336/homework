const getFileName = function getFileNameBasedOnArgs(args=[]) {
  try {
    let fileName = args[2];
    if(fileName === undefined)
    {
      throw 'error';
    }
    return args[2];
  } catch(err) {
    throw "UNABLE TO GET FILE NAME";
  }
}

module.exports = getFileName;
