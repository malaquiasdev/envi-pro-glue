const logger = require('pino')();
const config = require('./config');
const createVacantModel = require('../../components/dynamodb/models/Vacant');
const createTable = require('../../components/dynamodb/create-table');
const executeCreateVacantTable = require('./use-case');

async function handlerCreateVacantTableStep() {
  try {
    await executeCreateVacantTable(
      { tableName: config.tableName },
      { createTable, createVacantModel }
    );
  } catch (error) {
    logger.error(error);
    throw error;
  }
}

module.exports = { handlerCreateVacantTableStep };
