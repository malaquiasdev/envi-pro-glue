/* eslint-disable no-undef */
const logger = require('pino')();
const AWS = require('aws-sdk');
const fs = require('fs');
const config = require('./config');
const createVacantModel = require('../../models/Vacant');
const parseDataToCSV = require('./parse-data-to-csv');

const s3 = new AWS.S3();

async function handlerExportDataToCSVFileStep() {
  try {
    const VacantModel = createVacantModel(config.tableName);
    const data = await VacantModel.scan().exec();
    await parseDataToCSV(data);
    fs.readFile('/tmp/data.csv', 'utf8', (err, res) => {
      if (err) {
        logger.error(err, 'err');
      }
      const params = {
        Bucket: 'envipro-glue-dev/export',
        Key: `vacants-${new Date().getTime()}.csv`,
        ACL: 'public-read',
        Body: res,
        ContentType: 'text/csv'
      };
      return s3.putObject(params, (s3Err, result) => {
        if (s3Err) {
          throw s3Err;
        } else {
          return { redirectUri: result.Location };
        }
      });
    });
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerExportDataToCSVFileStep };
