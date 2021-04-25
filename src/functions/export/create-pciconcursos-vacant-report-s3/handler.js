const fs = require('fs');
const config = require('./config');
const { logInfo, logError } = require('../../../components/logger');
const { createNewS3File } = require('../../../components/s3/create-new-file');
const {
  findAllVacants
} = require('../../../components/dynamodb/querys/find-all-vacants');
const { exportVacantDataToCSVFileInS3 } = require('./use-case');

async function handlerCreatePCIConcursosVacantReportS3() {
  logInfo({
    message: 'start - export report',
    params: config
  });
  try {
    const report = await exportVacantDataToCSVFileInS3(
      {
        tableName: config.tableName,
        bucketPath: config.bucketPath
      },
      { fs, logError, createNewS3File, findAllVacants, logInfo }
    );
    logInfo({ message: 'finish - export report', params: report });
    return report;
  } catch (error) {
    logError({
      message: error.message,
      params: { type: error.name, stack: error.stack }
    });
    throw error;
  }
}

module.exports = { handlerCreatePCIConcursosVacantReportS3 };
