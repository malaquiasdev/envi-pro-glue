//const AWS = require('aws-sdk');
const fs = require('fs');
const config = require('./config');
const { logError } = require('../../components/logger');
const createVacantModel = require('../../components/dynamodb/models/Vacant');
const createNewFile = require('../../components/s3/create-new-file');
const executeExportDataToCSVFile = require('./use-case');

//const s3 = new AWS.S3();

async function handlerExportDataToCSVFileStep() {
  try {
    await executeExportDataToCSVFile(
      {
        tableName: config.tableName,
        bucketName: config.bucketName
      },
      { createVacantModel, fs, logError, createNewFile }
    );
  } catch (error) {
    logError({
      message: error.message,
      params: { type: error.name, stack: error.stack }
    });
    throw error;
  }
}

module.exports = { handlerExportDataToCSVFileStep };
