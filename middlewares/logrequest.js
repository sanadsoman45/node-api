const { writeFile } = require('fs');
const path = require('path');
require('dotenv').config();

function logRequest() {
  return (req, res, next) => {
    writeFile(
      path.resolve(process.env.file_path, process.env.file_name),
      `\n${new Date(Date.now()).toString()}:${req.ip} ${req.method}:${req.path}\n`,
      { flag: 'a' },
      (err, data) => {
        if (err) {
          console.log(`error is: ${err}`);
        } else {
          console.log(data);
        }
        next();
      }
    );
  };
}

module.exports = {
  logRequest
};
