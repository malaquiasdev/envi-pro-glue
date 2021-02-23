const fs = require('fs');
const config = require('./config');
const { logError, logInfo } = require('../../components/logger');
const createVacantModel = require('../../components/dynamodb/models/Vacant');
const createNewS3File = require('../../components/s3/create-new-file');
const executeExportDataToCSVFile = require('./use-case');

async function handlerExportDataToCSVFileStep() {
  try {
    await executeExportDataToCSVFile(
      {
        tableName: config.tableName,
        bucketName: config.bucketName
      },
      { createVacantModel, fs, logError, createNewS3File, logInfo }
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
