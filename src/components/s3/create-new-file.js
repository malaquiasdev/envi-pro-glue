const AWS = require('aws-sdk');
const logError = require('../logger/index');

const s3 = new AWS.S3();

async function createNewFile(params) {
  try {
    return s3.putObject(params).promise();
  } catch (error) {
    logError({
      message: error.message,
      params: { type: error.name, stack: error.stack }
    });
    throw error;
  }
}

module.exports = createNewFile;
