/* eslint-disable no-undef */
const logger = require('pino')();
const AWS = require('aws-sdk');
const fs = require('fs');
const config = require('./config');
const createVacantModel = require('../../components/dynamodb/models/Vacant');
const executeExportDataToCSVFile = require('./use-case');

const s3 = new AWS.S3();

async function handlerExportDataToCSVFileStep() {
  try {
    await executeExportDataToCSVFile(
      {
        tableName: config.tableName,
        bucketName: config.bucketName
      },
      { createVacantModel, fs, logger, s3 }
    );
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerExportDataToCSVFileStep };
