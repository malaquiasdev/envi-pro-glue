const AWS = require('aws-sdk');

const s3 = new AWS.S3();

async function createNewS3File(params) {
  await s3.putObject(params).promise();
  return true;
}

module.exports = { createNewS3File };
