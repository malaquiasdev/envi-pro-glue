const AWS = require('aws-sdk');
const { logError } = require('../logger/index');

const s3 = new AWS.S3();

async function createNewS3File(params) {
  try {
    await s3.putObject(params).promise();
    return true;
  } catch (error) {
    logError({
      message: error.message,
      params: { type: error.name, stack: error.stack }
    });
    throw error;
  }
}

module.exports = { createNewS3File };
