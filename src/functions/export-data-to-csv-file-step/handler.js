/* eslint-disable no-undef */
const logger = require('pino')();
const AWS = require('aws-sdk');
const config = require('./config');
const createVacantModel = require('../../models/Vacant');
const parseDataToCSV = require('./parse-data-to-csv');

const s3 = new AWS.S3();

async function handlerExportDataToCSVFileStep() {
  try {
    const VacantModel = createVacantModel(config.tableName);
    const data = await VacantModel.scan().exec();
    const csv = parseDataToCSV(data);
    const params = {
      Bucket: 'envipro-glue-dev', // pass your bucket name
      Key: `users-${new Date().getTime()}.csv`, // file will be saved as testBucket/contacts.csv
      ACL: 'public-read',
      Body: csv,
      ContentType: 'text/csv'
    };
    return s3.upload(params, (s3Err, result) => {
      if (s3Err) throw s3Err;
      else {
        return { redirectUri: result.Location };
      }
    });
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerExportDataToCSVFileStep };
